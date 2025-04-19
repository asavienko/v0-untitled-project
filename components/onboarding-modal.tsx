"use client"

import { useState, useEffect } from "react"
import {
  ONBOARDING_TEXT,
  ONBOARDING_STEPS,
  OPTION_CHOICES,
  type OnboardingStep,
  type OptionChoice,
} from "@/constants/onboarding-constants"
import { ModalLayout } from "@/components/onboarding/modal-layout"
import { ProgressIndicator } from "@/components/onboarding/progress-indicator"
import { ChooseMethodStep } from "@/components/onboarding/choose-method-step"
import { GithubFlowStep } from "@/components/onboarding/github-flow-step"
import { RepositoryOptionsStep } from "@/components/onboarding/repository-options-step"
import { AddRepositoryStep } from "@/components/onboarding/add-repository-step"
import { CreateOrganizationStep } from "@/components/onboarding/create-organization-step"
import { CompletionStep } from "@/components/onboarding/completion-step"
import { TRANSITIONS } from "@/constants/ui-constants"

interface OnboardingModalProps {
  isOpen: boolean
  onClose: () => void
}

export function OnboardingModal({ isOpen, onClose }: OnboardingModalProps) {
  // State
  const [step, setStep] = useState<OnboardingStep>(ONBOARDING_STEPS.CHOOSE_METHOD)
  const [choice, setChoice] = useState<OptionChoice>(null)
  const [repoLink, setRepoLink] = useState("")
  const [repoLinkError, setRepoLinkError] = useState("")
  const [orgName, setOrgName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(ONBOARDING_STEPS.CHOOSE_METHOD)
      setChoice(null)
      setRepoLink("")
      setRepoLinkError("")
      setOrgName("")
      setIsSubmitting(false)
      setIsCompleted(false)
    }
  }, [isOpen])

  // Get current step title and subtitle
  const getStepTitle = () => {
    switch (step) {
      case ONBOARDING_STEPS.CHOOSE_METHOD:
        return ONBOARDING_TEXT.TITLES.CHOOSE_METHOD
      case ONBOARDING_STEPS.GITHUB_FLOW:
        return ONBOARDING_TEXT.TITLES.CONNECT_GITHUB
      case ONBOARDING_STEPS.REPOSITORY_OPTIONS:
        return ONBOARDING_TEXT.TITLES.REPOSITORY_OPTIONS
      case ONBOARDING_STEPS.ADD_REPOSITORY:
        return ONBOARDING_TEXT.TITLES.ADD_REPOSITORY
      case ONBOARDING_STEPS.CREATE_ORGANIZATION:
        return isCompleted ? ONBOARDING_TEXT.TITLES.COMPLETION : ONBOARDING_TEXT.TITLES.CREATE_ORGANIZATION
      default:
        return ONBOARDING_TEXT.TITLES.CHOOSE_METHOD
    }
  }

  const getStepSubtitle = () => {
    switch (step) {
      case ONBOARDING_STEPS.CHOOSE_METHOD:
        return "Select how you want to set up your organization"
      case ONBOARDING_STEPS.GITHUB_FLOW:
        return "Connect your GitHub account to get started"
      case ONBOARDING_STEPS.REPOSITORY_OPTIONS:
        return "Choose how to handle repositories"
      case ONBOARDING_STEPS.ADD_REPOSITORY:
        return "Add a GitHub repository to your organization"
      case ONBOARDING_STEPS.CREATE_ORGANIZATION:
        return isCompleted ? "Your organization has been created successfully" : "Set up your organization details"
      default:
        return ""
    }
  }

  // Handlers
  const handleOptionSelect = (selected: "github" | "manual") => {
    setChoice(selected)
    if (selected === OPTION_CHOICES.GITHUB) {
      setStep(ONBOARDING_STEPS.GITHUB_FLOW)
    } else {
      setStep(ONBOARDING_STEPS.REPOSITORY_OPTIONS)
    }
  }

  const handleRepoLinkChange = (value: string) => {
    setRepoLink(value)
    if (repoLinkError) setRepoLinkError("")
  }

  const validateRepoLink = () => {
    if (!repoLink.trim()) {
      setRepoLinkError(ONBOARDING_TEXT.REPOSITORY.ERROR)
      return false
    }
    return true
  }

  const handleBack = () => {
    switch (step) {
      case ONBOARDING_STEPS.GITHUB_FLOW:
      case ONBOARDING_STEPS.REPOSITORY_OPTIONS:
        setStep(ONBOARDING_STEPS.CHOOSE_METHOD)
        break
      case ONBOARDING_STEPS.ADD_REPOSITORY:
        setStep(ONBOARDING_STEPS.REPOSITORY_OPTIONS)
        setRepoLink("")
        setRepoLinkError("")
        break
      case ONBOARDING_STEPS.CREATE_ORGANIZATION:
        if (repoLink) {
          setStep(ONBOARDING_STEPS.ADD_REPOSITORY)
        } else {
          setStep(ONBOARDING_STEPS.REPOSITORY_OPTIONS)
        }
        break
      default:
        break
    }
  }

  const handleNext = () => {
    switch (step) {
      case ONBOARDING_STEPS.GITHUB_FLOW:
        // In a real app, this would redirect to GitHub
        simulateGitHubRedirect()
        break
      case ONBOARDING_STEPS.ADD_REPOSITORY:
        if (validateRepoLink()) {
          setStep(ONBOARDING_STEPS.CREATE_ORGANIZATION)
        }
        break
      default:
        break
    }
  }

  // Simulate GitHub redirect with a loading state
  const simulateGitHubRedirect = () => {
    setIsSubmitting(true)
    // In a real app, this would redirect to GitHub
    setTimeout(() => {
      setIsSubmitting(false)
      // Instead of closing the modal, navigate to the completion step
      setStep(ONBOARDING_STEPS.CREATE_ORGANIZATION)
    }, 1500)
  }

  // Simulate organization creation with a loading state
  const handleCreateOrg = () => {
    setIsSubmitting(true)
    // In a real app, this would create the organization
    setTimeout(() => {
      setIsSubmitting(false)
      setIsCompleted(true)
      // Instead of closing the modal, show completion
    }, 1500)
  }

  // Render content based on current step
  const renderStepContent = () => {
    return (
      <>
        {/* Progress indicator */}
        <ProgressIndicator currentStep={step} choice={choice} />

        {/* Step content */}
        {step === ONBOARDING_STEPS.CHOOSE_METHOD && <ChooseMethodStep choice={choice} onSelect={handleOptionSelect} />}

        {step === ONBOARDING_STEPS.GITHUB_FLOW && <GithubFlowStep onContinue={handleNext} />}

        {step === ONBOARDING_STEPS.REPOSITORY_OPTIONS && (
          <RepositoryOptionsStep
            onAddRepository={() => setStep(ONBOARDING_STEPS.ADD_REPOSITORY)}
            onSkip={() => setStep(ONBOARDING_STEPS.CREATE_ORGANIZATION)}
            onReturn={() => setStep(ONBOARDING_STEPS.CHOOSE_METHOD)}
          />
        )}

        {step === ONBOARDING_STEPS.ADD_REPOSITORY && (
          <AddRepositoryStep
            repoLink={repoLink}
            repoLinkError={repoLinkError}
            onRepoLinkChange={handleRepoLinkChange}
            onBack={handleBack}
            onNext={handleNext}
          />
        )}

        {step === ONBOARDING_STEPS.CREATE_ORGANIZATION && !isCompleted && (
          <CreateOrganizationStep
            orgName={orgName}
            onOrgNameChange={setOrgName}
            onBack={handleBack}
            onCreateOrg={handleCreateOrg}
          />
        )}

        {step === ONBOARDING_STEPS.CREATE_ORGANIZATION && isCompleted && (
          <CompletionStep organizationName={orgName} onClose={onClose} />
        )}
      </>
    )
  }

  // Render footer buttons
  const renderFooter = () => {
    // Only show footer buttons for github-flow step
    if (step === ONBOARDING_STEPS.GITHUB_FLOW) {
      return (
        <div className="flex justify-between">
          <button
            type="button"
            className={`rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 ${TRANSITIONS.HOVER} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
            onClick={handleBack}
            disabled={isSubmitting}
          >
            {ONBOARDING_TEXT.BUTTONS.BACK}
          </button>
          <button
            type="button"
            className={`rounded-lg border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm ${TRANSITIONS.HOVER} focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Redirecting..." : ONBOARDING_TEXT.BUTTONS.NEXT}
          </button>
        </div>
      )
    }

    return null
  }

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      title={getStepTitle()}
      subtitle={getStepSubtitle()}
      footer={renderFooter()}
    >
      {renderStepContent()}
    </ModalLayout>
  )
}
