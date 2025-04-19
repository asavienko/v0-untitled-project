"use client"

import { Github, Building2, ArrowRight } from "lucide-react"
import type { OptionChoice } from "@/constants/onboarding-constants"
import { ONBOARDING_TEXT, OPTION_CHOICES } from "@/constants/onboarding-constants"
import { SIZES, TRANSITIONS } from "@/constants/ui-constants"

interface ChooseMethodStepProps {
  choice: OptionChoice
  onSelect: (selected: "github" | "manual") => void
}

export function ChooseMethodStep({ choice, onSelect }: ChooseMethodStepProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-5">
        <button
          className={`group relative overflow-hidden rounded-xl border-2 p-5 text-left transition-all duration-300 ${
            choice === OPTION_CHOICES.GITHUB
              ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
              : "border-gray-200 hover:border-primary/50 hover:shadow-md"
          } ${choice !== OPTION_CHOICES.GITHUB ? "" : "ring-2 ring-primary/20"}`}
          onClick={() => onSelect(OPTION_CHOICES.GITHUB)}
        >
          {/* Background glow effect on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 ${TRANSITIONS.DEFAULT}`}
          ></div>

          {/* Recommended badge - always visible */}
          <div className="absolute bottom-2 left-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm z-10">
            Recommended
          </div>

          <div className="relative">
            {/* Badge */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-black text-white shadow-md group-hover:scale-110 transition-transform">
                  <Github size={SIZES.ICON.XL} />
                </div>
                <h3 className="text-lg font-semibold whitespace-nowrap">{ONBOARDING_TEXT.GITHUB_OPTION.TITLE}</h3>
              </div>
              <div className="flex flex-col gap-2 ml-3 flex-shrink-0 items-end">
                <div className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Private Repos
                </div>
                <div className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 ring-1 ring-inset ring-primary-600/20 whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Public Repos
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">
              <span className="font-medium text-primary-700">Recommended:</span>{" "}
              {ONBOARDING_TEXT.GITHUB_OPTION.DESCRIPTION} Provides the best integration experience.
            </p>

            <div
              className={`flex items-center justify-end text-primary font-medium text-sm ${
                choice === OPTION_CHOICES.GITHUB ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              } ${TRANSITIONS.DEFAULT}`}
            >
              <span>Select option</span>
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </button>

        <button
          className={`group relative overflow-hidden rounded-xl border-2 p-5 text-left transition-all duration-300 ${
            choice === OPTION_CHOICES.MANUAL
              ? "border-primary bg-primary/5 shadow-lg shadow-primary/10"
              : "border-gray-200 hover:border-primary/50 hover:shadow-md"
          }`}
          onClick={() => onSelect(OPTION_CHOICES.MANUAL)}
        >
          {/* Background glow effect on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 ${TRANSITIONS.DEFAULT}`}
          ></div>

          <div className="relative">
            {/* Badge */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-md group-hover:scale-110 transition-transform">
                  <Building2 size={SIZES.ICON.XL} />
                </div>
                <h3 className="text-lg font-semibold truncate">{ONBOARDING_TEXT.MANUAL_OPTION.TITLE}</h3>
              </div>
              <div className="flex flex-col gap-2 ml-3 flex-shrink-0 items-end">
                <div className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20 whitespace-nowrap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Public Repos
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-4">{ONBOARDING_TEXT.MANUAL_OPTION.DESCRIPTION}</p>

            <div
              className={`flex items-center justify-end text-blue-600 font-medium text-sm ${
                choice === OPTION_CHOICES.MANUAL ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              } ${TRANSITIONS.DEFAULT}`}
            >
              <span>Select option</span>
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </button>
      </div>
    </div>
  )
}
