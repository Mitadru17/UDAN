import { type NextRequest, NextResponse } from "next/server"
import { mockRoadAnalysis } from "@/lib/mock-data"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File | null
    const description = formData.get("description") as string | null
    const locationName = formData.get("locationName") as string | null

    // Check for Gemini API key
    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      // Return mock data in development
      console.log("Using mock data - GEMINI_API_KEY not configured")
      await new Promise((resolve) => setTimeout(resolve, 1500)) // Simulate delay
      return NextResponse.json(mockRoadAnalysis)
    }

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 })
    }

    // Convert image to base64
    const bytes = await image.arrayBuffer()
    const base64Image = Buffer.from(bytes).toString("base64")

    // Call Gemini Vision API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a road safety expert for the Uttarakhand hill region. Analyze this image of a road or path and provide safety assessment.

Context: ${description || "No additional context provided"}
Location: ${locationName || "Unknown location in Uttarakhand"}

Analyze the image and respond with ONLY valid JSON in this exact format:
{
  "type": "road",
  "severity": "low" | "medium" | "high",
  "title": "Brief title describing the road condition",
  "advice": "1. First safety step\\n2. Second safety step\\n3. Third safety step\\n4. Fourth safety step\\n5. Fifth safety step",
  "categoryDetails": {
    "roadCondition": "blocked" | "cracked" | "wet" | "damaged" | "safe" | "unclear"
  }
}

Consider: landslides, road cracks, blocked paths, wet surfaces, collapsing edges.
Provide practical advice for villagers and travelers in hill regions.`,
                },
                {
                  inline_data: {
                    mime_type: image.type,
                    data: base64Image,
                  },
                },
              ],
            },
          ],
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      console.error("Gemini API error:", data)
      return NextResponse.json(mockRoadAnalysis)
    }

    // Parse the response
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!textContent) {
      return NextResponse.json(mockRoadAnalysis)
    }

    // Extract JSON from response
    const jsonMatch = textContent.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json(mockRoadAnalysis)
    }

    const result = JSON.parse(jsonMatch[0])
    return NextResponse.json(result)
  } catch (error) {
    console.error("Road analysis error:", error)
    return NextResponse.json(mockRoadAnalysis)
  }
}
