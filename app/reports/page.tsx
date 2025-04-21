import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock } from "lucide-react"

// Sample report data - in a real app, this would come from an API or props
const reportData = {
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

export default function TestReportPage() {
  const { testsuites, severitySummary } = reportData
  const attributes = testsuites._attributes
  const testsuite = testsuites.testsuite
  const testcases = Array.isArray(testsuite.testcase) ? testsuite.testcase : [testsuite.testcase]

  // Calculate total severity count for percentage calculations
  const totalSeverityCount = severitySummary.high + severitySummary.medium + severitySummary.low

  // Format timestamp
  const formattedTimestamp = new Date(attributes.timestamp).toLocaleString()

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Test Report</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{attributes.tests}</div>
            <p className="text-xs text-muted-foreground mt-1">Vault ID: {attributes.vauldId.substring(0, 8)}...</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-lg font-medium">Passed</span>
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

      {/* Severity Summary */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Severity Summary</CardTitle>
          <CardDescription>Distribution of issues by severity level</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500"></span>
                  <span>High</span>
                </div>
                <span className="font-medium">{severitySummary.high}</span>
              </div>
              <Progress
                value={(severitySummary.high / totalSeverityCount) * 100}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-red-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span>Medium</span>
                </div>
                <span className="font-medium">{severitySummary.medium}</span>
              </div>
              <Progress
                value={(severitySummary.medium / totalSeverityCount) * 100}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-yellow-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span>Low</span>
                </div>
                <span className="font-medium">{severitySummary.low}</span>
              </div>
              <Progress
                value={(severitySummary.low / totalSeverityCount) * 100}
                className="h-2 bg-gray-100"
                indicatorClassName="bg-blue-500"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Test Suite Details */}
      <Card className="mb-8">
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
