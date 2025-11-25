"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { Report } from "@/lib/types"
import { cn } from "@/lib/utils"

interface MapWithMarkersProps {
  reports: Report[]
  className?: string
}

export function MapWithMarkers({ reports, className }: MapWithMarkersProps) {
  const reportsByLocation = reports.reduce(
    (acc, report) => {
      const loc = report.locationName || "Unknown"
      if (!acc[loc]) acc[loc] = []
      acc[loc].push(report)
      return acc
    },
    {} as Record<string, Report[]>,
  )

  const typeColors = {
    road: "bg-orange-500",
    water: "bg-blue-500",
    health: "bg-emerald-500",
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-muted/50", className)} style={{ minHeight: "400px" }}>
      {/* Background Map Image */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "url('/uttarakhand-topographic-map.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Map Content */}
      <div className="relative z-10 h-full p-4">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-semibold">Uttarakhand Region</h3>
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-orange-500" /> Road
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-blue-500" /> Water
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Health
            </span>
          </div>
        </div>

        {reports.length === 0 ? (
          <div className="flex h-64 flex-col items-center justify-center text-center text-muted-foreground">
            <MapPin className="mb-2 h-8 w-8" />
            <p>No reports with location data</p>
          </div>
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(reportsByLocation).map(([location, locationReports]) => (
              <Card key={location} className="border-border/50 bg-background/80 backdrop-blur">
                <CardContent className="p-3">
                  <div className="mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium truncate">{location}</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {locationReports.map((report) => (
                      <div
                        key={report.id}
                        className={cn("h-2 w-2 rounded-full", typeColors[report.type])}
                        title={`${report.title} (${report.severity})`}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {locationReports.length} report{locationReports.length !== 1 ? "s" : ""}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
