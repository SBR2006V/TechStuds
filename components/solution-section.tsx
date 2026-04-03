import {
  Camera,
  Cpu,
  BarChart3,
  TrendingUp,
  UserCheck,
  ArrowRight,
  Zap,
  DollarSign,
  Globe,
} from "lucide-react"

const steps = [
  {
    icon: Camera,
    title: "Capture / Upload",
    description: "Take a photo or upload an existing image of the skin lesion.",
  },
  {
    icon: Cpu,
    title: "AI Processing",
    description: "Our CNN model analyzes the image using deep learning algorithms.",
  },
  {
    icon: BarChart3,
    title: "Risk Classification",
    description: "The system classifies risk as Low, Medium, or High with precision.",
  },
  {
    icon: TrendingUp,
    title: "Confidence Score",
    description: "Get a detailed confidence percentage for the AI prediction.",
  },
  {
    icon: UserCheck,
    title: "Doctor Recommendation",
    description: "Receive personalized next steps and specialist referrals.",
  },
]

const benefits = [
  {
    icon: Zap,
    text: "AI analyzes within seconds",
  },
  {
    icon: DollarSign,
    text: "Cost-effective screening",
  },
  {
    icon: Globe,
    text: "Accessible anywhere",
  },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Our AI-Driven Solution
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A streamlined five-step process that delivers accurate skin cancer
            risk assessments in seconds.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Steps flow */}
          <div className="flex-1 w-full">
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute left-6 top-10 bottom-10 w-0.5 bg-border hidden md:block" />

              <div className="flex flex-col gap-6">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative flex items-start gap-5">
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20">
                      <step.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-xs font-bold text-primary">
                          {index + 1}
                        </span>
                        <h3 className="text-base font-semibold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < steps.length - 1 && (
                      <ArrowRight className="absolute -bottom-5 left-5 h-4 w-4 text-primary/40 hidden md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits side card */}
          <div className="w-full lg:w-80 lg:sticky lg:top-28">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-bold text-foreground mb-6">
                Why Choose AI Screening?
              </h3>
              <div className="flex flex-col gap-5">
                {benefits.map((benefit) => (
                  <div key={benefit.text} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <benefit.icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-primary/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">{'<'}3s</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    Average analysis time
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
