"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import {
  Upload,
  Camera,
  Loader2,
  AlertCircle,
  CheckCircle,
  UserCheck,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

type AnalysisResult = {
  riskLevel: "Low" | "Medium" | "High"
  confidence: number
  recommendation: string
}

export function ScreeningPanel() {
  const [image, setImage] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [result, setResult] = useState<AnalysisResult | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
        setResult(null)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleAnalyze = () => {
    setAnalyzing(true)
    // Mock analysis
    setTimeout(() => {
      setResult({
        riskLevel: "Low",
        confidence: 87,
        recommendation:
          "Based on our AI analysis, the lesion appears benign. Continue regular self-examinations and schedule a routine dermatology check-up within 6 months.",
      })
      setAnalyzing(false)
    }, 2500)
  }

  const handleClear = () => {
    setImage(null)
    setResult(null)
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  const riskColors = {
    Low: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200" },
    Medium: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200" },
    High: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200" },
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Upload Area */}
      <div className="flex-1">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Upload Skin Image
          </h2>

          {!image ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 p-12 cursor-pointer transition-colors hover:border-primary/40 hover:bg-primary/5"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") fileInputRef.current?.click()
              }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                <Upload className="h-7 w-7" />
              </div>
              <p className="text-base font-medium text-foreground mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-sm text-muted-foreground">
                JPG, PNG or WEBP (max. 10MB)
              </p>
            </div>
          ) : (
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-secondary">
                <Image
                  src={image}
                  alt="Uploaded skin image for analysis"
                  fill
                  className="object-cover"
                />
              </div>
              <button
                onClick={handleClear}
                className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-foreground/80 text-background hover:bg-foreground transition-colors"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Remove image</span>
              </button>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <div className="flex gap-3 mt-4">
            <Button
              onClick={() => fileInputRef.current?.click()}
              variant="outline"
              className="flex-1 gap-2"
            >
              <Camera className="h-4 w-4" />
              {image ? "Change Image" : "Select Image"}
            </Button>
            <Button
              onClick={handleAnalyze}
              disabled={!image || analyzing}
              className="flex-1 gap-2"
            >
              {analyzing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                "Analyze Now"
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Results Area */}
      <div className="flex-1">
        <div className="rounded-xl border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">
            Analysis Results
          </h2>

          {!result && !analyzing ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary mb-4">
                <AlertCircle className="h-7 w-7 text-muted-foreground" />
              </div>
              <p className="text-base font-medium text-foreground mb-1">
                No analysis yet
              </p>
              <p className="text-sm text-muted-foreground max-w-xs">
                Upload a skin image and click &quot;Analyze Now&quot; to get your AI-powered risk assessment.
              </p>
            </div>
          ) : analyzing ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
              <p className="text-base font-medium text-foreground mb-1">
                AI is analyzing your image...
              </p>
              <p className="text-sm text-muted-foreground">
                This usually takes 2-3 seconds
              </p>
            </div>
          ) : result ? (
            <div className="flex flex-col gap-5">
              {/* Risk Level */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-foreground">
                    Risk Level
                  </span>
                </div>
                <span
                  className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold ${riskColors[result.riskLevel].bg} ${riskColors[result.riskLevel].text} ${riskColors[result.riskLevel].border} border`}
                >
                  {result.riskLevel} Risk
                </span>
              </div>

              {/* Confidence */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Confidence Score
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {result.confidence}%
                  </span>
                </div>
                <Progress value={result.confidence} className="h-3" />
              </div>

              {/* Recommendation */}
              <div className="rounded-lg bg-secondary/80 p-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                  Recommendation
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  {result.recommendation}
                </p>
              </div>

              {/* CTA */}
              <Button className="gap-2 w-full" variant="outline">
                <UserCheck className="h-4 w-4" />
                Book Dermatologist Consultation
              </Button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
