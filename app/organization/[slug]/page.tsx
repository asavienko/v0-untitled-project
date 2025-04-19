import Link from "next/link"

export default function OrganizationPage({ params }: { params: { slug: string } }) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Organization: {params.slug}</h1>

      <div className="space-y-4">
        <div className="border rounded p-4">
          <h2 className="text-xl font-bold mb-2">Available Views</h2>
          <div className="space-y-2">
            <Link
              href={`/organization/${params.slug}/wireframe-view`}
              className="block border rounded p-2 hover:bg-gray-100"
            >
              New Wireframe View (Sidebar Navigation)
            </Link>
            <Link href={`/organization/${params.slug}/new-view`} className="block border rounded p-2 hover:bg-gray-100">
              Previous New View (Tab Navigation)
            </Link>
            <Link
              href={`/organization/${params.slug}/skeleton-view`}
              className="block border rounded p-2 hover:bg-gray-100"
            >
              Skeleton View
            </Link>
            <Link href={`/organization/${params.slug}/neu-page`} className="block border rounded p-2 hover:bg-gray-100">
              Original View
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
