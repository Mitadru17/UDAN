"use client"

import { useState, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { FileUpload } from "@/components/file-upload"
import { AnalysisResult } from "@/components/analysis-result"
import { ReportList } from "@/components/report-list"
import { LoadingSpinner } from "@/components/loading-spinner"
import { LocationMap } from "@/components/location-map"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { mockRoadHazards, mockSafetyCenters } from "@/lib/mock-data"
import type { Report, AIAnalysisResult } from "@/lib/types"

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

function ScanIcon({ className }: { className?: string }) {
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
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
    </svg>
  )
}

function MountainIcon({ className }: { className?: string }) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

export default function RoadSafetyPage() {
  const [file, setFile] = useState<File | null>(null)
  const [description, setDescription] = useState("")
  const [locationName, setLocationName] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AIAnalysisResult | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [reports, setReports] = useState<Report[]>([])
  const [isLoadingReports, setIsLoadingReports] = useState(true)

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    try {
      const response = await fetch("/api/reports?type=road")
      const data = await response.json()
      setReports(data)
    } catch (error) {
      console.error("Error fetching reports:", error)
    } finally {
      setIsLoadingReports(false)
    }
  }

  const handleAnalyze = async () => {
    if (!file) return

    setIsAnalyzing(true)
    setResult(null)

    try {
      const formData = new FormData()
      formData.append("image", file)
      if (description) formData.append("description", description)
      if (locationName) formData.append("locationName", locationName)

      const response = await fetch("/api/analyze-road", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()
      setResult(data)
    } catch (error) {
      console.error("Analysis error:", error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleSaveReport = async () => {
    if (!result) return

    setIsSaving(true)
    try {
      await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "road",
          severity: result.severity,
          title: result.title,
          description: description || "Road condition analysis",
          advice: result.advice,
          locationName: locationName || "Unknown Location",
          lat: null,
          lng: null,
          categoryDetails: result.categoryDetails,
        }),
      })

      await fetchReports()
      setFile(null)
      setDescription("")
      setLocationName("")
      setResult(null)
    } catch (error) {
      console.error("Error saving report:", error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <AlertTriangleIcon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Road & Path Safety</h1>
              <p className="text-muted-foreground">Detect landslides, road cracks, and blocked paths</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-orange-50 p-4 text-sm text-orange-800 dark:bg-orange-900/20 dark:text-orange-300">
            <MountainIcon className="h-5 w-5 flex-shrink-0" />
            <p>
              Uttarakhand&apos;s hill roads are vulnerable to landslides and damage. Use this tool to check road
              conditions before traveling.
            </p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Analysis Card */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ScanIcon className="h-5 w-5" />
                  Check Road Safety with AI
                </CardTitle>
                <CardDescription>Upload a photo of the road or path to analyze its safety</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FileUpload onFileSelect={setFile} />

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Context (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="e.g., Road looks damaged after yesterday's rain"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location Name (Optional)</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Near Tehri Dam, Main Highway"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                  />
                </div>

                <Button onClick={handleAnalyze} disabled={!file || isAnalyzing} className="w-full" size="lg">
                  {isAnalyzing ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Analyzing Road Image...
                    </>
                  ) : (
                    <>
                      <ScanIcon className="mr-2 h-5 w-5" />
                      Analyze Road Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Analysis Result */}
            {result && <AnalysisResult result={result} onSave={handleSaveReport} isSaving={isSaving} />}

            <LocationMap
              title="Road Hazards & Safety Centers"
              locations={[...mockRoadHazards, ...mockSafetyCenters]}
              centerLat={30.3165}
              centerLng={78.0322}
              showHazards={true}
            />
          </div>

          {/* Recent Reports */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Recent Road Reports</h2>
            {isLoadingReports ? (
              <div className="flex items-center justify-center py-12">
                <LoadingSpinner />
              </div>
            ) : (
              <ReportList reports={reports} emptyMessage="No road reports yet" />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
