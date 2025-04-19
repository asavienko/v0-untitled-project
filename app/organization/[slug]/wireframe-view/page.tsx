import { OrganizationWireframe } from "@/components/organization/organization-wireframe"

export default function WireframeView({ params }: { params: { slug: string } }) {
  return <OrganizationWireframe organizationSlug={params.slug} />
}
