import { type NextRequest, NextResponse } from "next/server"
import { mockReports } from "@/lib/mock-data"

// In-memory storage for demo (would use Firestore in production)
const reports = [...mockReports]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const type = searchParams.get("type")
  const severity = searchParams.get("severity")
  const status = searchParams.get("status")

  let filteredReports = [...reports]

  if (type && type !== "all") {
    filteredReports = filteredReports.filter((r) => r.type === type)
  }
  if (severity && severity !== "all") {
    filteredReports = filteredReports.filter((r) => r.severity === severity)
  }
  if (status && status !== "all") {
    filteredReports = filteredReports.filter((r) => r.status === status)
  }

  // Sort by date, newest first
  filteredReports.sort((a, b) => {
    const dateA = a.createdAt instanceof Date ? a.createdAt : a.createdAt.toDate()
    const dateB = b.createdAt instanceof Date ? b.createdAt : b.createdAt.toDate()
    return dateB.getTime() - dateA.getTime()
  })

  return NextResponse.json(filteredReports)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const newReport = {
      id: Date.now().toString(),
      ...body,
      status: "open",
      createdAt: new Date(),
      createdByUserId: null,
    }

    reports.unshift(newReport)

    return NextResponse.json(newReport, { status: 201 })
  } catch (error) {
    console.error("Error creating report:", error)
    return NextResponse.json({ error: "Failed to create report" }, { status: 500 })
  }
}
