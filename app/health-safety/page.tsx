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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { mockClinicsAndHospitals, mockPharmacies } from "@/lib/mock-data"
import type { Report, AIAnalysisResult } from "@/lib/types"

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

function MessageSquareIcon({ className }: { className?: string }) {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CameraIcon({ className }: { className?: string }) {
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
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  )
}

export default function HealthSafetyPage() {
  const [file, setFile] = useState<File | null>(null)
  const [description, setDescription] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<AIAnalysisResult | null>(null)
  const [isSaving, setIsSaving] = useState(false)
  const [reports, setReports] = useState<Report[]>([])
  const [isLoadingReports, setIsLoadingReports] = useState(true)
  const [activeTab, setActiveTab] = useState("text")

  useEffect(() => {
    fetchReports()
  }, [])

  const fetchReports = async () => {
    try {
      const response = await fetch("/api/reports?type=health")
      const data = await response.json()
      setReports(data)
    } catch (error) {
      console.error("Error fetching reports:", error)
    } finally {
      setIsLoadingReports(false)
    }
  }

  const handleAnalyze = async () => {
    if (!description && !file) return

    setIsAnalyzing(true)
    setResult(null)

    try {
      const formData = new FormData()
      if (file) formData.append("image", file)
      if (description) formData.append("description", description)

      const response = await fetch("/api/analyze-health", {
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
          type: "health",
          severity: result.severity,
          title: result.title,
          description: description || "Health situation analysis",
          advice: result.advice,
          locationName: "Health Report",
          lat: null,
          lng: null,
          categoryDetails: result.categoryDetails,
        }),
      })

      await fetchReports()
      setFile(null)
      setDescription("")
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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <HeartIcon className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Health & First-Aid Support</h1>
              <p className="text-muted-foreground">Get guidance for injuries, burns, falls, and more</p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-4 text-sm text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
            <AlertCircleIcon className="h-5 w-5 flex-shrink-0" />
            <p>
              This provides general first-aid guidance only. For serious injuries, always call <strong>108</strong>{" "}
              immediately. Never use this as a substitute for professional medical care.
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
                  Get Health First-Aid Guidance
                </CardTitle>
                <CardDescription>Describe your situation or upload a photo for AI first-aid advice</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="text" className="flex items-center gap-2">
                      <MessageSquareIcon className="h-4 w-4" />
                      Describe
                    </TabsTrigger>
                    <TabsTrigger value="image" className="flex items-center gap-2">
                      <CameraIcon className="h-4 w-4" />
                      With Photo
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="text" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="description">What happened?</Label>
                      <Textarea
                        id="description"
                        placeholder="e.g., Child fell and scraped their knee, minor bleeding"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={5}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="image" className="space-y-4">
                    <FileUpload onFileSelect={setFile} />
                    <div className="space-y-2">
                      <Label htmlFor="description-photo">Additional Details (Optional)</Label>
                      <Textarea
                        id="description-photo"
                        placeholder="Add any additional context about the injury"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={3}
                      />
                    </div>
                  </TabsContent>
                </Tabs>

                <Button
                  onClick={handleAnalyze}
                  disabled={(!description && !file) || isAnalyzing}
                  className="w-full"
                  size="lg"
                >
                  {isAnalyzing ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      Getting First-Aid Advice...
                    </>
                  ) : (
                    <>
                      <HeartIcon className="mr-2 h-5 w-5" />
                      Get AI First-Aid Advice
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Analysis Result */}
            {result && <AnalysisResult result={result} onSave={handleSaveReport} isSaving={isSaving} />}

            <LocationMap
              title="Nearest Clinics & Hospitals"
              locations={mockClinicsAndHospitals}
              centerLat={30.3165}
              centerLng={78.0322}
            />

            <LocationMap
              title="Nearby Pharmacies & Medicine Shops"
              locations={mockPharmacies}
              centerLat={30.3165}
              centerLng={78.0322}
            />
          </div>

          {/* Recent Reports */}
          <div>
            <h2 className="mb-4 text-xl font-semibold">Recent Health Reports</h2>
            {isLoadingReports ? (
              <div className="flex items-center justify-center py-12">
                <LoadingSpinner />
              </div>
            ) : (
              <ReportList reports={reports} emptyMessage="No health reports yet" />
            )}
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
