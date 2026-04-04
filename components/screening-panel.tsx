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

  const handleAnalyze = async () => {
    if (!image) return

    setAnalyzing(true)

    const file = fileInputRef.current?.files?.[0]
    if (!file) {
      setAnalyzing(false)
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    try {
      const res = await fetch("http://localhost:8000/predict", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      const riskMap: any = {
        "Low Risk": "Low",
        "Medium Risk": "Medium",
        "High Risk": "High",
      }

      setResult({
        riskLevel: riskMap[data.prediction] || "Low",
        confidence: data.confidence,
        recommendation: "AI-based result from backend",
      })

    } catch (error) {
      console.error(error)
    }

    setAnalyzing(false)
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
              className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-border bg-secondary/30 p-12 cursor-pointer hover:border-primary/40 hover:bg-primary/5"
            >
              <Upload className="h-7 w-7 mb-2" />
              <p>Click to upload</p>
            </div>
          ) : (
            <div className="relative">
              <Image src={image} alt="preview" width={400} height={300} />
              <button onClick={handleClear}>
                <X />
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
            <Button onClick={() => fileInputRef.current?.click()}>
              Select Image
            </Button>

            <Button onClick={handleAnalyze} disabled={!image || analyzing}>
              {analyzing ? "Analyzing..." : "Analyze"}
            </Button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1">
        <div className="rounded-xl border p-6">
          <h2>Results</h2>

          {result && (
            <div>
              <p>
                Risk:{" "}
                <span className={riskColors[result.riskLevel].text}>
                  {result.riskLevel}
                </span>
              </p>
              <p>Confidence: {result.confidence}%</p>
              <p>{result.recommendation}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}