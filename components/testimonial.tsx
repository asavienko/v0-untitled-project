import Image from "next/image"
import { Card } from "@/components/ui/card"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  image: string
  highlight?: boolean
}

export function Testimonial({ quote, author, role, company, image, highlight = false }: TestimonialProps) {
  // Function to highlight key phrases in testimonials
  const highlightQuote = (text: string) => {
    // Keywords to highlight
    const keywords = [
      "reduced",
      "verification times",
      "proof caching",
      "saved",
      "hours",
      "specialized hardware",
      "overhead",
      "integration",
      "CI pipeline",
      "catch",
      "issues",
      "production",
      "game-changer",
      "security",
    ]

    // Split the text into parts that should be highlighted and parts that shouldn't
    let parts: { text: string; highlight: boolean }[] = [{ text, highlight: false }]

    keywords.forEach((keyword) => {
      parts = parts.flatMap((part) => {
        if (!part.highlight) {
          const splitText = part.text.split(new RegExp(`(${keyword})`, "gi"))
          return splitText.map((text, i) => ({
            text,
            highlight: i % 2 === 1, // Every odd index is a match
          }))
        }
        return [part]
      })
    })

    return (
      <p className="text-muted-foreground text-sm italic relative z-10 pt-4 leading-relaxed">
        {parts.map((part, i) =>
          part.highlight ? (
            <span key={i} className="font-medium text-foreground">
              {part.text}
            </span>
          ) : (
            <span key={i}>{part.text}</span>
          ),
        )}
      </p>
    )
  }

  return (
    <Card className="h-full flex flex-col group" hover variant="bordered">
      <div className="flex flex-col gap-4 h-full">
        <div className="relative">
          <div className="absolute -top-2 -left-2 text-5xl text-primary opacity-20 group-hover:opacity-40 transition-opacity">
            "
          </div>
          {highlightQuote(quote)}
          <div className="absolute -bottom-2 -right-2 text-5xl text-primary opacity-20 group-hover:opacity-40 transition-opacity">
            "
          </div>
        </div>
        <div className="flex items-center gap-3 mt-auto pt-4 border-t">
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20 shadow-sm group-hover:border-primary/40 transition-colors">
            <Image src={image || "/placeholder.svg"} alt={author} fill className="object-cover" />
          </div>
          <div>
            <p className="font-medium text-sm">{author}</p>
            <p className="text-xs text-muted-foreground">
              {role}, <span className="font-accent text-primary">{company}</span>
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
