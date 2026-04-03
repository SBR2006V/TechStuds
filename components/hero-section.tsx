import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Upload, Activity, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Activity className="h-4 w-4" />
              AI-Powered Health Screening
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance leading-tight">
              Early Skin Cancer Detection.{" "}
              <span className="text-primary">Powered by AI.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              Upload or capture a skin image and get instant risk-level prediction with AI-driven precision. Fast, accessible, and cost-effective screening for everyone.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 px-8" asChild>
                <Link href="/dashboard">
                  Start Screening <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="#solution">Learn More</a>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>AI Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Secure Data</span>
              </div>
            </div>
          </div>

          {/* Right mockup card */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
              <div className="relative rounded-2xl border border-border bg-card p-6 shadow-xl">
                <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">AI Screening Preview</div>

                {/* Image upload mockup */}
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary mb-4">
                  <Image
                    src="/images/hero-medical.jpg"
                    alt="AI skin analysis preview showing medical technology interface"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-foreground/5" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-lg bg-card/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-foreground">
                    <Upload className="h-3 w-3" />
                    Image Uploaded
                  </div>
                </div>

                {/* Risk level */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Risk Level</span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                    Low Risk
                  </span>
                </div>

                {/* Confidence score */}
                <div className="mb-3">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-foreground">Confidence Score</span>
                    <span className="text-sm font-bold text-primary">87%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full w-[87%] rounded-full bg-primary transition-all duration-1000" />
                  </div>
                </div>

                {/* Recommendation */}
                <div className="rounded-lg bg-secondary/80 p-3">
                  <p className="text-xs font-medium text-muted-foreground mb-1">Recommendation</p>
                  <p className="text-sm text-foreground">Continue regular self-examinations. Schedule routine dermatology check-up within 6 months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
