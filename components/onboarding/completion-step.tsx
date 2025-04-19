"use client"

import { CheckCircle, ArrowRight, Building2 } from "lucide-react"
import { TRANSITIONS, ANIMATIONS, SIZES } from "@/constants/ui-constants"

interface CompletionStepProps {
  organizationName: string
  onClose: () => void
}

export function CompletionStep({ organizationName, onClose }: CompletionStepProps) {
  return (
    <div className="space-y-6">
      <div className={`flex flex-col items-center justify-center py-6 ${ANIMATIONS.SLIDE_UP}`}>
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <CheckCircle size={SIZES.ICON.XXL} />
        </div>
        <h3 className="mb-2 text-xl font-bold text-gray-900">Organization Created Successfully!</h3>
        <p className="mb-6 text-center text-gray-600">
          <span className="font-bold text-primary-600">{organizationName || "Your organization"}</span> has been created
          and is ready to use.
        </p>

        <div className="mt-2 w-full max-w-md rounded-lg bg-gray-50 p-4 border border-gray-200">
          <h4 className="mb-2 text-sm font-medium text-gray-700">Next steps:</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <span className="text-xs font-medium">1</span>
              </div>
              <span className="text-sm text-gray-600">Add repositories to your organization</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <span className="text-xs font-medium">2</span>
              </div>
              <span className="text-sm text-gray-600">Invite team members to collaborate</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary-100 text-primary-600">
                <span className="text-xs font-medium">3</span>
              </div>
              <span className="text-sm text-gray-600">Set up verification workflows</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className={`group flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md hover:bg-primary-600 ${TRANSITIONS.DEFAULT} ${ANIMATIONS.SLIDE_UP}`}
          onClick={onClose}
          style={{ animationDelay: "300ms" }}
        >
          <Building2 size={SIZES.ICON.MD} />
          <span>Go to Organization Dashboard</span>
          <ArrowRight size={SIZES.ICON.SM} className={`${TRANSITIONS.DEFAULT} group-hover:translate-x-1`} />
        </button>
      </div>
    </div>
  )
}
