"use client"

import { useState, useRef, useEffect } from "react"
import { PageLayout } from "@/components/page-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Bot, Send, User, MapPin, Droplet, Heart, AlertTriangle, ExternalLink, Sparkles, Shield, Navigation } from "lucide-react"
import { mockReports } from "@/lib/mock-data"

interface Message {
  id: string
  sender: "user" | "bot"
  content: string
  timestamp: Date
  suggestions?: string[]
  mapData?: {
    reportId: string
    location: string
    lat: number
    lng: number
  }
}

export default function ChatbotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      sender: "bot",
      content: "Hello! I'm UDAN AI Assistant with real-time access to disaster reports across Uttarakhand. I can check road conditions, water safety, health alerts, and help you make informed safety decisions. Ask me anything!",
      timestamp: new Date(),
      suggestions: [
        "Is it safe to go to school today?",
        "Should I take the Tehri Dam road?",
        "Is the water safe to drink in Joshimath?",
        "Any health alerts in my area?",
      ],
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [showMapDialog, setShowMapDialog] = useState(false)
  const [selectedMapData, setSelectedMapData] = useState<{
    reportId: string
    location: string
    lat: number
    lng: number
    title: string
  } | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: "user",
      content: inputMessage,
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInputMessage("")
    setIsTyping(true)

    try {
      const response = await fetch("/api/emergency-advice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ description: inputMessage }),
      })

      const data = await response.json()
      let aiContent = data.advice || "I'm having trouble connecting right now. Please try again."

      const mapMatch = aiContent.match(/📍 MAP VIEW REQUESTED - Report #(\d+) - (.+?)(?:\n|$)/)
      let mapData = undefined

      if (mapMatch) {
        const reportId = mapMatch[1]
        const report = mockReports[parseInt(reportId) - 1]
        if (report) {
          mapData = {
            reportId: reportId,
            location: report.locationName,
            lat: report.lat,
            lng: report.lng,
          }
        }
      }

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        content: aiContent,
        timestamp: new Date(),
        suggestions: [
          "Tell me more",
          "Show me on map",
          "What else should I know?",
        ],
        mapData,
      }
      setMessages((prev) => [...prev, botResponse])
    } catch (error) {
      console.error("Error getting AI response:", error)
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        content: "I'm having trouble connecting right now. For emergencies, please call 108 (ambulance) or 1070 (disaster helpline).",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInputMessage(suggestion)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleShowMap = (mapData: Message['mapData']) => {
    if (mapData) {
      const report = mockReports.find((r, idx) => (idx + 1).toString() === mapData.reportId)
      if (report) {
        setSelectedMapData({
          ...mapData,
          title: report.title,
        })
        setShowMapDialog(true)
      }
    }
  }

  const openInGoogleMaps = () => {
    if (selectedMapData) {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${selectedMapData.lat},${selectedMapData.lng}`,
        "_blank"
      )
    }
  }

  const openInRoadSafety = () => {
    window.location.href = "/road-safety"
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 p-6 shadow-lg">
            <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-700/50" />
            <div className="relative flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg ring-4 ring-white/20 dark:ring-black/20">
                <Bot className="h-8 w-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    UDAN AI Assistant
                  </h1>
                  <Sparkles className="h-5 w-5 text-yellow-500 animate-pulse" />
                </div>
                <p className="text-muted-foreground mt-1 flex items-center gap-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  Real-time safety intelligence • 24/7 Emergency Support
                </p>
              </div>
              <div className="hidden sm:flex flex-col gap-1 text-right">
                <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300 border-green-200">
                  <span className="mr-1 h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  Active
                </Badge>
                <span className="text-xs text-muted-foreground">Monitoring 20+ locations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Chat Interface */}
        <Card className="flex h-[600px] flex-col shadow-xl border-2">
          <CardHeader className="border-b bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-11 w-11 ring-2 ring-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                    <Bot className="h-5 w-5" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg flex items-center gap-2">
                    UDAN AI
                    <Badge variant="secondary" className="text-xs">
                      Gemini Powered
                    </Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                    Online • Avg response 2s
                  </CardDescription>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <Navigation className="mr-1 h-3 w-3" />
                  {messages.length} messages
                </Badge>
              </div>
            </div>
          </CardHeader>

          {/* Enhanced Messages Area */}
          <CardContent className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-transparent to-muted/10">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-in fade-in slide-in-from-bottom-4 duration-500`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`flex max-w-[85%] gap-3 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-9 w-9 ring-2 ring-background shadow-md">
                      <AvatarFallback className={message.sender === "bot" ? "bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white" : "bg-gradient-to-br from-orange-500 to-red-500 text-white"}>
                        {message.sender === "bot" ? <Bot className="h-4 w-4" /> : <User className="h-4 w-4" />}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className={`rounded-2xl px-4 py-3 shadow-md transition-all hover:shadow-lg ${
                        message.sender === "user" 
                          ? "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground" 
                          : "bg-gradient-to-br from-muted to-muted/70 border border-border/50"
                      }`}>
                        <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                        {message.mapData && (
                          <Button
                            variant={message.sender === "user" ? "secondary" : "default"}
                            size="sm"
                            className="mt-3 shadow-sm hover:shadow-md transition-all"
                            onClick={() => handleShowMap(message.mapData)}
                          >
                            <MapPin className="mr-1.5 h-3.5 w-3.5" />
                            View on Map
                          </Button>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1.5 px-2">
                        <p className="text-xs text-muted-foreground">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                        {message.sender === "bot" && (
                          <Badge variant="outline" className="text-xs px-1.5 py-0">
                            AI
                          </Badge>
                        )}
                      </div>
                      {message.suggestions && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {message.suggestions.map((suggestion, idx) => (
                            <Button
                              key={idx}
                              variant="outline"
                              size="sm"
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="text-xs hover:scale-105 transition-transform shadow-sm"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="flex gap-3">
                    <Avatar className="h-9 w-9 ring-2 ring-background shadow-md">
                      <AvatarFallback className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-2xl bg-gradient-to-br from-muted to-muted/70 px-5 py-3 shadow-md border border-border/50">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs text-muted-foreground mr-2">AI is thinking</span>
                        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.3s]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-primary [animation-delay:-0.15s]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </CardContent>

          {/* Enhanced Input Area */}
          <div className="border-t p-4 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-blue-950/10 dark:to-purple-950/10">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Input
                  placeholder="Ask me anything about safety, routes, health..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pr-10 h-11 shadow-sm focus:shadow-md transition-shadow"
                />
                {inputMessage && (
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <Sparkles className="h-4 w-4 text-primary animate-pulse" />
                  </div>
                )}
              </div>
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputMessage.trim()}
                size="lg"
                className="h-11 px-6 shadow-md hover:shadow-lg transition-all hover:scale-105"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 shadow-sm" 
                onClick={() => handleSuggestionClick("Road conditions near me")}
              >
                <AlertTriangle className="mr-1.5 h-3 w-3" />
                Road Safety
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 shadow-sm" 
                onClick={() => handleSuggestionClick("Where can I find clean water?")}
              >
                <Droplet className="mr-1.5 h-3 w-3" />
                Water
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 shadow-sm" 
                onClick={() => handleSuggestionClick("First aid tips")}
              >
                <Heart className="mr-1.5 h-3 w-3" />
                Health
              </Badge>
              <Badge 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105 shadow-sm" 
                onClick={() => handleSuggestionClick("Nearest hospital")}
              >
                <MapPin className="mr-1.5 h-3 w-3" />
                Location
              </Badge>
            </div>
            <p className="mt-2 text-xs text-muted-foreground text-center">
              💡 Pro tip: Ask to "show on map" for location-based reports
            </p>
          </div>
        </Card>

        {/* Enhanced Map Dialog */}
        <Dialog open={showMapDialog} onOpenChange={setShowMapDialog}>
          <DialogContent className="max-w-4xl">
            <DialogHeader className="border-b pb-4">
              <DialogTitle className="flex items-center gap-2 text-xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold">{selectedMapData?.location}</div>
                  <p className="text-sm font-normal text-muted-foreground mt-0.5">
                    {selectedMapData?.title}
                  </p>
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
                <Navigation className="h-4 w-4" />
                <span>Coordinates: {selectedMapData?.lat}°N, {selectedMapData?.lng}°E</span>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-xl border-2 shadow-lg">
                <iframe
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${selectedMapData?.lng ? selectedMapData.lng - 0.01 : 0},${selectedMapData?.lat ? selectedMapData.lat - 0.01 : 0},${selectedMapData?.lng ? selectedMapData.lng + 0.01 : 0},${selectedMapData?.lat ? selectedMapData.lat + 0.01 : 0}&layer=mapnik&marker=${selectedMapData?.lat},${selectedMapData?.lng}`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
              <div className="flex gap-3">
                <Button onClick={openInGoogleMaps} className="flex-1 h-11 shadow-md hover:shadow-lg transition-all">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Open in Google Maps
                </Button>
                <Button onClick={openInRoadSafety} variant="outline" className="flex-1 h-11 shadow-sm hover:shadow-md transition-all">
                  <Shield className="mr-2 h-4 w-4" />
                  View Full Report
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </PageLayout>
  )
}
