"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, Download, ArrowLeft, Share2, AlertTriangle, XCircle } from "lucide-react"

// Sample report data - in a real app, this would come from an API or props
const reportData = {
  id: "rep-001",
  name: "CounterTest Report",
  date: "April 17, 2025",
  vault: "Smart Contract Verification",
  author: "YiYi",
  status: "Passed",
  testsuites: {
    _attributes: {
      tests: 2,
      failures: 0,
      errors: 0,
      time: 59,
      timestamp: "2025-04-17 04:46:13.976664",
      vauldId: "ac7ba9d4-0581-4b77-95b3-b927781bcc29",
    },
    testsuite: {
      _attributes: {
        name: "CounterTest",
        tests: 2,
        failures: 0,
        errors: 0,
        time: 59,
        timestamp: "2025-04-17 04:46:13.976711",
      },
      properties: {
        property: {
          _attributes: {
            name: "Kontrol version",
            value: "1.0.148",
          },
        },
      },
      testcase: [
        {
          _attributes: {
            name: "setUp()",
            classname: "CounterTest",
            time: 27,
            file: "test/Counter.t.sol",
            severity: "high",
          },
        },
        {
          _attributes: {
            name: "prove_SetNumber(uint256)",
            classname: "CounterTest",
            time: 32,
            file: "test/Counter.t.sol",
            severity: "high",
          },
        },
      ],
    },
  },
  severitySummary: {
    high: 3,
    medium: 1,
    low: 0,
  },
}

interface ReportDetailViewProps {
  reportId: string
  onBack: () => void
}

export function ReportDetailView({ reportId, onBack }: ReportDetailViewProps) {
  // In a real app, you would fetch the report data based on the reportId
  // For this example, we'll use the sample data

  const { testsuites, severitySummary } = reportData
  const attributes = testsuites._attributes
  const testsuite = testsuites.testsuite
  const testcases = Array.isArray(testsuite.testcase) ? testsuite.testcase : [testsuite.testcase]

  // Calculate total severity count for percentage calculations
  const totalSeverityCount = severitySummary.high + severitySummary.medium + severitySummary.low

  // Format timestamp
  const formattedTimestamp = new Date(attributes.timestamp).toLocaleString()

  // Get status icon based on test results
  const StatusIcon =
    attributes.failures > 0 || attributes.errors > 0 ? (attributes.errors > 0 ? XCircle : AlertTriangle) : CheckCircle

  // Get status color based on test results
  const statusColor =
    attributes.failures > 0 || attributes.errors > 0
      ? attributes.errors > 0
        ? "text-red-500"
        : "text-yellow-500"
      : "text-green-500"

  return (
    <div className="p-6 space-y-6">
      {/* Header with back button */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-2xl font-bold">{reportData.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Report metadata */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Vault:</span>
          <span className="font-medium">{reportData.vault}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Author:</span>
          <span className="font-medium">{reportData.author}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">Date:</span>
          <span className="font-medium">{reportData.date}</span>
        </div>
        <div className="flex items-center gap-1">
          <span className="text-muted-foreground">ID:</span>
          <span className="font-medium">{attributes.vauldId.substring(0, 8)}...</span>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attributes.tests}</div>
            <p className="text-xs text-muted-foreground mt-1">{testsuite._attributes.name}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <StatusIcon className={`h-5 w-5 ${statusColor}`} />
              <span className="text-lg font-medium">{reportData.status}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {attributes.failures} failures, {attributes.errors} errors
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Execution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <span className="text-lg font-medium">{attributes.time}s</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">{formattedTimestamp}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Version</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-medium">{testsuite.properties.property._attributes.value}</div>
            <p className="text-xs text-muted-foreground mt-1">{testsuite.properties.property._attributes.name}</p>
          </CardContent>
        </Card>
      </div>

      {/* Test Suite Details */}
      <Card>
        <CardHeader>
          <CardTitle>{testsuite._attributes.name}</CardTitle>
          <CardDescription>
            {testsuite._attributes.tests} tests, {testsuite._attributes.failures} failures,{" "}
            {testsuite._attributes.errors} errors
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-md overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 text-sm font-medium">Test Case</th>
                  <th className="text-left p-3 text-sm font-medium">File</th>
                  <th className="text-left p-3 text-sm font-medium">Time</th>
                  <th className="text-left p-3 text-sm font-medium">Severity</th>
                </tr>
              </thead>
              <tbody>
                {testcases.map((testcase, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-3 text-sm">
                      <div className="font-medium">{testcase._attributes.name}</div>
                      <div className="text-xs text-muted-foreground">{testcase._attributes.classname}</div>
                    </td>
                    <td className="p-3 text-sm">{testcase._attributes.file}</td>
                    <td className="p-3 text-sm">{testcase._attributes.time}s</td>
                    <td className="p-3 text-sm">
                      <Badge
                        variant={
                          testcase._attributes.severity === "high"
                            ? "destructive"
                            : testcase._attributes.severity === "medium"
                              ? "warning"
                              : "default"
                        }
                      >
                        {testcase._attributes.severity}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
