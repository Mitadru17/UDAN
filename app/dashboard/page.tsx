"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { MapWithMarkers } from "@/components/map-with-markers"
import { ReportCard } from "@/components/report-card"
import { LoadingSpinner } from "@/components/loading-spinner"
import { EmptyState } from "@/components/empty-state"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Report, ReportType, Severity, ReportStatus } from "@/lib/types"

function LayoutDashboardIcon({ className }: { className?: string }) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}

function AlertTriangleIcon({ className }: { className?: string }) {
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
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function DropletsIcon({ className }: { className?: string }) {
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
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function FilterIcon({ className }: { className?: string }) {
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
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}

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

export default function DashboardPage() {
  const [reports, setReports] = useState<Report[]>([])
  const [filteredReports, setFilteredReports] = useState<Report[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [typeFilter, setTypeFilter] = useState<ReportType | "all">("all")
  const [severityFilter, setSeverityFilter] = useState<Severity | "all">("all")
  const [statusFilter, setStatusFilter] = useState<ReportStatus | "all">("all")
  const [showAllLocations, setShowAllLocations] = useState(false)

  useEffect(() => {
    fetchReports()
  }, [])

  useEffect(() => {
    let filtered = [...reports]

    if (typeFilter !== "all") {
      filtered = filtered.filter((r) => r.type === typeFilter)
    }
    if (severityFilter !== "all") {
      filtered = filtered.filter((r) => r.severity === severityFilter)
    }
    if (statusFilter !== "all") {
      filtered = filtered.filter((r) => r.status === statusFilter)
    }

    setFilteredReports(filtered)
  }, [reports, typeFilter, severityFilter, statusFilter])

  const fetchReports = async () => {
    try {
      const response = await fetch("/api/reports")
      const data = await response.json()
      setReports(data)
      setFilteredReports(data)
    } catch (error) {
      console.error("Error fetching reports:", error)
    } finally {
      setIsLoading(false)
    }
  }

  // Calculate stats
  const stats = {
    total: reports.length,
    road: reports.filter((r) => r.type === "road"),
    water: reports.filter((r) => r.type === "water"),
    health: reports.filter((r) => r.type === "health"),
    highSeverity: reports.filter((r) => r.severity === "high"),
  }

  const getHighSeverityPercent = (typeReports: Report[]) => {
    if (typeReports.length === 0) return 0
    return Math.round((typeReports.filter((r) => r.severity === "high").length / typeReports.length) * 100)
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Minimal Header */}
        <div className="mb-10">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">Dashboard</h1>
          <p className="mt-1 text-sm text-muted-foreground">Overview of all safety reports</p>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <LoadingSpinner size="lg" />
          </div>
        ) : (
          <>
            {/* Minimal Stats Grid */}
            <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="border-0 bg-muted/40 shadow-none transition-all hover:bg-muted/60">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total</p>
                      <p className="mt-2 text-3xl font-light tabular-nums">{stats.total}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{stats.highSeverity.length} critical</p>
                    </div>
                    <FileTextIcon className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-orange-50/50 shadow-none transition-all hover:bg-orange-50/80 dark:bg-orange-950/10 dark:hover:bg-orange-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-orange-700 dark:text-orange-400">Road</p>
                      <p className="mt-2 text-3xl font-light tabular-nums text-orange-900 dark:text-orange-200">{stats.road.length}</p>
                      <p className="mt-1 text-xs text-orange-600/70 dark:text-orange-400/70">{getHighSeverityPercent(stats.road)}% critical</p>
                    </div>
                    <AlertTriangleIcon className="h-5 w-5 text-orange-400/40" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-blue-50/50 shadow-none transition-all hover:bg-blue-50/80 dark:bg-blue-950/10 dark:hover:bg-blue-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-blue-700 dark:text-blue-400">Water</p>
                      <p className="mt-2 text-3xl font-light tabular-nums text-blue-900 dark:text-blue-200">{stats.water.length}</p>
                      <p className="mt-1 text-xs text-blue-600/70 dark:text-blue-400/70">{getHighSeverityPercent(stats.water)}% critical</p>
                    </div>
                    <DropletsIcon className="h-5 w-5 text-blue-400/40" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-emerald-50/50 shadow-none transition-all hover:bg-emerald-50/80 dark:bg-emerald-950/10 dark:hover:bg-emerald-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-emerald-700 dark:text-emerald-400">Health</p>
                      <p className="mt-2 text-3xl font-light tabular-nums text-emerald-900 dark:text-emerald-200">{stats.health.length}</p>
                      <p className="mt-1 text-xs text-emerald-600/70 dark:text-emerald-400/70">{getHighSeverityPercent(stats.health)}% critical</p>
                    </div>
                    <HeartIcon className="h-5 w-5 text-emerald-400/40" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subtle Filters */}
            <Card className="mb-8 border-0 bg-muted/20 shadow-none">
              <CardContent className="p-6">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <FilterIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">Filter by</span>
                  </div>
                  
                  <div className="grid gap-6 sm:grid-cols-3">
                    <div className="space-y-3">
                      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Type</label>
                      <div className="flex flex-wrap gap-2">
                        {(["all", "road", "water", "health"] as const).map((type) => (
                          <Button
                            key={type}
                            variant={typeFilter === type ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setTypeFilter(type)}
                            className={typeFilter === type ? "shadow-none" : "hover:bg-muted/60"}
                          >
                            {type === "all" ? "All" : type.charAt(0).toUpperCase() + type.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Severity</label>
                      <div className="flex flex-wrap gap-2">
                        {(["all", "low", "medium", "high"] as const).map((severity) => (
                          <Button
                            key={severity}
                            variant={severityFilter === severity ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setSeverityFilter(severity)}
                            className={severityFilter === severity ? "shadow-none" : "hover:bg-muted/60"}
                          >
                            {severity === "all" ? "All" : severity.charAt(0).toUpperCase() + severity.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Status</label>
                      <div className="flex flex-wrap gap-2">
                        {(["all", "open", "resolved"] as const).map((status) => (
                          <Button
                            key={status}
                            variant={statusFilter === status ? "default" : "ghost"}
                            size="sm"
                            onClick={() => setStatusFilter(status)}
                            className={statusFilter === status ? "shadow-none" : "hover:bg-muted/60"}
                          >
                            {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Modern Location Section */}
            <div className="mb-10 space-y-8">
              {/* Sleek Header */}
              <div className="flex items-end justify-between border-b border-border/50 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MapPinIcon className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold tracking-tight">Location Overview</h2>
                  </div>
                  <p className="text-sm text-muted-foreground">Real-time incident tracking across Uttarakhand</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="h-2 w-2 rounded-sm bg-orange-500" />
                      <span>Road</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="h-2 w-2 rounded-sm bg-blue-500" />
                      <span>Water</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="h-2 w-2 rounded-sm bg-emerald-500" />
                      <span>Health</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold tabular-nums">{filteredReports.length}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Active</div>
                  </div>
                </div>
              </div>

              {/* Dual Panel Layout */}
              <div className="grid gap-6 lg:grid-cols-3">
                {/* Location List - 2 columns */}
                <div className="lg:col-span-2 space-y-3">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Uttarakhand Region</h3>
                    <span className="text-xs text-muted-foreground">{filteredReports.length} locations</span>
                  </div>
                  
                  <div className="grid gap-3 sm:grid-cols-2">
                    {(showAllLocations ? filteredReports : filteredReports.slice(0, 6)).map((report) => (
                      <div
                        key={report.id}
                        className="group relative flex items-start gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md cursor-pointer"
                      >
                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${
                          report.type === 'road' ? 'bg-orange-500/10 text-orange-500' :
                          report.type === 'water' ? 'bg-blue-500/10 text-blue-500' :
                          'bg-emerald-500/10 text-emerald-500'
                        }`}>
                          <MapPinIcon className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm leading-tight mb-1 group-hover:text-primary transition-colors">
                            {report.locationName}
                          </h4>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>1 active report</span>
                            {report.severity === 'high' && (
                              <>
                                <span>•</span>
                                <span className="font-medium text-destructive">High priority</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className={`h-2 w-2 rounded-full mt-1 ${
                          report.type === 'road' ? 'bg-orange-500' :
                          report.type === 'water' ? 'bg-blue-500' :
                          'bg-emerald-500'
                        }`} />
                      </div>
                    ))}
                  </div>
                  
                  {filteredReports.length > 6 && (
                    <Button 
                      variant="outline" 
                      className="w-full" 
                      size="sm"
                      onClick={() => setShowAllLocations(!showAllLocations)}
                    >
                      {showAllLocations ? 'Show less' : `View all ${filteredReports.length} locations`}
                    </Button>
                  )}
                </div>

                {/* Map Panel - 1 column */}
                <div className="lg:col-span-1">
                  <div className="sticky top-4 space-y-3">
                    <div className="flex items-center justify-between px-1">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Map View</h3>
                    </div>
                    <Card className="overflow-hidden border-border/50">
                      <CardContent className="p-0">
                        <MapWithMarkers reports={filteredReports} className="h-[600px] w-full" />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Clean Reports List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-foreground">Reports</h2>
                <span className="text-sm text-muted-foreground">{filteredReports.length} items</span>
              </div>
              
              {filteredReports.length === 0 ? (
                <Card className="border-0 bg-muted/20 shadow-none">
                  <CardContent className="flex flex-col items-center justify-center py-16">
                    <FileTextIcon className="h-10 w-10 text-muted-foreground/40" />
                    <p className="mt-4 text-sm font-medium text-foreground">No reports found</p>
                    <p className="mt-1 text-xs text-muted-foreground">Adjust your filters to see results</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredReports.map((report) => (
                    <ReportCard key={report.id} report={report} />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </PageLayout>
  )
}
