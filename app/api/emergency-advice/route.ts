import { type NextRequest, NextResponse } from "next/server"
import { mockReports } from "@/lib/mock-data"

export async function POST(request: NextRequest) {
  try {
    const { description } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY || "AIzaSyA-X-0mRg2OeQccMaLdQ1LawLDyUYbN5XM"

    console.log("=== Emergency Advice API Called ===")
    console.log("Question:", description)
    console.log("API Key available:", apiKey ? "Yes (length: " + apiKey.length + ")" : "No")

    if (!apiKey) {
      // Return generic emergency advice
      await new Promise((resolve) => setTimeout(resolve, 1000))
      return NextResponse.json({
        advice: `IMMEDIATE SAFETY STEPS:

1. Stay calm and assess the situation
2. If someone is injured, do not move them unless there's immediate danger
3. Call 108 for ambulance immediately if there's a medical emergency
4. Call 1070 for disaster helpline
5. Move to a safe location if possible
6. Help others only if it's safe to do so
7. Wait for emergency services to arrive

IMPORTANT: This is general guidance. Always prioritize calling professional emergency services (108) for serious situations.`,
      })
    }

    // Get recent reports for context
    const recentReports = mockReports
      .filter((r) => r.status === "open" || r.status === "in_progress")
      .slice(0, 15)
      .map((r, idx) => ({
        id: idx + 1,
        type: r.type,
        severity: r.severity,
        title: r.title,
        location: r.locationName,
        advice: r.advice,
      }))

    const contextInfo = `
CURRENT ACTIVE REPORTS IN UTTARAKHAND (November 26, 2025):

${recentReports
  .map(
    (r) =>
      `Report #${r.id} [${r.type.toUpperCase()}] - ${r.severity.toUpperCase()} SEVERITY
Location: ${r.location}
Coordinates: Available for map display
Issue: ${r.title}
Current Status: Active
Safety Advice: ${r.advice}`,
  )
  .join("\n\n")}

AVAILABLE EMERGENCY SERVICES & FACILITIES:
- Emergency Numbers: 108 (Ambulance), 1070 (Disaster Helpline), 100 (Police), 101 (Fire)
- Hospitals: District Hospital Dehradun, AIIMS Rishikesh, Himalayan Medical Institute, Base Hospital Haldwani
- Water Supply Centers: Jal Sansthan Water Tanks, Municipal Water Points, Emergency Tanker Services
- Safety Centers: SDRF Control Room (1070), District Emergency Operations Center, ITBP Rescue Base

IMPORTANT INSTRUCTIONS:
- Only mention reports geographically relevant to the user's question
- When user asks to "show on map" or mentions map, respond with: "📍 MAP VIEW REQUESTED - Report #[ID]" 
- Provide comprehensive data including locations, contacts, and alternatives
- Be specific about coordinates and exact locations when available`

    console.log("Calling Gemini API with context of", recentReports.length, "reports")

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are UDAN AI, a comprehensive safety advisor for Uttarakhand with real-time access to disaster reports, emergency services, and all safety resources.

${contextInfo}

HOW TO RESPOND:
1. Analyze the user's question and identify the location and concern type (road/water/health/emergency)
2. Search through ALL active reports above for relevant information
3. Provide comprehensive data including:
   - Safety verdict: ✅ SAFE / ⚠️ CAUTION / ❌ NOT SAFE
   - Specific report details if hazards exist
   - Exact locations and coordinates when relevant
   - Emergency contacts and nearby facilities
   - Alternative routes or solutions
   - Any additional safety tips

4. When user asks about MAP or "show me on map" or "where is this":
   - Identify the specific report(s) they're asking about
   - Respond with "📍 MAP VIEW REQUESTED - Report #[ID] - [Location Name]"
   - Then provide details about the location

5. Be thorough and helpful:
   - List all relevant reports, not just one
   - Provide phone numbers for emergency services
   - Suggest alternatives when hazards exist
   - Give specific directions or locations
   - Include nearby resources (hospitals, water points, safety centers)

6. Format clearly with bullet points or numbered lists for multiple items

User Question: ${description}

Provide a comprehensive, data-rich response with all relevant information from the reports and services listed above.`,
                },
              ],
            },
          ],
        }),
      },
    )

    const data = await response.json()
    
    console.log("Gemini API response status:", response.status)
    console.log("Gemini API response:", JSON.stringify(data, null, 2))

    if (!response.ok) {
      console.error("Gemini API error response:", data)
      throw new Error(`Gemini API error: ${data.error?.message || "Unknown error"}`)
    }

    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text

    if (!textContent) {
      console.error("No text content in Gemini response")
      throw new Error("No content received from Gemini API")
    }

    console.log("Successfully received Gemini response")

    return NextResponse.json({
      advice: textContent,
    })
  } catch (error) {
    console.error("=== Emergency advice error ===")
    console.error("Error type:", error instanceof Error ? error.constructor.name : typeof error)
    console.error("Error message:", error instanceof Error ? error.message : String(error))
    console.error("Full error:", error)
    return NextResponse.json({
      advice: "Please call 108 (ambulance) or 1070 (disaster helpline) immediately for emergency assistance.",
    })
  }
}
