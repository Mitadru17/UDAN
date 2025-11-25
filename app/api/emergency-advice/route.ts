import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { description } = await request.json()

    const apiKey = process.env.GEMINI_API_KEY

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
                  text: `You are an emergency response advisor for Uttarakhand. Someone is in an emergency situation.

CRITICAL RULES:
- Provide ONLY generic safety instructions
- NEVER prescribe medicines or dosages
- ALWAYS recommend calling professional help (108 for ambulance, 1070 for disaster)
- Keep instructions simple and clear for non-technical users
- Prioritize immediate safety

Emergency description: ${description}

Provide 5-7 clear, actionable safety steps. Start with most urgent action.
Format as numbered list. End by recommending professional help.`,
                },
              ],
            },
          ],
        }),
      },
    )

    const data = await response.json()
    const textContent = data.candidates?.[0]?.content?.parts?.[0]?.text

    return NextResponse.json({
      advice: textContent || "Please call 108 immediately for emergency assistance.",
    })
  } catch (error) {
    console.error("Emergency advice error:", error)
    return NextResponse.json({
      advice: "Please call 108 (ambulance) or 1070 (disaster helpline) immediately for emergency assistance.",
    })
  }
}
