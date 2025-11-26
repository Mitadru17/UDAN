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
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Heart, Upload, Check, X, Info, MessageSquare, Camera, AlertCircle } from "lucide-react"
import type { Report, AIAnalysisResult } from "@/lib/types"
import { mockClinicsAndHospitals, mockPharmacies } from "@/lib/mock-data"

export default function HealthSafetyPage() {
  const { t } = useLanguage()
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
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 shadow-lg">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h1 className="mb-2 text-4xl font-bold">{t("health.title")}</h1>
          <p className="text-lg text-muted-foreground">
            {t("health.subtitle")}
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="mb-6 flex items-center gap-2 rounded-lg bg-amber-50 p-4 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
          <AlertCircle className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">
            <strong>{t("health.alert")}</strong> {t("health.alertDesc")}
          </p>
        </div>

        {/* Main Upload Card */}
        <Card className="mb-8 border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t("health.uploadTitle")}</CardTitle>
            <CardDescription className="text-base">
              {t("health.uploadDesc")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="text" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  {t("health.tabDescribe")}
                </TabsTrigger>
                <TabsTrigger value="image" className="flex items-center gap-2">
                  <Camera className="h-4 w-4" />
                  {t("health.tabPhoto")}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="text" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-base">What happened?</Label>
                  <Textarea
                    id="description"
                    placeholder="e.g., Child fell and scraped knee, minor bleeding, no broken bones..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={5}
                    className="resize-none"
                  />
                </div>
              </TabsContent>

              <TabsContent value="image" className="space-y-4">
                <div className="flex flex-col items-center">
                  <FileUpload onFileSelect={setFile} />
                  {file && (
                    <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2 text-sm text-green-700 dark:bg-green-900/20 dark:text-green-400">
                      <Check className="h-4 w-4" />
                      <span>{file.name}</span>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description-photo" className="text-base">Additional Details (Optional)</Label>
                  <Textarea
                    id="description-photo"
                    placeholder="Add any additional context about the injury..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="resize-none"
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
                  {t("health.analyzing")}
                </>
              ) : (
                <>
                  <Heart className="mr-2 h-5 w-5" />
                  {t("health.analyzeBtn")}
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
              {t("health.guidelinesTitle")}
            </CardTitle>
            <CardDescription>{t("health.guidelinesDesc")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {/* Good Examples */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-600 dark:text-green-400">{t("health.goodExamples")}</h3>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("health.wounds")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.woundsDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("health.burns")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.burnsDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("health.bites")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.bitesDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-green-200 bg-green-50/50 p-4 dark:border-green-800 dark:bg-green-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-green-600 text-green-600">{t("common.upload")}</Badge>
                      <span className="font-medium">{t("health.sprains")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.sprainsDesc")}</p>
                  </div>
                </div>
              </div>

              {/* Bad Examples */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
                    <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-red-600 dark:text-red-400">{t("health.badExamples")}</h3>
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.emergency")}</Badge>
                      <span className="font-medium">{t("health.bleeding")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.bleedingDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.emergency")}</Badge>
                      <span className="font-medium">{t("health.fractures")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.fracturesDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.emergency")}</Badge>
                      <span className="font-medium">{t("health.severeBurns")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.severeBurnsDesc")}</p>
                  </div>
                  <div className="rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
                    <div className="mb-2 flex items-center gap-2">
                      <Badge variant="outline" className="border-red-600 text-red-600">{t("common.emergency")}</Badge>
                      <span className="font-medium">{t("health.breathing")}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{t("health.breathingDesc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Numbers */}
            <div className="mt-6 rounded-lg border-2 border-red-200 bg-red-50/50 p-4 dark:border-red-800 dark:bg-red-900/10">
              <h4 className="mb-3 font-semibold text-red-900 dark:text-red-100">🚨 Emergency Contacts</h4>
              <div className="grid gap-2 text-sm sm:grid-cols-3">
                <div>
                  <p className="text-muted-foreground">Ambulance</p>
                  <p className="text-lg font-bold text-red-600">108</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Police</p>
                  <p className="text-lg font-bold text-red-600">100</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Disaster Helpline</p>
                  <p className="text-lg font-bold text-red-600">1070</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medical Facilities Map */}
        <Card>
          <CardHeader>
            <CardTitle>Nearest Medical Facilities</CardTitle>
            <CardDescription>Hospitals, clinics, and pharmacies near you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 font-semibold text-sm">Hospitals & Clinics</h4>
              <LocationMap
                title="Medical Centers"
                locations={mockClinicsAndHospitals}
                centerLat={30.3165}
                centerLng={78.0322}
                requestLocation={true}
              />
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-sm">Pharmacies</h4>
              <LocationMap
                title="Medicine Shops"
                locations={mockPharmacies}
                centerLat={30.3165}
                centerLng={78.0322}
                requestLocation={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* Recent Reports */}
        <div>
          <h2 className="mb-4 text-2xl font-bold">Recent Health Reports</h2>
          {isLoadingReports ? (
            <div className="flex items-center justify-center py-12">
              <LoadingSpinner />
            </div>
          ) : (
            <ReportList reports={reports} emptyMessage="No health reports yet. Be the first to contribute!" />
          )}
        </div>
      </div>
    </PageLayout>
  )
}
