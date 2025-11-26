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

function BotIcon({ className }: { className?: string }) {
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
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  )
}

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function EmergencyPage() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const quickQuestions = [
    "Is it safe to go to school today?",
    "Should I take the Tehri Dam road?",
    "Is the water supply safe to drink?",
    "Any health alerts in Dehradun area?",
    "Are the roads clear for travel?",
    "Is there any water contamination nearby?",
  ]

  const handleSendMessage = async (message?: string) => {
    const questionText = message || input.trim()
    if (!questionText) return

    const userMessage: Message = { role: "user", content: questionText }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/emergency-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: questionText }),
      })

      const data = await response.json()
      const assistantMessage: Message = {
        role: "assistant",
        content: data.advice,
      }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error getting advice:", error)
      const errorMessage: Message = {
        role: "assistant",
        content: "I'm having trouble connecting right now. Please call 108 for immediate emergency assistance.",
      }
      setMessages((prev) => [...prev, errorMessage])
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
              <h1 className="text-2xl font-bold sm:text-3xl">Emergency Help & Safety Advisor</h1>
              <p className="text-red-100">AI-powered assistance with real-time hazard awareness</p>
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

        {/* AI Chatbot */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BotIcon className="h-5 w-5" />
              AI Safety Assistant
            </CardTitle>
            <CardDescription>
              Ask about road conditions, water safety, health alerts, or whether it's safe to travel. I'll check current reports and provide contextual advice.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Quick Questions */}
            {messages.length === 0 && (
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground">Quick Questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, idx) => (
                    <Button
                      key={idx}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSendMessage(question)}
                      disabled={isLoading}
                      className="text-xs"
                    >
                      {question}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Messages */}
            {messages.length > 0 && (
              <div className="space-y-4 max-h-96 overflow-y-auto rounded-lg border p-4">
                {messages.map((message, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <BotIcon className="h-4 w-4 text-primary" />
                      </div>
                    )}
                    <div
                      className={`rounded-lg px-4 py-2 max-w-[85%] ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <BotIcon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="rounded-lg bg-muted px-4 py-2">
                      <LoadingSpinner size="sm" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Input Area */}
            <div className="flex gap-2">
              <Textarea
                placeholder="Ask me: 'Is it safe to go to school?' or 'Should I take the Tehri road?'"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSendMessage()
                  }
                }}
                rows={2}
                className="text-base resize-none"
              />
              <Button
                onClick={() => handleSendMessage()}
                disabled={!input.trim() || isLoading}
                size="lg"
                className="shrink-0"
              >
                <SendIcon className="h-5 w-5" />
              </Button>
            </div>

            <div className="rounded-lg bg-amber-50 p-3 text-xs text-amber-800 dark:bg-amber-900/20 dark:text-amber-300">
              <strong>Note:</strong> This AI assistant checks current active reports to provide contextual advice. For life-threatening emergencies, always call <strong>108</strong> immediately.
            </div>
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
