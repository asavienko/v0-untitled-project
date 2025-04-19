"use client"

import { Github, Building2, ArrowLeft, ArrowRight, Globe } from "lucide-react"
import { ONBOARDING_TEXT } from "@/constants/onboarding-constants"
import { SIZES, TRANSITIONS } from "@/constants/ui-constants"

interface RepositoryOptionsStepProps {
  onAddRepository: () => void
  onSkip: () => void
  onReturn: () => void
}

export function RepositoryOptionsStep({ onAddRepository, onSkip, onReturn }: RepositoryOptionsStepProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-5">
        <button
          className={`group relative overflow-hidden rounded-xl border-2 border-gray-200 p-5 text-left ${TRANSITIONS.HOVER}`}
          onClick={onAddRepository}
        >
          {/* Background glow effect on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 ${TRANSITIONS.DEFAULT}`}
          ></div>

          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-gray-800 to-black text-white shadow-md group-hover:scale-110 transition-transform relative">
                <Github size={SIZES.ICON.XL} />
                <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 shadow-sm border border-white">
                  <Globe size={SIZES.ICON.SM} />
                </div>
              </div>
              <h3 className="text-lg font-semibold">Add Public GitHub Repository</h3>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              Add a public GitHub repository to your organization immediately to start verification.
            </p>

            <div
              className={`flex items-center justify-end text-primary font-medium text-sm opacity-0 group-hover:opacity-100 ${TRANSITIONS.DEFAULT}`}
            >
              <span>Continue</span>
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </button>

        <button
          className={`group relative overflow-hidden rounded-xl border-2 border-gray-200 p-5 text-left ${TRANSITIONS.HOVER}`}
          onClick={onSkip}
        >
          {/* Background glow effect on hover */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-gray-50 to-transparent opacity-0 group-hover:opacity-100 ${TRANSITIONS.DEFAULT}`}
          ></div>

          <div className="relative">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 shadow-md group-hover:scale-110 transition-transform">
                <Building2 size={SIZES.ICON.XL} />
              </div>
              <h3 className="text-lg font-semibold">{ONBOARDING_TEXT.REPOSITORY.SKIP}</h3>
            </div>

            <p className="text-sm text-gray-600 mb-3">
              Create your organization now and add repositories when you're ready.
            </p>

            <div
              className={`flex items-center justify-end text-blue-600 font-medium text-sm opacity-0 group-hover:opacity-100 ${TRANSITIONS.DEFAULT}`}
            >
              <span>Continue</span>
              <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </button>
      </div>

      <div className="flex justify-start pt-2">
        <button
          className={`group flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:border-primary/30 hover:bg-gray-50 ${TRANSITIONS.DEFAULT}`}
          onClick={onReturn}
        >
          <ArrowLeft size={SIZES.ICON.SM} className={`${TRANSITIONS.DEFAULT} group-hover:-translate-x-1`} />
          {ONBOARDING_TEXT.REPOSITORY.RETURN}
        </button>
      </div>
    </div>
  )
}
