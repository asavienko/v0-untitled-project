"use client"

import { useState, useEffect } from "react"
import { ReportsListView } from "./reports-list-view"
import { ReportDetailView } from "./report-detail-view"

interface ReportsViewProps {
  initialReportId?: string | null
}

export function ReportsView({ initialReportId = null }: ReportsViewProps) {
  const [selectedReportId, setSelectedReportId] = useState<string | null>(initialReportId)

  // Update selected report if initialReportId changes
  useEffect(() => {
    if (initialReportId) {
      setSelectedReportId(initialReportId)
    }
  }, [initialReportId])

  // Handle selecting a report
  const handleSelectReport = (reportId: string) => {
    setSelectedReportId(reportId)
  }

  // Handle going back to the list view
  const handleBackToList = () => {
    setSelectedReportId(null)
  }

  return (
    <div>
      {selectedReportId ? (
        <ReportDetailView reportId={selectedReportId} onBack={handleBackToList} />
      ) : (
        <ReportsListView onSelectReport={handleSelectReport} />
      )}
    </div>
  )
}
