import {
  Scan,
  Brain,
  Video,
  CloudUpload,
  Target,
  HeartPulse,
} from "lucide-react"

const features = [
  {
    icon: Scan,
    title: "AI-Powered Instant Screening",
    description:
      "Get real-time skin lesion analysis using advanced deep learning models with results in under 3 seconds.",
  },
  {
    icon: Brain,
    title: "CNN-Based Cancer Classification",
    description:
      "Our Convolutional Neural Network is trained on thousands of dermatological images for high-accuracy classification.",
  },
  {
    icon: Video,
    title: "Dermatology Telehealth Integration",
    description:
      "Seamlessly connect with certified dermatologists for follow-up consultations based on your screening results.",
  },
  {
    icon: CloudUpload,
    title: "Secure Cloud Storage & History",
    description:
      "All your screenings are securely stored with end-to-end encryption. Track your skin health over time.",
  },
  {
    icon: Target,
    title: "Hyper-Focused Skin Cancer Optimization",
    description:
      "Unlike general health tools, our AI is specifically trained and optimized for skin cancer detection only.",
  },
  {
    icon: HeartPulse,
    title: "Reduced Hospital Visits & Cost",
    description:
      "Pre-screen from home and only visit a clinic when necessary, saving time and reducing healthcare expenses.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Platform Capabilities
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Built with cutting-edge AI and healthcare standards to deliver
            reliable, accessible screening.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
