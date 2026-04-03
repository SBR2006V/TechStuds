"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold text-foreground">Life On A Click</span>
        </Link>

        <div className="hidden lg:flex lg:items-center lg:gap-8">
          <a href="#problem" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Problem</a>
          <a href="#solution" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Solution</a>
          <a href="#architecture" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Architecture</a>
          <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <a href="#comparison" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Comparison</a>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">Dashboard</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/dashboard">Start Screening</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-md p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Toggle menu</span>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-md">
          <div className="flex flex-col gap-2 px-6 py-4">
            <a href="#problem" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">Problem</a>
            <a href="#solution" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">Solution</a>
            <a href="#architecture" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">Architecture</a>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">Features</a>
            <a href="#comparison" onClick={() => setMobileMenuOpen(false)} className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground">Comparison</a>
            <div className="flex flex-col gap-2 pt-2 border-t border-border">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="/dashboard">Start Screening</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
