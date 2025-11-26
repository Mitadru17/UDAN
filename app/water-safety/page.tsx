"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { PageLayout } from "@/components/page-layout"
import { FileUpload } from "@/components/file-upload"
import { AnalysisResult } from "@/components/analysis-result"
import { ReportList } from "@/components/report-list"
import { LoadingSpinner } from "@/components/loading-spinner"
import { LocationMap } from "@/components/location-map"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Droplet, Upload, Check, X, Info } from "lucide-react"
import type { Report, AIAnalysisResult } from "@/lib/types"
import { mockWaterSuppliers } from "@/lib/mock-data"

export default function WaterSafetyPage() {
  const { t } = useLanguage()
  const [file, setFile] = useState<File | null>(null)
  const [description, setDescription] = useState("")
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
          locationName: "Water Location",
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
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
            <Droplet className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 text-4xl font-bold">{t("water.title")}</h1>
          <p className="text-lg text-muted-foreground">
            {t("water.subtitle")}
          </p>
        </div>

        {/* Main Upload Card */}
        <Card className="mb-8 border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t("water.uploadTitle")}</CardTitle>
            <CardDescription className="text-base">
              {t("water.uploadDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Upload Area */}
            <div className="flex flex-col items-center">
              <FileUpload onFileSelect={setFile} />
              {file && (
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
                  <Check className="h-4 w-4" />
                  <span>{file.name}</span>
                </div>
              )}
            </div>

            {/* Context Input */}
            <div className="space-y-2">
              <Label htmlFor="description" className="text-base">Additional Context (Optional)</Label>
              <Textarea
                id="description"
                placeholder="e.g., Water from village tank, smells unusual, collected after rain..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="resize-none"
              />
            </div>

            {/* Analyze Button */}
            <Button 
              onClick={handleAnalyze} 
              disabled={!file || isAnalyzing} 
              className="w-full" 
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  {t("water.analyzing")}
                </>
              ) : (
                <>
                  <Upload className="mr-2 h-5 w-5" />
                  {t("water.analyzeBtn")}
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Analysis Result */}
        {result && (
          <div className="mb-8">
            <AnalysisResult result={result} onSave={handleSaveReport} isSaving={isSaving} />
          </div>
        )}

        {/* Example Images Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              {t("water.guidelinesTitle")}
            </CardTitle>
            <CardDescription>{t("water.guidelinesDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Good Examples */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">{t("water.goodExamples")}</h3>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("water.containers")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.containersDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("water.tanks")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.tanksDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("water.sources")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.sourcesDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("water.contamination")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.contaminationDesc")}</p>
                  </div>
                </div>
              </div>

              {/* Bad Examples */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                    <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">{t("water.badExamples")}</h3>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.dontUpload")}</Badge>
                      <span className="font-medium">{t("water.noVisible")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.noVisibleDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.dontUpload")}</Badge>
                      <span className="font-medium">{t("water.poorLight")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.poorLightDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.dontUpload")}</Badge>
                      <span className="font-medium">{t("water.reflective")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.reflectiveDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.dontUpload")}</Badge>
                      <span className="font-medium">{t("water.treated")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("water.treatedDesc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="mt-6 rounded-lg border-2 border-blue-200 bg-blue-50/50 p-4 dark:border-blue-800 dark:bg-blue-900/10">
              <h4 className="mb-3 font-semibold text-blue-900 dark:text-blue-100">{t("water.safetyTips")}</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  Always boil water for at least 5 minutes before drinking
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  Store water in clean, covered containers away from sunlight
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                  Use water purification tablets when boiling isn't possible
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Water Suppliers Map */}
        <Card>
          <CardHeader>
            <CardTitle>Clean Water Suppliers</CardTitle>
            <CardDescription>Nearest locations for emergency water supply</CardDescription>
          </CardHeader>
          <CardContent>
            <LocationMap
              title="Water Supply Locations"
              locations={mockWaterSuppliers}
              centerLat={30.3165}
              centerLng={78.0322}
              requestLocation={true}
            />
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">Recent Water Reports</h2>
          {isLoadingReports ? (
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : (
            <ReportList reports={reports} emptyMessage="No water reports yet. Be the first to contribute!" />
          )}
        </div>
      </div>
    </PageLayout>
  )
}
