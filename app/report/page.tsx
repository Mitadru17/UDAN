"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { PageLayout } from "@/components/page-layout"
import { FileUpload } from "@/components/file-upload"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { FileText, Send, CheckCircle, Upload, MapPin, FileEdit } from "lucide-react"
import type { ReportType, Severity } from "@/lib/types"

export default function ReportPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [type, setType] = useState<ReportType>("road")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [severity, setSeverity] = useState<Severity>("medium")
  const [locationName, setLocationName] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [aiAnalysis, setAiAnalysis] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!title || !description) return

    setIsSubmitting(true)

    try {
      await fetch("/api/reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type,
          title,
          description,
          severity,
          locationName: locationName || "Unknown Location",
          advice: aiAnalysis || "Manual report - no AI analysis performed",
          lat: null,
          lng: null,
        }),
      })

      setIsSuccess(true)
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    } catch (error) {
      console.error("Error submitting report:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleNextStep = () => {
    if (step === 1 && file) setStep(2)
    else if (step === 2 && locationName) setStep(3)
    else if (step === 3 && description) handleSubmit()
  }

  const handleBackStep = () => {
    if (step > 1) setStep(step - 1)
  }

  if (isSuccess) {
    return (
      <PageLayout>
        <div className="mx-auto flex max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
          <div className="mb-4 rounded-full bg-green-100 p-4 dark:bg-green-900/30">
            <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="mb-2 text-2xl font-bold">Report Submitted!</h1>
          <p className="text-muted-foreground">Redirecting to dashboard...</p>
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Report a Disaster Incident</h1>
          <p className="text-muted-foreground">
            Follow the steps below to submit a report. Your contribution helps us respond faster.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <div className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <div className={`h-1 flex-1 ${step > 1 ? "bg-primary" : "bg-muted"}`} />
              </div>
              <p className="mt-2 text-sm font-medium">Upload Evidence</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <div className={`h-1 flex-1 ${step > 2 ? "bg-primary" : "bg-muted"}`} />
              </div>
              <p className="mt-2 text-sm font-medium">Pinpoint Location</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  3
                </div>
                <div className="h-1 flex-1 bg-muted" />
              </div>
              <p className="mt-2 text-sm font-medium">Provide Details</p>
            </div>
            <div className="flex-1">
              <div className="flex items-center">
                <div className="h-1 flex-1 bg-muted" />
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    step >= 4 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  4
                </div>
              </div>
              <p className="mt-2 text-sm font-medium">Review & Submit</p>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  Step {step} of 4:{" "}
                  {step === 1 ? "Upload Evidence" : step === 2 ? "Pinpoint Location" : step === 3 ? "Provide Details" : "Review & Submit"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Upload Evidence */}
                {step === 1 && (
                  <div className="space-y-4">
                    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground/25 p-12">
                      <Upload className="mb-4 h-12 w-12 text-primary" />
                      <h3 className="mb-2 text-lg font-semibold">Upload an Image or Video</h3>
                      <p className="mb-4 text-center text-sm text-muted-foreground">
                        Drag & drop a file or click the button below to browse.
                      </p>
                      <FileUpload onFileSelect={setFile} />
                    </div>
                    {file && (
                      <div className="rounded-lg bg-muted p-4">
                        <p className="text-sm">
                          <strong>Selected:</strong> {file.name}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 2: Pinpoint Location */}
                {step === 2 && (
                  <div className="space-y-4">
                    <div className="rounded-lg bg-teal-500/10 p-8">
                      <div className="flex items-center justify-center text-teal-600">
                        <MapPin className="h-16 w-16" />
                      </div>
                      <p className="mt-4 text-center text-sm text-muted-foreground">
                        Map integration would appear here
                      </p>
                      <div className="mt-4 flex justify-center">
                        <Button variant="outline" size="sm">
                          <MapPin className="mr-2 h-4 w-4" />
                          Use My Location
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location Name</Label>
                      <Input
                        id="location"
                        placeholder="e.g., Near Tehri Dam, Village School"
                        value={locationName}
                        onChange={(e) => setLocationName(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Provide Details */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="description">Add any relevant details. What happened? Is immediate help needed?</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe the situation in detail..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={6}
                      />
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="type">Report Type</Label>
                        <Select value={type} onValueChange={(v) => setType(v as ReportType)}>
                          <SelectTrigger id="type">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="road">Road Safety</SelectItem>
                            <SelectItem value="water">Water Safety</SelectItem>
                            <SelectItem value="health">Health Safety</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="severity">Severity</Label>
                        <Select value={severity} onValueChange={(v) => setSeverity(v as Severity)}>
                          <SelectTrigger id="severity">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="title">Short Title</Label>
                      <Input
                        id="title"
                        placeholder="Brief title for the report"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-4">
                  <Button variant="outline" onClick={handleBackStep} disabled={step === 1}>
                    Back
                  </Button>
                  <Button
                    onClick={handleNextStep}
                    disabled={
                      (step === 1 && !file) ||
                      (step === 2 && !locationName) ||
                      (step === 3 && (!description || !title)) ||
                      isSubmitting
                    }
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        Submitting...
                      </>
                    ) : step === 3 ? (
                      "Submit Report"
                    ) : (
                      "Next Step"
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar - AI Analysis Preview */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">AI Classification Preview</CardTitle>
              </CardHeader>
              <CardContent>
                {file ? (
                  <div className="space-y-4">
                    <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                      <img
                        src={URL.createObjectURL(file)}
                        alt="Upload preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">AI Analysis: Landslide</p>
                      <p className="text-xs text-muted-foreground">Confidence: 92%</p>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-32 items-center justify-center rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">No image uploaded</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
