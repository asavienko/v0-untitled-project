"use client"

import { useState } from "react"
import { ArrowLeft, Check } from "lucide-react"
import { ONBOARDING_TEXT } from "@/constants/onboarding-constants"
import { TRANSITIONS, ANIMATIONS, SIZES } from "@/constants/ui-constants"
import { FORM } from "@/constants/form-constants"

interface CreateOrganizationStepProps {
  orgName: string
  onOrgNameChange: (value: string) => void
  onBack: () => void
  onCreateOrg: () => void
}

export function CreateOrganizationStep({ orgName, onOrgNameChange, onBack, onCreateOrg }: CreateOrganizationStepProps) {
  const [isFocused, setIsFocused] = useState(false)
  const isValid = orgName.length >= 3

  return (
    <div className="space-y-6">
      <div className={`rounded-xl shadow-sm ${ANIMATIONS.SLIDE_UP}`}>
        <div className="space-y-4">
          {/* Information about organization name */}
          <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-700">
            <p className="font-medium mb-1">Important information about organization names:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                When using GitHub App integration, the organization name will be automatically fetched from GitHub.
              </li>
              <li>Organization names must be unique across the entire platform.</li>
              <li>Organization names cannot be changed after creation.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <label htmlFor="orgName" className={FORM.LABEL_CLASSES.REQUIRED}>
              {ONBOARDING_TEXT.ORGANIZATION.LABEL}
            </label>
            <input
              type={FORM.INPUT_TYPES.TEXT}
              name="orgName"
              id="orgName"
              className={`${FORM.INPUT_CLASSES.DEFAULT} ${
                isValid ? "border-green-500 ring-green-500/20" : ""
              } ${TRANSITIONS.DEFAULT}`}
              placeholder={ONBOARDING_TEXT.ORGANIZATION.PLACEHOLDER}
              value={orgName}
              onChange={(e) => onOrgNameChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <p className={FORM.HELPER_CLASSES.DEFAULT}>{ONBOARDING_TEXT.ORGANIZATION.HELPER_TEXT}</p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Organization tips:</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Choose a descriptive name that reflects your team or project</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                <span>Organization names can be changed later if needed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`flex items-center justify-between ${ANIMATIONS.SLIDE_UP}`} style={{ animationDelay: "200ms" }}>
        <button
          className={`group flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary/30 hover:bg-gray-50 ${TRANSITIONS.DEFAULT}`}
          onClick={onBack}
        >
          <ArrowLeft size={SIZES.ICON.SM} className={`${TRANSITIONS.DEFAULT} group-hover:-translate-x-1`} />
          {ONBOARDING_TEXT.BUTTONS.BACK}
        </button>

        <button
          className={`group flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 ${
            !isValid ? "opacity-70 cursor-not-allowed" : ""
          } ${TRANSITIONS.DEFAULT}`}
          onClick={onCreateOrg}
          disabled={!isValid}
        >
          {ONBOARDING_TEXT.ORGANIZATION.CREATE}
          <Check size={SIZES.ICON.SM} className={`ml-1 ${TRANSITIONS.DEFAULT}`} />
        </button>
      </div>
    </div>
  )
}
