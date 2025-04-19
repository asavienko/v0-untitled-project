"use client"

export function OrganizationSkeleton({ organizationSlug }: { organizationSlug: string }) {
  return (
    <div className="w-full">
      {/* Header skeleton */}
      <div className="border-b">
        <div className="p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {/* Organization icon placeholder */}
            <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>

            {/* Organization name and details placeholder */}
            <div>
              <div className="h-7 w-48 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 w-36 bg-gray-100 rounded"></div>
            </div>
          </div>

          {/* Action buttons placeholder */}
          <div className="flex gap-2">
            <div className="h-9 w-24 bg-gray-200 rounded"></div>
            <div className="h-9 w-32 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* Tabs placeholder */}
        <div className="flex border-t">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="px-6 py-3 flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
              <div className="h-4 w-16 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div className="p-6">
        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="border rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="h-4 w-20 bg-gray-200 rounded"></div>
                <div className="w-5 h-5 bg-gray-200 rounded-full"></div>
              </div>
              <div className="h-8 w-16 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 w-24 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column (2/3 width) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Activity section */}
            <div className="border rounded-lg">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="h-5 w-32 bg-gray-200 rounded"></div>
                <div className="h-5 w-16 bg-gray-200 rounded"></div>
              </div>
              <div className="p-4 divide-y">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="py-3 flex items-start gap-3">
                    <div className="w-8 h-8 bg-gray-200 rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="h-4 w-full bg-gray-200 rounded mb-2"></div>
                      <div className="h-3 w-20 bg-gray-100 rounded"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Vaults section */}
            <div className="border rounded-lg">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="h-5 w-24 bg-gray-200 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-5 w-20 bg-gray-200 rounded"></div>
                  <div className="h-5 w-16 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="p-4 divide-y">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg"></div>
                      <div>
                        <div className="h-4 w-32 bg-gray-200 rounded mb-1"></div>
                        <div className="h-3 w-24 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-16 bg-gray-100 rounded"></div>
                      <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column (1/3 width) */}
          <div className="space-y-6">
            {/* Users section */}
            <div className="border rounded-lg">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="h-5 w-16 bg-gray-200 rounded"></div>
                <div className="flex gap-2">
                  <div className="h-5 w-16 bg-gray-200 rounded"></div>
                  <div className="h-5 w-12 bg-gray-200 rounded"></div>
                </div>
              </div>
              <div className="p-4 divide-y">
                {[1, 2].map((item) => (
                  <div key={item} className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="h-4 w-24 bg-gray-200 rounded mb-1"></div>
                        <div className="h-3 w-32 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="h-3 w-12 bg-gray-100 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick actions section */}
            <div className="border rounded-lg">
              <div className="p-4 border-b">
                <div className="h-5 w-28 bg-gray-200 rounded"></div>
              </div>
              <div className="p-4 divide-y">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="py-3 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gray-200 rounded-lg"></div>
                      <div className="h-4 w-32 bg-gray-200 rounded"></div>
                    </div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Help section */}
            <div className="border rounded-lg">
              <div className="p-4 border-b">
                <div className="h-5 w-32 bg-gray-200 rounded"></div>
              </div>
              <div className="p-4">
                <div className="border rounded-lg p-4 mb-4">
                  <div className="h-5 w-40 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 w-full bg-gray-100 rounded mb-3"></div>
                  <div className="h-8 w-full bg-gray-200 rounded"></div>
                </div>
                <div className="h-3 w-32 bg-gray-100 rounded mb-2"></div>
                <div className="h-3 w-48 bg-gray-100 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
