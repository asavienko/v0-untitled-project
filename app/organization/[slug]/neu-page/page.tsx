import NeuOrganizationPage from "@/app/organization/[slug]/neu-page"

export default function NeuPage({ params }: { params: { slug: string } }) {
  return <NeuOrganizationPage params={params} />
}
