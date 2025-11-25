import { cn } from "@/lib/utils"
import type { Severity } from "@/lib/types"

interface SeverityBadgeProps {
  severity: Severity
  className?: string
}

export function SeverityBadge({ severity, className }: SeverityBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
        {
          "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400": severity === "low",
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400": severity === "medium",
          "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400": severity === "high",
        },
        className,
      )}
    >
      {severity.charAt(0).toUpperCase() + severity.slice(1)}
    </span>
  )
}
