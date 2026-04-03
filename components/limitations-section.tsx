import { ImageOff, Shield, Wifi, Focus, AlertTriangle } from "lucide-react"

const limitations = [
  {
    icon: ImageOff,
    title: "Image Quality Dependency",
    description:
      "The accuracy of the AI model is dependent on the quality, lighting, and resolution of the uploaded image.",
  },
  {
    icon: Shield,
    title: "Preliminary Screening Only",
    description:
      "Results should not be treated as a final diagnosis. Always consult a certified dermatologist for confirmation.",
  },
  {
    icon: Wifi,
    title: "Requires Internet Connection",
    description:
      "The AI model processes images via cloud infrastructure and requires an active internet connection.",
  },
  {
    icon: Focus,
    title: "Limited to Skin Cancer",
    description:
      "The current model is trained specifically for skin cancer detection and does not diagnose other skin conditions.",
  },
]

export function LimitationsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Transparency
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Limitations & Responsible Use
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            We believe in full transparency. Here are the current limitations
            of our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {limitations.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-yellow-400/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600">
                <item.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="flex items-start gap-4 rounded-xl border-2 border-yellow-400/40 bg-yellow-50/50 p-6">
            <AlertTriangle className="h-6 w-6 shrink-0 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="text-base font-semibold text-yellow-800 mb-1">
                Important Disclaimer
              </h4>
              <p className="text-sm text-yellow-700 leading-relaxed">
                This tool is for preliminary screening only. Final diagnosis
                must be done by certified dermatologists. Life On A Click is
                not a substitute for professional medical advice, diagnosis,
                or treatment. Always seek the advice of your physician or
                other qualified health provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
