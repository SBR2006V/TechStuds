import {
  Smartphone,
  Server,
  Brain,
  Cloud,
  FileOutput,
  ArrowDown,
} from "lucide-react"

const nodes = [
  {
    icon: Smartphone,
    label: "User",
    description: "Patient interacts via mobile or web",
  },
  {
    icon: Smartphone,
    label: "Mobile / Web App",
    description: "Flutter UI for image capture",
  },
  {
    icon: Server,
    label: "Backend API",
    description: "Flask / FastAPI handles requests",
  },
  {
    icon: Brain,
    label: "AI Model",
    description: "TensorFlow CNN classification",
  },
  {
    icon: Cloud,
    label: "Cloud Storage",
    description: "Firebase for secure data",
  },
  {
    icon: FileOutput,
    label: "Prediction Output",
    description: "Risk level and recommendations",
  },
]

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Technical Overview
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            System Architecture
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A robust, scalable architecture designed for reliable AI-powered
            health screening at scale.
          </p>
        </div>

        {/* Architecture flow */}
        <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
          {nodes.map((node, index) => (
            <div key={node.label} className="w-full">
              <div className="group relative flex items-center gap-4 rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <node.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">
                    {node.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {node.description}
                  </p>
                </div>
                <div className="ml-auto text-xs font-bold text-primary/40">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              {index < nodes.length - 1 && (
                <div className="flex justify-center py-1">
                  <ArrowDown className="h-5 w-5 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
