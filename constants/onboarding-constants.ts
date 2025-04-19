// Onboarding step identifiers
export type OnboardingStep =
  | "choose-method"
  | "github-flow"
  | "repository-options"
  | "add-repository-link"
  | "create-organization"
  | "completion"

export type OptionChoice = "github" | "manual" | null

// Onboarding step IDs
export const ONBOARDING_STEPS = {
  CHOOSE_METHOD: "choose-method" as const,
  GITHUB_FLOW: "github-flow" as const,
  REPOSITORY_OPTIONS: "repository-options" as const,
  ADD_REPOSITORY: "add-repository-link" as const,
  CREATE_ORGANIZATION: "create-organization" as const,
  COMPLETION: "completion" as const,
}

// Onboarding option choices
export const OPTION_CHOICES = {
  GITHUB: "github" as const,
  MANUAL: "manual" as const,
}

// Onboarding text content
export const ONBOARDING_TEXT = {
  TITLES: {
    CHOOSE_METHOD: "GitHub Integration Options",
    CONNECT_GITHUB: "Connect GitHub",
    REPOSITORY_OPTIONS: "Repository Configuration",
    ADD_REPOSITORY: "Add GitHub Repository",
    CREATE_ORGANIZATION: "Create Organization",
    COMPLETION: "Setup Complete",
  },
  GITHUB_OPTION: {
    TITLE: "Install GitHub App",
    DESCRIPTION: "Seamlessly integrate with GitHub to manage repositories and automate verification workflows.",
  },
  MANUAL_OPTION: {
    TITLE: "Without GitHub Integration",
    DESCRIPTION: "Create an organization manually. You can connect GitHub repositories later if needed.",
  },
  REPOSITORY: {
    DESCRIPTION: "Configure how you want to work with public repositories in your new organization.",
    SKIP: "Skip Repository Setup",
    ADD: "Add Public GitHub Repository",
    LABEL: "Repository URL",
    PLACEHOLDER: "https://github.com/organization/repository",
    ERROR: "Please enter a valid GitHub repository URL",
    RETURN: "Back to Options",
  },
  GITHUB_FLOW: {
    DESCRIPTION:
      "You'll be redirected to GitHub to authorize our application. This secure process allows us to access your selected repositories and organizations.",
    BUTTON: "Continue to GitHub",
    STEPS: [
      "You'll be redirected to GitHub's authorization page",
      "Select which organizations to connect",
      "Select repositories to connect. You can select all or just the ones you wish",
      "After authorization, return back to this page and finish setup",
    ],
    ALERT: "Make sure you're logged into the GitHub account that has access to the repositories you want to connect.",
  },
  ORGANIZATION: {
    LABEL: "Organization Name",
    PLACEHOLDER: "Enter organization name",
    CREATE: "Create Organization",
    HELPER_TEXT: "Choose a descriptive name for your organization. This will help team members identify it easily.",
  },
  BUTTONS: {
    NEXT: "Continue",
    BACK: "Back",
    CANCEL: "Cancel",
    RETURN: "Back",
  },
  BADGES: {
    PRIVATE_REPOS: "✓ Recommended for private repos",
    PUBLIC_REPOS: "✓ Ideal for public repos",
  },
}
