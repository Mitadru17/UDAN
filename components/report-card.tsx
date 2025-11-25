"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { SeverityBadge } from "./severity-badge"
import { TypeBadge } from "./type-badge"
import type { Report } from "@/lib/types"

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function CheckCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function AlertCircleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}

interface ReportCardProps {
  report: Report
  onClick?: () => void
}

export function ReportCard({ report, onClick }: ReportCardProps) {
  const getDate = () => {
    if (report.createdAt instanceof Date) {
      return report.createdAt
    }
    if (typeof report.createdAt === "object" && "toDate" in report.createdAt) {
      return (report.createdAt as { toDate: () => Date }).toDate()
    }
    return new Date(report.createdAt as string)
  }

  const createdAt = getDate()
  const timeAgo = getTimeAgo(createdAt)

  return (
    <Card
      className={`cursor-pointer transition-all hover:shadow-md ${onClick ? "hover:border-primary/50" : ""}`}
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <TypeBadge type={report.type} />
            <SeverityBadge severity={report.severity} />
          </div>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            {report.status === "resolved" ? (
              <CheckCircleIcon className="h-3 w-3 text-green-500" />
            ) : (
              <AlertCircleIcon className="h-3 w-3 text-yellow-500" />
            )}
            <span className="capitalize">{report.status}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <h3 className="font-semibold leading-tight">{report.title}</h3>
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <MapPinIcon className="h-3 w-3" />
            {report.locationName}
          </span>
          <span className="flex items-center gap-1">
            <ClockIcon className="h-3 w-3" />
            {timeAgo}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

function getTimeAgo(date: Date): string {
  const now = new Date()
  const diff = now.getTime() - date.getTime()
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 60) return `${minutes}m ago`
  if (hours < 24) return `${hours}h ago`
  return `${days}d ago`
}
