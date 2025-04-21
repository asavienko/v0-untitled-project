"use client"

import { FileText, CheckCircle, AlertTriangle, XCircle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Sample list of recent reports - in a real app, this would come from an API
const recentReports = [
  {
    id: "rep-001",
    name: "CounterTest Report",
    date: "April 17, 2025",
    status: "Passed",
    tests: 2,
    failures: 0,
    errors: 0,
    vault: "Smart Contract Verification",
  },
  {
    id: "rep-002",
    name: "TokenContract Report",
    date: "April 15, 2025",
    status: "Failed",
    tests: 5,
    failures: 2,
    errors: 0,
    vault: "Token Implementation",
  },
  {
    id: "rep-003",
    name: "StakingContract Report",
    date: "April 10, 2025",
    status: "Passed",
    tests: 8,
    failures: 0,
    errors: 0,
    vault: "DeFi Platform",
  },
]

interface ReportsHighlightProps {
  onViewAllReports: () => void
  onViewReport: (reportId: string) => void
}

export function ReportsHighlight({ onViewAllReports, onViewReport }: ReportsHighlightProps) {
  // Get status icon based on report status
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Passed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "Failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "Warning":
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />
      default:
        return <FileText className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2 border-b">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold">Recent Reports</CardTitle>
            <CardDescription>Latest verification results</CardDescription>
          </div>
          <div className="flex items-center justify-center h-8 w-8 rounded-md bg-primary/10">
            <FileText className="h-5 w-5 text-primary" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentReports.map((report) => (
            <div
              key={report.id}
              className="flex items-start justify-between p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer"
              onClick={() => onViewReport(report.id)}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{getStatusIcon(report.status)}</div>
                <div>
                  <h3 className="font-medium text-sm">{report.name}</h3>
                  <p className="text-xs text-muted-foreground">{report.vault}</p>
                  <p className="text-xs text-muted-foreground mt-1">{report.date}</p>
                </div>
              </div>
              <Badge
                variant={
                  report.status === "Passed" ? "outline" : report.status === "Failed" ? "destructive" : "secondary"
                }
                className="ml-2 self-start"
              >
                {report.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="ml-auto" onClick={onViewAllReports}>
          View All Reports <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}
