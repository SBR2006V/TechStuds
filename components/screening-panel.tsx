"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"

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

  // Load history
  const history =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("history") || "[]")
      : []

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
      const res = await fetch("https://techstuds-backend.onrender.com/predict", {
        method: "POST",
        body: formData,
      })

      const data = await res.json()

      const riskMap: any = {
        "Low Risk": "Low",
        "Medium Risk": "Medium",
        "High Risk": "High",
      }

      const riskLevel = riskMap[data.prediction] || "Low"

      setResult({
        riskLevel,
        confidence: data.confidence,
        recommendation:
          riskLevel === "High"
            ? "Consult a dermatologist immediately."
            : riskLevel === "Medium"
            ? "Monitor the lesion and consider a check-up."
            : "Likely benign, continue routine monitoring.",
      })

      // Save history
      const newEntry = {
        riskLevel,
        confidence: data.confidence,
        date: new Date().toLocaleString(),
      }

      const oldHistory = JSON.parse(localStorage.getItem("history") || "[]")
      const updatedHistory = [newEntry, ...oldHistory]

      localStorage.setItem("history", JSON.stringify(updatedHistory))

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
    Low: { text: "text-green-700" },
    Medium: { text: "text-yellow-700" },
    High: { text: "text-red-700" },
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      
      {/* Upload Section */}
      <div className="flex-1">
        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Upload Skin Image</h2>

          {!image ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center border-2 border-dashed p-12 cursor-pointer"
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
              {analyzing ? "Analyzing image with AI..." : "Analyze with AI"}
            </Button>
          </div>
        </div>
      </div>

      {/* Results + History */}
      <div className="flex-1">
        <div className="rounded-xl border p-6">
          <h2 className="text-lg font-semibold mb-4">Results</h2>

          {/* AI label */}
          <p className="text-xs text-muted-foreground mb-2">
            AI-powered skin analysis
          </p>

          {/* Result */}
          {result && (
            <div>
              <p>
                Risk Level:{" "}
                <span className={riskColors[result.riskLevel].text}>
                  {result.riskLevel} Risk
                </span>
              </p>

              <p>Confidence: {result.confidence}%</p>

              <p className="text-xs text-muted-foreground">
                Higher confidence indicates stronger model certainty.
              </p>

              <p className="mt-2">{result.recommendation}</p>

              <p className="text-xs text-muted-foreground mt-2 italic">
                ⚠️ This is an AI-based prototype and not a medical diagnosis.
              </p>
            </div>
          )}

          {/* Divider */}
          <hr className="my-4" />

          {/* History */}
          <div>
            <h3 className="text-md font-semibold mb-2">Screening History</h3>

            {history.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No screenings yet. Upload an image to get started.
              </p>
            ) : (
              <div className="space-y-2">
                {history.slice(0, 5).map((item: any, index: number) => (
                  <div key={index} className="border rounded p-2 text-sm">
                    <p>
                      <span className={riskColors[item.riskLevel].text}>
                        <strong>{item.riskLevel}</strong>
                      </span>{" "}
                      ({item.confidence}%)
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => {
                localStorage.removeItem("history")
                location.reload()
              }}
              className="text-xs text-red-500 mt-2"
            >
              Clear History
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}