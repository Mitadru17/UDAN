"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { NearbyLocation } from "@/lib/mock-data"

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

function ClockIcon({ className }: { className?: string }) {
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
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function NavigationIcon({ className }: { className?: string }) {
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
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
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

interface LocationMapProps {
  title: string
  locations: NearbyLocation[]
  centerLat?: number
  centerLng?: number
  zoom?: number
  showHazards?: boolean
}

const typeColors: Record<NearbyLocation["type"], string> = {
  clinic: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  hospital: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  pharmacy: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  water_supplier: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  safety_center: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  hazard: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
}

const typeLabels: Record<NearbyLocation["type"], string> = {
  clinic: "Clinic",
  hospital: "Hospital",
  pharmacy: "Pharmacy",
  water_supplier: "Water Supply",
  safety_center: "Safety Center",
  hazard: "Hazard",
}

export function LocationMap({
  title,
  locations,
  centerLat = 30.3165,
  centerLng = 78.0322,
  zoom = 12,
  showHazards = false,
}: LocationMapProps) {
  const [selectedLocation, setSelectedLocation] = useState<NearbyLocation | null>(null)

  // Create markers string for OpenStreetMap
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${centerLng - 0.15}%2C${centerLat - 0.1}%2C${centerLng + 0.15}%2C${centerLat + 0.1}&layer=mapnik&marker=${centerLat}%2C${centerLng}`

  const openDirections = (location: NearbyLocation) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`, "_blank")
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MapPinIcon className="h-5 w-5" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        {/* Map Embed */}
        <div className="relative h-64 w-full bg-muted">
          <iframe title={title} src={mapUrl} className="h-full w-full border-0" loading="lazy" />
          <div className="absolute bottom-2 left-2 right-2 flex flex-wrap gap-1">
            {locations.slice(0, 3).map((loc) => (
              <Badge
                key={loc.id}
                variant="secondary"
                className="cursor-pointer bg-background/90 backdrop-blur-sm hover:bg-background"
                onClick={() => setSelectedLocation(loc)}
              >
                {showHazards && loc.type === "hazard" ? (
                  <AlertTriangleIcon className="mr-1 h-3 w-3 text-red-500" />
                ) : (
                  <MapPinIcon className="mr-1 h-3 w-3" />
                )}
                {loc.name.length > 20 ? loc.name.slice(0, 20) + "..." : loc.name}
              </Badge>
            ))}
            {locations.length > 3 && (
              <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                +{locations.length - 3} more
              </Badge>
            )}
          </div>
        </div>

        {/* Location List */}
        <div className="max-h-80 overflow-y-auto">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`border-b p-4 last:border-b-0 transition-colors cursor-pointer hover:bg-muted/50 ${
                selectedLocation?.id === location.id ? "bg-muted/70" : ""
              }`}
              onClick={() => setSelectedLocation(location)}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-sm truncate">{location.name}</h4>
                    <Badge variant="secondary" className={`text-xs ${typeColors[location.type]}`}>
                      {typeLabels[location.type]}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{location.address}</p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPinIcon className="h-3 w-3" />
                      {location.distance}
                    </span>
                    {location.phone && (
                      <a
                        href={`tel:${location.phone}`}
                        className="flex items-center gap-1 text-primary hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <PhoneIcon className="h-3 w-3" />
                        {location.phone}
                      </a>
                    )}
                    {location.hours && (
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {location.hours}
                      </span>
                    )}
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-shrink-0 bg-transparent"
                  onClick={(e) => {
                    e.stopPropagation()
                    openDirections(location)
                  }}
                >
                  <NavigationIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
