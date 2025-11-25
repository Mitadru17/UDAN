"use client"

import { ReportCard } from "./report-card"
import { EmptyState } from "./empty-state"
import type { Report } from "@/lib/types"

function FileTextIcon({ className }: { className?: string }) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}

interface ReportListProps {
  reports: Report[]
  onReportClick?: (report: Report) => void
  emptyMessage?: string
}

export function ReportList({ reports, onReportClick, emptyMessage = "No reports found" }: ReportListProps) {
  if (reports.length === 0) {
    return (
      <EmptyState
        icon={<FileTextIcon className="h-8 w-8 text-muted-foreground" />}
        title={emptyMessage}
        description="Reports will appear here when they are submitted."
      />
    )
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} onClick={() => onReportClick?.(report)} />
      ))}
    </div>
  )
}
