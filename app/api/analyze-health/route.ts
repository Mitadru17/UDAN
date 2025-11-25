import { type NextRequest, NextResponse } from "next/server"
import { mockHealthAnalysis } from "@/lib/mock-data"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const image = formData.get("image") as File | null
    const description = formData.get("description") as string | null

    const apiKey = process.env.GEMINI_API_KEY

    if (!apiKey) {
      console.log("Using mock data - GEMINI_API_KEY not configured")
      await new Promise((resolve) => setTimeout(resolve, 1500))
      return NextResponse.json(mockHealthAnalysis)
    }

    if (!description && !image) {
      return NextResponse.json({ error: "Description or image is required" }, { status: 400 })
    }

    const parts: { text?: string; inline_data?: { mime_type: string; data: string } }[] = [
      {
        text: `You are a cautious first-aid advisor for remote communities in Uttarakhand. 

IMPORTANT RULES:
- NEVER prescribe specific medicines or dosages
- ALWAYS recommend seeking professional medical help
- Provide only generic first-aid guidance
- Be cautious and prioritize safety

Situation description: ${description || "See image for context"}

Analyze and respond with ONLY valid JSON in this exact format:
{
  "type": "health",
  "severity": "low" | "medium" | "high",
  "title": "Brief title describing the health situation",
  "advice": "1. First first-aid step\\n2. Second step\\n3. Third step\\n4. Fourth step\\n5. Seek medical help from doctor or call 108",
  "categoryDetails": {
    "healthIssue": "burn" | "cut" | "fall" | "bite" | "other" | "minor_injury" | "serious"
  }
}

Common scenarios: burns, cuts, falls, insect/animal bites, sprains.
Always end advice with recommendation to seek professional help if needed.`,
      },
    ]

    if (image) {
      const bytes = await image.arrayBuffer()
      const base64Image = Buffer.from(bytes).toString("base64")
      parts.push({
        inline_data: {
          mime_type: image.type,
          data: base64Image,
        },
      })
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts }],
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      console.error("Gemini API error:", data)
      return NextResponse.json(mockHealthAnalysis)
    }

    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text
    if (!textContent) {
      return NextResponse.json(mockHealthAnalysis)
    }

    const jsonMatch = textContent.match(/\{[\s\S]*\}/)
    if (!jsonMatch) {
      return NextResponse.json(mockHealthAnalysis)
    }

    const result = JSON.parse(jsonMatch[0])
    return NextResponse.json(result)
  } catch (error) {
    console.error("Health analysis error:", error)
    return NextResponse.json(mockHealthAnalysis)
  }
}
