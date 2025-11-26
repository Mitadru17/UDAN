import { type NextRequest, NextResponse } from "next/server"
import { mockWaterAnalysis } from "@/lib/mock-data"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File | null
    const description = formData.get("description") as string | null
    const locationName = formData.get("locationName") as string | null

    const apiKey = process.env.GEMINI_API_KEY || "AIzaSyA-X-0mRg2OeQccMaLdQ1LawLDyUYbN5XM"

    if (!apiKey) {
      console.log("Using mock data - GEMINI_API_KEY not configured")
      await new Promise((resolve) => setTimeout(resolve, 1500))
      return NextResponse.json(mockWaterAnalysis)
    }

    if (!image) {
      return NextResponse.json({ error: "Image is required" }, { status: 400 })
    }

    const bytes = await image.arrayBuffer()
    const base64Image = Buffer.from(bytes).toString("base64")

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
                  text: `You are a drinking water safety expert for schools and villages in Uttarakhand. Analyze this image of a water source, tank, or tap.

Context: ${description || "No additional context provided"}
Location: ${locationName || "Unknown location in Uttarakhand"}

Analyze the image and respond with ONLY valid JSON in this exact format:
{
  "type": "water",
  "severity": "low" | "medium" | "high",
  "title": "Brief title describing the water condition",
  "advice": "1. First safety step\\n2. Second safety step\\n3. Third safety step\\n4. Fourth safety step\\n5. Fifth safety step",
  "categoryDetails": {
    "waterIssue": "contaminated" | "muddy" | "unclear" | "clean" | "supply_disrupted" | "tank_damage"
  }
}

Consider: water clarity, color, visible contamination, storage condition, tank cleanliness.
If uncertain from visual, still provide general safety tips for water purification.`,
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
      return NextResponse.json(mockWaterAnalysis)
    }

    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!textContent) {
      return NextResponse.json(mockWaterAnalysis)
    }

    const jsonMatch = textContent.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json(mockWaterAnalysis)
    }

    const result = JSON.parse(jsonMatch[0])
    return NextResponse.json(result)
  } catch (error) {
    console.error("Water analysis error:", error)
    return NextResponse.json(mockWaterAnalysis)
  }
}
