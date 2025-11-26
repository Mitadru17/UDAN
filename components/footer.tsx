"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

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

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 shadow-md">
                <span className="text-base font-bold text-white">U</span>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight">UDAN</span>
                <p className="text-[9px] text-muted-foreground leading-none">Disaster Aid</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Uttarakhand Disaster Aid Network
              <br />
              <em>&quot;{t("hero.subtitle")}&quot;</em>
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col gap-2 text-sm text-muted-foreground">
              <Link href="/road-safety" className="hover:text-foreground">
                {t("nav.roadSafety")}
              </Link>
              <Link href="/water-safety" className="hover:text-foreground">
                {t("nav.waterSafety")}
              </Link>
              <Link href="/health-safety" className="hover:text-foreground">
                {t("nav.healthSafety")}
              </Link>
              <Link href="/dashboard" className="hover:text-foreground">
                {t("nav.dashboard")}
              </Link>
            </nav>
          </div>

          {/* Emergency */}
          <div className="space-y-3">
            <h4 className="font-semibold">Emergency Contacts</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                Ambulance: <strong className="text-red-600">108</strong>
              </p>
              <p>
                Disaster Helpline: <strong className="text-red-600">1070</strong>
              </p>
              <p>
                Police: <strong className="text-red-600">100</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>{t("footer.copyright")}</p>
          <p className="flex items-center gap-1">
            Made with <HeartIcon className="h-4 w-4 text-red-600" /> for Uttarakhand
          </p>
        </div>
      </div>
    </footer>
  )
}
