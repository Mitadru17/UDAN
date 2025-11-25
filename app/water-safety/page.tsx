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
import { mockWaterSuppliers } from "@/lib/mock-data"
import type { Report, AIAnalysisResult } from "@/lib/types"

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

function InfoIcon({ className }: { className?: string }) {
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
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}

export default function WaterSafetyPage() {
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
      const response = await fetch("/api/reports?type=water")
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

      const response = await fetch("/api/analyze-water", {
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
          type: "water",
          severity: result.severity,
          title: result.title,
          description: description || "Water quality analysis",
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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <DropletsIcon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Water Safety</h1>
              <p className="text-muted-foreground">Check water quality and get purification guidance</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-blue-50 p-4 text-sm text-blue-800 dark:bg-blue-900/20 dark:text-blue-300">
            <InfoIcon className="h-5 w-5 flex-shrink-0" />
            <p>
              After heavy rains, water sources can become contaminated. Upload photos of water tanks, taps, or sources
              to check safety.
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
                  Check Water Safety with AI
                </CardTitle>
                <CardDescription>Upload a photo of water source, tank, or tap to analyze its quality</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FileUpload onFileSelect={setFile} />

                <div className="space-y-2">
                  <Label htmlFor="description">Additional Context (Optional)</Label>
                  <Textarea
                    id="description"
                    placeholder="e.g., Water smells bad, collected after rain"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location Name (Optional)</Label>
                  <Input
                    id="location"
                    placeholder="e.g., Government School Tank, Village Well"
                    value={locationName}
                    onChange={(e) => setLocationName(e.target.value)}
                  />
                </div>

                <Button onClick={handleAnalyze} disabled={!file || isAnalyzing} className="w-full" size="lg">
                  {isAnalyzing ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Analyzing Water Image...
                    </>
                  ) : (
                    <>
                      <ScanIcon className="mr-2 h-5 w-5" />
                      Analyze Water Image
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Analysis Result */}
            {result && <AnalysisResult result={result} onSave={handleSaveReport} isSaving={isSaving} />}

            {/* Water Tips */}
            <Card className="border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-900/20">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Water Safety Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Always boil water for at least 5 minutes before drinking
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Store drinking water in clean, covered containers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Clean water tanks regularly, especially after monsoon
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    Use water purification tablets when boiling is not possible
                  </li>
                </ul>
              </CardContent>
            </Card>

            <LocationMap
              title="Nearest Clean Water Suppliers"
              locations={mockWaterSuppliers}
              centerLat={30.3165}
              centerLng={78.0322}
            />
          </div>

          {/* Recent Reports */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Recent Water Reports</h2>
            {isLoadingReports ? (
              <div className="flex items-center justify-center py-12">
                <LoadingSpinner />
              </div>
            ) : (
              <ReportList reports={reports} emptyMessage="No water reports yet" />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
