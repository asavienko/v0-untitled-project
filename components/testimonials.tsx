import Image from "next/image"
import { ModernCard } from "@/components/ui/modern-card"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  image: string
  highlight?: boolean
}

export function Testimonial({ quote, author, role, company, image, highlight = false }: TestimonialProps) {
  return (
    <ModernCard className={cn("h-full flex flex-col", highlight && "border-primary/50 bg-primary/[0.03]")} hover={true}>
      <div className="flex flex-col gap-4 h-full">
        <div className="relative flex-1">
          <div className="absolute -top-2 -left-2 text-5xl text-primary opacity-20">"</div>
          <p className="text-muted-foreground relative z-10 pt-4 italic">{quote}</p>
          <div className="absolute -bottom-4 -right-2 text-5xl text-primary opacity-20">"</div>
        </div>
        <div className="flex items-center gap-4 mt-6 pt-4 border-t">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary/20 shadow-sm">
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">
              {role}, <span className="text-primary">{company}</span>
            </p>
          </div>
        </div>
      </div>
    </ModernCard>
  )
}
