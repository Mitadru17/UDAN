import type { Timestamp } from "firebase/firestore"

export type ReportType = "road" | "water" | "health"
export type Severity = "low" | "medium" | "high"
export type ReportStatus = "open" | "resolved"

export interface Report {
  id: string
  type: ReportType
  severity: Severity
  status: ReportStatus
  title: string
  description: string
  advice: string
  locationName: string
  lat: number | null
  lng: number | null
  createdAt: Timestamp | Date
  createdByUserId: string | null
  categoryDetails?: {
    roadCondition?: string
    waterIssue?: string
    healthIssue?: string
  }
  imageUrl?: string
  aiRawResponse?: unknown
}

export interface AIAnalysisResult {
  type: ReportType
  severity: Severity
  title: string
  advice: string
  categoryDetails: {
    roadCondition?: string
    waterIssue?: string
    healthIssue?: string
  }
}

export interface User {
  id: string
  email: string
  displayName?: string
  isAdmin?: boolean
  createdAt: Timestamp | Date
}
