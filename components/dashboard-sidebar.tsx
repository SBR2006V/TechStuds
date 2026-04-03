"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LayoutDashboard,
  ScanLine,
  History,
  Video,
  Settings,
  Shield,
  ChevronLeft,
  ChevronRight,
  LogOut,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: ScanLine, label: "New Screening", id: "screening" },
  { icon: History, label: "History", id: "history" },
  { icon: Video, label: "Telehealth", id: "telehealth" },
  { icon: Settings, label: "Settings", id: "settings" },
]

interface DashboardSidebarProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export function DashboardSidebar({ activeTab, onTabChange }: DashboardSidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        "hidden lg:flex flex-col border-r border-border bg-card transition-all duration-300",
        collapsed ? "w-[72px]" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 px-4 py-5 border-b border-border">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary">
          <Shield className="h-5 w-5 text-primary-foreground" />
        </div>
        {!collapsed && (
          <span className="text-sm font-semibold text-foreground truncate">
            Life On A Click
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 flex flex-col gap-1 px-3 py-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
              activeTab === item.id
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-border px-3 py-3 flex flex-col gap-2">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          {collapsed ? (
            <ChevronRight className="h-5 w-5 shrink-0" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5 shrink-0" />
              <span>Collapse</span>
            </>
          )}
        </button>
        <Button variant="ghost" size="sm" className="justify-start gap-3 text-muted-foreground" asChild>
          <Link href="/">
            <LogOut className="h-5 w-5 shrink-0" />
            {!collapsed && <span>Back to Home</span>}
          </Link>
        </Button>
      </div>
    </aside>
  )
}
