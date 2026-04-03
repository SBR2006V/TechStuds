import {
  Clock,
  Stethoscope,
  AlertTriangle,
  MapPin,
  DollarSign,
  Search,
} from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Late Detection of Skin Cancer",
    description:
      "Most skin cancers are diagnosed at advanced stages due to lack of routine screening, reducing survival rates significantly.",
  },
  {
    icon: Stethoscope,
    title: "Overburdened Healthcare Systems",
    description:
      "Dermatologists face overwhelming patient volumes, leading to long wait times and delayed diagnoses.",
  },
  {
    icon: AlertTriangle,
    title: "Human Error in Diagnosis",
    description:
      "Visual assessment alone can lead to misdiagnosis. Studies show up to 30% error rate in manual skin lesion evaluation.",
  },
  {
    icon: MapPin,
    title: "Poor Rural Accessibility",
    description:
      "Rural and underserved communities have limited access to specialized dermatology clinics and diagnostic tools.",
  },
  {
    icon: DollarSign,
    title: "High Repeated Medical Costs",
    description:
      "Multiple visits, biopsies, and specialist referrals create a significant financial burden on patients.",
  },
  {
    icon: Search,
    title: "Lack of Focused Screening Tools",
    description:
      "Existing tools are general-purpose. There is no widely available tool focused specifically on skin cancer detection.",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            The Challenge
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            The Problem We&apos;re Solving
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Skin cancer is the most common cancer globally, yet early detection
            remains a critical challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="group rounded-xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <problem.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
