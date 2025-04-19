"use client"

import { useState } from "react"
import { Star } from "lucide-react"

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [rating, setRating] = useState<number | null>(null)
  const [hoverRating, setHoverRating] = useState<number | null>(null)

  return (
    <div className="fixed right-0 top-1/3 z-50">
      {isOpen ? (
        <div className="bg-white shadow-lg border rounded-l-lg p-4 w-64">
          <div className="text-center mb-4">
            <h3 className="text-sm font-medium text-gray-700">How would you rate your experience?</h3>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="focus:outline-none"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(null)}
                onClick={() => setRating(star)}
              >
                <Star
                  size={24}
                  className={`${
                    (hoverRating !== null ? star <= hoverRating : star <= (rating || 0))
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>

          <div className="flex justify-between text-xs text-gray-500">
            <span>Hate</span>
            <span>Love</span>
          </div>

          <div className="mt-4 text-center">
            <button className="text-xs text-gray-400 hover:text-gray-600" onClick={() => setIsOpen(false)}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <button
          className="bg-blue-600 text-white p-2 rounded-l-md shadow-lg flex flex-col items-center justify-center h-32"
          onClick={() => setIsOpen(true)}
        >
          <span className="transform -rotate-90 whitespace-nowrap text-sm font-medium">Feedback</span>
        </button>
      )}
    </div>
  )
}
