"use client"

import { useState } from "react"
import { ArrowLeft, ArrowRight, LinkIcon, CheckCircle } from "lucide-react"
import { ONBOARDING_TEXT } from "@/constants/onboarding-constants"
import { TRANSITIONS, ANIMATIONS, SIZES } from "@/constants/ui-constants"
import { FORM, VALIDATION } from "@/constants/form-constants"

interface AddRepositoryStepProps {
  repoLink: string
  repoLinkError: string
  onRepoLinkChange: (value: string) => void
  onBack: () => void
  onNext: () => void
}

export function AddRepositoryStep({
  repoLink,
  repoLinkError,
  onRepoLinkChange,
  onBack,
  onNext,
}: AddRepositoryStepProps) {
  const [isFocused, setIsFocused] = useState(false)
  const isValidRepo = repoLink && VALIDATION.GITHUB_REPO.test(repoLink)

  return (
    <div className="space-y-6">
      <div className={`rounded-xl ${ANIMATIONS.SLIDE_UP}`}>
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="repoLink" className={FORM.LABEL_CLASSES.REQUIRED}>
              {ONBOARDING_TEXT.REPOSITORY.LABEL}
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <LinkIcon
                  size={16}
                  className={`${isFocused || repoLink ? "text-primary" : "text-gray-400"} ${TRANSITIONS.DEFAULT}`}
                />
              </div>
              <input
                type={FORM.INPUT_TYPES.TEXT}
                name="repoLink"
                id="repoLink"
                className={`${
                  repoLinkError
                    ? FORM.INPUT_CLASSES.ERROR
                    : `${FORM.INPUT_CLASSES.DEFAULT} ${isValidRepo ? "border-green-500 ring-green-500/20" : ""}`
                } pl-10 ${TRANSITIONS.DEFAULT}`}
                placeholder={ONBOARDING_TEXT.REPOSITORY.PLACEHOLDER}
                value={repoLink}
                onChange={(e) => onRepoLinkChange(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              {isValidRepo && (
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <CheckCircle size={16} className="text-green-500" />
                </div>
              )}
            </div>
            {repoLinkError && <p className={FORM.HELPER_CLASSES.ERROR}>{repoLinkError}</p>}
            <p className={FORM.HELPER_CLASSES.DEFAULT}>
              Enter the full URL of the GitHub repository you want to connect to your organization.
            </p>
          </div>

          <div className="rounded-lg bg-gray-50 p-4 border border-gray-200">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Repository examples:</h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                <code className="rounded bg-gray-100 px-2 py-1">https://github.com/organization/repository</code>
              </li>
              <li className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary"></span>
                <code className="rounded bg-gray-100 px-2 py-1">https://github.com/username/project</code>
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
            !repoLink ? "opacity-70 cursor-not-allowed" : ""
          } ${TRANSITIONS.DEFAULT}`}
          onClick={onNext}
          disabled={!repoLink}
        >
          {ONBOARDING_TEXT.BUTTONS.NEXT}
          <ArrowRight size={SIZES.ICON.SM} className={`${TRANSITIONS.DEFAULT} group-hover:translate-x-1`} />
        </button>
      </div>
    </div>
  )
}
