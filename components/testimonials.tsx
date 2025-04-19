import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  image: string
}

export function Testimonial({ quote, author, role, company, image }: TestimonialProps) {
  return (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <div className="absolute -top-2 -left-2 text-4xl text-primary opacity-30">"</div>
            <p className="text-muted-foreground relative z-10 pt-2">{quote}</p>
            <div className="absolute -bottom-4 -right-2 text-4xl text-primary opacity-30">"</div>
          </div>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t">
            <div className="relative h-12 w-12 overflow-hidden rounded-full">
              <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
            </div>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">
                {role}, {company}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
