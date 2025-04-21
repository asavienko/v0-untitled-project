"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"
import { Check, ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  items: FAQItem[]
}

export function FAQ({ items }: FAQProps) {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({})

  // Function to format answer text for better scannability
  const formatAnswer = (answer: string) => {
    // If the answer is short, just return it
    if (answer.length < 100) return <p>{answer}</p>

    // For longer answers, try to break it up into paragraphs
    const sentences = answer
      .split(". ")
      .map((s) => s.trim())
      .filter((s) => s.length > 0)

    // If there are 3 or more sentences, format as bullet points
    if (sentences.length >= 3) {
      return (
        <div className="space-y-3">
          <p className="font-medium mb-2">{sentences[0]}.</p>
          <ul className="space-y-2 pl-1">
            {sentences.slice(1).map((sentence, i) => (
              <li key={i} className="flex items-start gap-2">
                <Check className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm">
                  {sentence}
                  {!sentence.endsWith(".") && "."}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    }

    // Otherwise, just break into paragraphs
    return (
      <div className="space-y-3">
        {sentences.map((sentence, i) => (
          <p key={i} className={i === 0 ? "font-medium" : "text-sm"}>
            {sentence}
            {!sentence.endsWith(".") && "."}
          </p>
        ))}
      </div>
    )
  }

  const toggleExpanded = (index: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <Card className="w-full">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => {
          const isExpanded = expandedItems[`item-${index}`] || false

          return (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/40">
              <AccordionTrigger
                onClick={() => toggleExpanded(`item-${index}`)}
                className="text-left text-base font-medium py-4 hover:text-primary transition-colors"
              >
                <div className="flex items-center justify-between w-full pr-2">
                  <span>{item.question}</span>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-primary shrink-0 transition-transform" />
                  ) : (
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform" />
                  )}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground py-4 text-sm leading-relaxed">
                <div className="bg-muted/30 p-4 rounded-md border border-border/30">{formatAnswer(item.answer)}</div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </Card>
  )
}
