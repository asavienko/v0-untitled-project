"use client"

import { useState } from "react"
import { ReportsListView } from "./reports-list-view"
import { ReportDetailView } from "./report-detail-view"

export function ReportsView() {
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null)

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
