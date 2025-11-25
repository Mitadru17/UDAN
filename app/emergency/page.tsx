"use client"

import { useState } from "react"
import { PageLayout } from "@/components/page-layout"
import { LoadingSpinner } from "@/components/loading-spinner"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

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

function PhoneIcon({ className }: { className?: string }) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function AmbulanceIcon({ className }: { className?: string }) {
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
      <path d="M10 10H6" />
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
      <path d="M8 8v4" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}

function SendIcon({ className }: { className?: string }) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}

export default function EmergencyPage() {
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [advice, setAdvice] = useState<string | null>(null)

  const handleGetAdvice = async () => {
    if (!description.trim()) return

    setIsLoading(true)
    setAdvice(null)

    try {
      const response = await fetch("/api/emergency-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description }),
      })

      const data = await response.json()
      setAdvice(data.advice)
    } catch (error) {
      console.error("Error getting advice:", error)
      setAdvice("Please call 108 immediately for emergency assistance.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Emergency Banner */}
        <div className="mb-8 rounded-xl bg-red-600 p-6 text-white shadow-lg">
          <div className="flex items-center gap-3">
            <AlertTriangleIcon className="h-10 w-10" />
            <div>
              <h1 className="text-2xl font-bold sm:text-3xl">Emergency Help</h1>
              <p className="text-red-100">If someone is in immediate danger, call 108 now</p>
            </div>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2">
          <Card className="border-2 border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
                <AmbulanceIcon className="h-7 w-7 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Ambulance</p>
                <a href="tel:108" className="text-3xl font-bold text-red-600 hover:underline dark:text-red-400">
                  108
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-orange-200 bg-orange-50 dark:border-orange-800 dark:bg-orange-900/20">
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 dark:bg-orange-900/50">
                <ShieldIcon className="h-7 w-7 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Disaster Helpline</p>
                <a href="tel:1070" className="text-3xl font-bold text-orange-600 hover:underline dark:text-orange-400">
                  1070
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick AI Help */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5" />
              Quick AI Safety Instructions
            </CardTitle>
            <CardDescription>
              Describe the emergency briefly to get immediate safety guidance. This is NOT a substitute for calling
              emergency services.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Describe the emergency situation briefly..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="text-base"
            />

            <Button onClick={handleGetAdvice} disabled={!description.trim() || isLoading} className="w-full" size="lg">
              {isLoading ? (
                <>
                  <LoadingSpinner size="sm" className="mr-2" />
                  Getting Safety Instructions...
                </>
              ) : (
                <>
                  <SendIcon className="mr-2 h-5 w-5" />
                  Get Immediate Safety Instructions
                </>
              )}
            </Button>

            {advice && (
              <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-4">
                <h3 className="mb-3 font-semibold">Safety Instructions:</h3>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{advice}</div>
                <div className="mt-4 rounded-lg bg-red-100 p-3 text-sm text-red-800 dark:bg-red-900/30 dark:text-red-300">
                  <strong>Remember:</strong> This is general guidance only. For serious emergencies, always call{" "}
                  <strong>108</strong> for ambulance or <strong>1070</strong> for disaster helpline.
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="mt-8 rounded-lg bg-muted/50 p-6">
          <h3 className="mb-4 font-semibold">Other Emergency Numbers</h3>
          <div className="grid gap-3 text-sm sm:grid-cols-2">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Police</span>
              <a href="tel:100" className="font-semibold hover:underline">
                100
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Fire</span>
              <a href="tel:101" className="font-semibold hover:underline">
                101
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Women Helpline</span>
              <a href="tel:1091" className="font-semibold hover:underline">
                1091
              </a>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Child Helpline</span>
              <a href="tel:1098" className="font-semibold hover:underline">
                1098
              </a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
