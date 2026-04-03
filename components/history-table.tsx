import { Badge } from "@/components/ui/badge"

const screeningHistory = [
  {
    id: 1,
    date: "2026-02-20",
    riskLevel: "Low" as const,
    confidence: 92,
    status: "Completed",
  },
  {
    id: 2,
    date: "2026-01-15",
    riskLevel: "Medium" as const,
    confidence: 74,
    status: "Follow-up Scheduled",
  },
  {
    id: 3,
    date: "2025-12-05",
    riskLevel: "Low" as const,
    confidence: 89,
    status: "Completed",
  },
  {
    id: 4,
    date: "2025-11-10",
    riskLevel: "High" as const,
    confidence: 68,
    status: "Referred to Specialist",
  },
  {
    id: 5,
    date: "2025-10-01",
    riskLevel: "Low" as const,
    confidence: 95,
    status: "Completed",
  },
]

const riskBadgeVariants = {
  Low: "bg-green-100 text-green-700 border-green-200",
  Medium: "bg-yellow-100 text-yellow-700 border-yellow-200",
  High: "bg-red-100 text-red-700 border-red-200",
}

export function HistoryTable() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border">
        <h2 className="text-lg font-semibold text-foreground">
          Screening History
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Your previous skin cancer screening results.
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-secondary/30">
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Risk Level
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Confidence
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {screeningHistory.map((entry, index) => (
              <tr
                key={entry.id}
                className={`border-b border-border last:border-0 transition-colors hover:bg-secondary/20 ${
                  index % 2 === 0 ? "" : "bg-secondary/10"
                }`}
              >
                <td className="px-6 py-4 text-sm font-medium text-foreground">
                  {new Date(entry.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant="outline"
                    className={`${riskBadgeVariants[entry.riskLevel]} text-xs font-semibold`}
                  >
                    {entry.riskLevel}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-20 rounded-full bg-secondary overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${entry.confidence}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {entry.confidence}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-muted-foreground">
                  {entry.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden flex flex-col">
        {screeningHistory.map((entry) => (
          <div
            key={entry.id}
            className="flex flex-col gap-2 px-4 py-4 border-b border-border last:border-0"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">
                {new Date(entry.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </span>
              <Badge
                variant="outline"
                className={`${riskBadgeVariants[entry.riskLevel]} text-xs font-semibold`}
              >
                {entry.riskLevel}
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">
                Confidence: {entry.confidence}%
              </span>
              <span className="text-xs text-muted-foreground">
                {entry.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
