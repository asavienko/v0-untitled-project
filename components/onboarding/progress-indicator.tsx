"use client"

import { ONBOARDING_STEPS } from "@/constants/onboarding-constants"
import type { OnboardingStep } from "@/constants/onboarding-constants"

interface ProgressIndicatorProps {
  currentStep: OnboardingStep
  choice: "github" | "manual" | null
}

export function ProgressIndicator({ currentStep, choice }: ProgressIndicatorProps) {
  // Define the steps based on the chosen path
  const getSteps = () => {
    if (choice === "github") {
      return [
        { id: ONBOARDING_STEPS.CHOOSE_METHOD, label: "Choose Option" },
        { id: ONBOARDING_STEPS.GITHUB_FLOW, label: "GitHub Setup" },
        { id: ONBOARDING_STEPS.CREATE_ORGANIZATION, label: "Complete" },
      ]
    } else if (choice === "manual") {
      return [
        { id: ONBOARDING_STEPS.CHOOSE_METHOD, label: "Choose Option" },
        { id: ONBOARDING_STEPS.REPOSITORY_OPTIONS, label: "Repository" },
        { id: ONBOARDING_STEPS.CREATE_ORGANIZATION, label: "Organization" },
      ]
    } else {
      // Default steps when no choice is made yet
      return [
        { id: ONBOARDING_STEPS.CHOOSE_METHOD, label: "Choose Option" },
        { id: "middle", label: "Setup" },
        { id: ONBOARDING_STEPS.CREATE_ORGANIZATION, label: "Complete" },
      ]
    }
  }

  const steps = getSteps()

  // Update the currentIndex calculation to properly map the ADD_REPOSITORY step to the Configure step (index 2)

  // Replace the current currentIndex calculation with this updated version:
  const getCurrentIndex = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.CHOOSE_METHOD:
        return 0 // Choose
      case ONBOARDING_STEPS.GITHUB_FLOW:
      case ONBOARDING_STEPS.REPOSITORY_OPTIONS:
        return 1 // Connect
      case ONBOARDING_STEPS.ADD_REPOSITORY:
        return 2 // Configure
      case ONBOARDING_STEPS.CREATE_ORGANIZATION:
        return 3 // Complete
      default:
        return 0
    }
  }

  const currentIndex = getCurrentIndex()

  return (
    <div className="mb-4 pt-1">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="relative flex items-center justify-between">
            {/* Progress bar background - thinner and more subtle */}
            <div className="absolute top-3 left-0 right-0 h-0.5 bg-gray-100 rounded-full overflow-hidden"></div>

            {/* Active progress bar - thinner and more subtle */}
            <div
              className="absolute top-3 left-0 h-0.5 bg-primary-300 rounded-full transition-all duration-500 ease-in-out"
              style={{
                width: `${Math.max(0, (currentIndex / 3) * 100)}%`,
              }}
            ></div>

            {/* Step indicators - smaller and less prominent */}
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="flex flex-col items-center relative z-10">
                <div
                  className={`
                flex h-6 w-6 items-center justify-center rounded-full border text-xs
                transition-all duration-300 ease-in-out
                ${
                  currentIndex >= index
                    ? "border-primary-300 bg-primary-50 text-primary-600"
                    : "border-gray-200 bg-white text-gray-400"
                }
                ${currentIndex === index ? "ring-2 ring-primary-100" : ""}
              `}
                >
                  {currentIndex > index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <span className="text-xs">{index + 1}</span>
                  )}
                </div>
                <div
                  className={`
                mt-1 text-[10px] font-medium text-center
                transition-all duration-300 ease-in-out
                ${currentIndex >= index ? "text-primary-500" : "text-gray-400"}
              `}
                >
                  {index === 0 ? "Choose" : index === 1 ? "Connect" : index === 2 ? "Configure" : "Complete"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
