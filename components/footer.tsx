import Link from "next/link"
import { Shield, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">Life On A Click</span>
            </Link>
            <p className="text-sm text-background/60 leading-relaxed">
              AI-powered skin cancer detection for early screening and
              peace of mind. Built by Team Tech Studs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="#problem" className="text-sm text-background/60 hover:text-background transition-colors">
                  The Problem
                </a>
              </li>
              <li>
                <a href="#solution" className="text-sm text-background/60 hover:text-background transition-colors">
                  Our Solution
                </a>
              </li>
              <li>
                <a href="#features" className="text-sm text-background/60 hover:text-background transition-colors">
                  Features
                </a>
              </li>
              <li>
                <Link href="/dashboard" className="text-sm text-background/60 hover:text-background transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Project
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-background/60">
                Team: Tech Studs
              </li>
              <li className="text-sm text-background/60">
                Project: Life On A Click
              </li>
              <li className="text-sm text-background/60">
                Category: Health-Tech / AI
              </li>
              <li className="text-sm text-background/60">
                Stack: React, Flask, TensorFlow
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Mail className="h-4 w-4" />
                contact@lifeonaclick.ai
              </li>
              <li className="flex items-center gap-2 text-sm text-background/60">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-sm text-background/60">
                <MapPin className="h-4 w-4" />
                India
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            &copy; 2026 Life On A Click. All rights reserved. Team Tech Studs.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-background/40 hover:text-background/70 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
