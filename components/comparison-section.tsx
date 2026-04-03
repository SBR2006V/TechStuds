import { Check, X } from "lucide-react"

const rows = [
  {
    criteria: "Cost",
    traditional: "High",
    modern: "Low",
  },
  {
    criteria: "Speed",
    traditional: "Weeks",
    modern: "Seconds",
  },
  {
    criteria: "Error Rate",
    traditional: "Manual Assessment",
    modern: "AI Precision",
  },
  {
    criteria: "Accessibility",
    traditional: "Urban Hospitals Only",
    modern: "Anywhere with Internet",
  },
  {
    criteria: "Focus",
    traditional: "General Dermatology",
    modern: "Skin-Cancer Specific",
  },
]

export function ComparisonSection() {
  return (
    <section id="comparison" className="py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Side by Side
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Traditional vs Life On A Click
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how our AI-powered approach compares to traditional diagnostic
            methods.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Desktop table */}
          <div className="hidden md:block rounded-2xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-secondary px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Criteria
                  </th>
                  <th className="bg-secondary px-6 py-4 text-center text-sm font-semibold text-muted-foreground">
                    Traditional Diagnosis
                  </th>
                  <th className="bg-primary px-6 py-4 text-center text-sm font-semibold text-primary-foreground">
                    Life On A Click
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={row.criteria}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-secondary/50"
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {row.criteria}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                        <X className="h-4 w-4 text-destructive/60" />
                        {row.traditional}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5">
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                        <Check className="h-4 w-4" />
                        {row.modern}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-4">
            {rows.map((row) => (
              <div
                key={row.criteria}
                className="rounded-xl border border-border bg-background p-4"
              >
                <div className="text-sm font-semibold text-foreground mb-3">
                  {row.criteria}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between rounded-lg bg-secondary/50 px-4 py-2.5">
                    <span className="text-xs text-muted-foreground">
                      Traditional
                    </span>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <X className="h-3.5 w-3.5 text-destructive/60" />
                      {row.traditional}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-primary/10 px-4 py-2.5">
                    <span className="text-xs text-primary font-medium">
                      Life On A Click
                    </span>
                    <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                      <Check className="h-3.5 w-3.5" />
                      {row.modern}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
