"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SeverityBadge } from "./severity-badge"
import type { AIAnalysisResult } from "@/lib/types"

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

function SaveIcon({ className }: { className?: string }) {
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
      <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
      <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
      <path d="M7 3v4a1 1 0 0 0 1 1h7" />
    </svg>
  )
}

interface AnalysisResultProps {
  result: AIAnalysisResult
  onSave: () => void
  isSaving?: boolean
}

export function AnalysisResult({ result, onSave, isSaving }: AnalysisResultProps) {
  const adviceItems = result.advice.split("\n").filter((item) => item.trim())

  return (
    <Card className="border-2 border-primary/20 bg-primary/5">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <CheckCircleIcon className="h-5 w-5 text-primary" />
            Analysis Complete
          </CardTitle>
          <SeverityBadge severity={result.severity} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-1 font-semibold">{result.title}</h4>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-medium text-muted-foreground">Safety Advice:</h4>
          <ul className="space-y-2">
            {adviceItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {item.replace(/^\d+\.\s*/, "")}
              </li>
            ))}
          </ul>
        </div>

        <Button onClick={onSave} disabled={isSaving} className="w-full">
          <SaveIcon className="mr-2 h-4 w-4" />
          {isSaving ? "Saving Report..." : "Save as Report"}
        </Button>
      </CardContent>
    </Card>
  )
}
