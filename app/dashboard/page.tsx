"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Shield,
  LayoutDashboard,
  ScanLine,
  History,
  Video,
  Settings,
  Menu,
  X,
  ArrowLeft,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { ScreeningPanel } from "@/components/screening-panel"
import { HistoryTable } from "@/components/history-table"

const mobileNavItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: ScanLine, label: "Screening", id: "screening" },
  { icon: History, label: "History", id: "history" },
  { icon: Video, label: "Telehealth", id: "telehealth" },
  { icon: Settings, label: "Settings", id: "settings" },
]

function DashboardOverview({ onStartScreening }: { onStartScreening: () => void }) {
  return (
    <div className="flex flex-col gap-6">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Screenings", value: "5", sub: "+1 this month" },
          { label: "Average Confidence", value: "83.6%", sub: "Across all tests" },
          { label: "Risk Status", value: "Low", sub: "Latest screening" },
          { label: "Next Checkup", value: "Aug 2026", sub: "Recommended" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-5"
          >
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-foreground mt-1">
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Quick action + History */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/3">
          <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                New Screening
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Upload or capture a skin image to get instant AI-powered risk
                assessment.
              </p>
            </div>
            <Button className="mt-6 gap-2" onClick={onStartScreening}>
              <ScanLine className="h-4 w-4" />
              Start Screening
            </Button>
          </div>
        </div>
        <div className="lg:flex-1">
          <HistoryTable />
        </div>
      </div>
    </div>
  )
}

function TelehealthPanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-8 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mx-auto mb-4">
        <Video className="h-8 w-8" />
      </div>
      <h2 className="text-xl font-semibold text-foreground mb-2">
        Telehealth Consultations
      </h2>
      <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6 leading-relaxed">
        Connect with certified dermatologists for virtual consultations based
        on your screening results. Available Monday-Friday, 9 AM - 5 PM.
      </p>
      <Button className="gap-2">
        <Video className="h-4 w-4" />
        Schedule Consultation
      </Button>
    </div>
  )
}

function SettingsPanel() {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h2 className="text-lg font-semibold text-foreground mb-6">
        Account Settings
      </h2>
      <div className="flex flex-col gap-4 max-w-md">
        {[
          { label: "Full Name", value: "John Doe" },
          { label: "Email", value: "john.doe@example.com" },
          { label: "Phone", value: "+91 98765 43210" },
          { label: "Date of Birth", value: "January 15, 1990" },
        ].map((field) => (
          <div key={field.label}>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {field.label}
            </label>
            <div className="mt-1 rounded-lg border border-border bg-secondary/30 px-4 py-2.5 text-sm text-foreground">
              {field.value}
            </div>
          </div>
        ))}
        <div className="pt-4">
          <Button variant="outline">Edit Profile</Button>
        </div>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pageTitle = {
    dashboard: "Dashboard",
    screening: "New Screening",
    history: "Screening History",
    telehealth: "Telehealth",
    settings: "Settings",
  }[activeTab]

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card/80 backdrop-blur-md px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              className="lg:hidden rounded-md p-1.5 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Toggle menu</span>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="lg:hidden flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary">
                <Shield className="h-4 w-4 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-lg font-semibold text-foreground">
              {pageTitle}
            </h1>
          </div>
          <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground" asChild>
            <Link href="/">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </header>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-border bg-card px-4 py-3">
            <div className="flex flex-wrap gap-2">
              {mobileNavItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    activeTab === item.id
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-secondary"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main content */}
        <main className="flex-1 p-6">
          {activeTab === "dashboard" && (
            <DashboardOverview onStartScreening={() => setActiveTab("screening")} />
          )}
          {activeTab === "screening" && <ScreeningPanel />}
          {activeTab === "history" && <HistoryTable />}
          {activeTab === "telehealth" && <TelehealthPanel />}
          {activeTab === "settings" && <SettingsPanel />}
        </main>
      </div>
    </div>
  )
}
