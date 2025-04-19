"use client"

import { Github, CheckCircle, AlertCircle, ExternalLink } from "lucide-react"
import { ONBOARDING_TEXT } from "@/constants/onboarding-constants"
import { SIZES, TRANSITIONS } from "@/constants/ui-constants"

interface GithubFlowStepProps {
  onContinue: () => void
}

export function GithubFlowStep({ onContinue }: GithubFlowStepProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 shadow-sm p-4">
        <p className="mb-5 text-sm text-gray-600">{ONBOARDING_TEXT.GITHUB_FLOW.DESCRIPTION}</p>

        <div className="mb-5 space-y-4">
          {ONBOARDING_TEXT.GITHUB_FLOW.STEPS.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 mt-0.5 rounded-full bg-primary-50 p-1 text-primary-600">
                <CheckCircle size={SIZES.ICON.MD} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">{step}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
          <AlertCircle size={SIZES.ICON.MD} className="mr-3 mt-0.5 flex-shrink-0" />
          <p>{ONBOARDING_TEXT.GITHUB_FLOW.ALERT}</p>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className={`group flex items-center gap-3 rounded-lg bg-black px-5 py-3 text-white shadow-lg hover:bg-gray-800 ${TRANSITIONS.DEFAULT}`}
          onClick={onContinue}
        >
          <Github size={SIZES.ICON.LG} />
          <span className="font-medium">{ONBOARDING_TEXT.GITHUB_FLOW.BUTTON}</span>
          <ExternalLink size={SIZES.ICON.MD} className={`ml-1 ${TRANSITIONS.DEFAULT} group-hover:translate-x-1`} />
        </button>
      </div>
    </div>
  )
}
