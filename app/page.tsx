"use client"

import { PageLayout } from "@/components/page-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import {
  Shield,
  AlertTriangle,
  Droplets,
  Heart,
  ArrowRight,
  Camera,
  Brain,
  FileText,
  LayoutDashboard,
  Mountain,
  CloudRain,
  Building,
} from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t("hero.title")}
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-white/90 sm:text-xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 sm:w-auto">
                  {t("hero.checkSafetyBtn")}
                </Button>
              </Link>
              <Link href="/report">
                <Button size="lg" variant="outline" className="w-full border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 sm:w-auto">
                  {t("hero.reportIssueBtn")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Safety Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("services.title")}</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Road Safety */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <CardTitle>{t("services.roadSafety")}</CardTitle>
                <CardDescription>
                  {t("services.roadSafetyDesc")}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Water Safety */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  <Droplets className="h-6 w-6" />
                </div>
                <CardTitle>{t("services.waterSafety")}</CardTitle>
                <CardDescription>
                  {t("services.waterSafetyDesc")}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Health Safety */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                  <Heart className="h-6 w-6" />
                </div>
                <CardTitle>{t("services.healthHelp")}</CardTitle>
                <CardDescription>
                  {t("services.healthHelpDesc")}
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why UDAN */}
      <section className="bg-muted/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("why.title")}</h2>
            <p className="text-muted-foreground">{t("why.subtitle")}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                <Mountain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">{t("why.landslideTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("why.landslideDesc")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                <CloudRain className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">{t("why.waterTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("why.waterDesc")}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">{t("why.healthTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("why.healthDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("howItWorks.title")}</h2>
            <p className="text-muted-foreground">{t("howItWorks.subtitle")}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Camera className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-semibold">{t("howItWorks.step1")}</h3>
              <p className="text-sm text-muted-foreground">{t("howItWorks.step1Desc")}</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Brain className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-semibold">{t("howItWorks.step2")}</h3>
              <p className="text-sm text-muted-foreground">{t("howItWorks.step2Desc")}</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <FileText className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-semibold">{t("howItWorks.step3")}</h3>
              <p className="text-sm text-muted-foreground">{t("howItWorks.step3Desc")}</p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <LayoutDashboard className="h-7 w-7" />
              </div>
              <h3 className="mb-2 font-semibold">{t("howItWorks.step4")}</h3>
              <p className="text-sm text-muted-foreground">{t("howItWorks.step4Desc")}</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
