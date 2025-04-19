// Form-related constants
export const FORM = {
  // Input types
  INPUT_TYPES: {
    TEXT: "text",
    EMAIL: "email",
    PASSWORD: "password",
    NUMBER: "number",
    CHECKBOX: "checkbox",
    RADIO: "radio",
    FILE: "file",
    DATE: "date",
    DATETIME: "datetime-local",
  },

  // Common input classes
  INPUT_CLASSES: {
    DEFAULT:
      "shadow-sm focus:ring-primary focus:border-primary block w-full text-sm border border-gray-300 rounded-md p-2",
    ERROR:
      "shadow-sm focus:ring-red-500 focus:border-red-500 block w-full text-sm border border-red-300 rounded-md p-2",
    DISABLED:
      "shadow-sm bg-gray-100 text-gray-500 block w-full text-sm border border-gray-300 rounded-md p-2 cursor-not-allowed",
  },

  // Label classes
  LABEL_CLASSES: {
    DEFAULT: "block text-sm font-medium text-gray-700 mb-1",
    REQUIRED: 'block text-sm font-medium text-gray-700 mb-1 after:content-["*"] after:ml-0.5 after:text-red-500',
    OPTIONAL:
      'block text-sm font-medium text-gray-700 mb-1 after:content-["(optional)"] after:ml-1 after:text-gray-400 after:text-xs',
  },

  // Helper text classes
  HELPER_CLASSES: {
    DEFAULT: "text-xs text-gray-500 mt-1",
    ERROR: "text-xs text-red-500 mt-1",
  },

  // Button classes
  BUTTON_CLASSES: {
    PRIMARY: "text-sm px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/80 transition-all duration-300",
    SECONDARY: "text-sm px-4 py-2 rounded-lg border hover:border-primary/50 transition-all duration-300",
    DANGER: "text-sm px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-all duration-300",
  },
}

// Validation patterns
export const VALIDATION = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  GITHUB_REPO: /^https?:\/\/github\.com\/[\w.-]+\/[\w.-]+\/?$/,
  PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
}

// Form error messages
export const FORM_ERRORS = {
  REQUIRED: "This field is required",
  EMAIL: "Please enter a valid email address",
  URL: "Please enter a valid URL",
  GITHUB_REPO: "Please enter a valid GitHub repository URL",
  PASSWORD: "Password must be at least 8 characters and include uppercase, lowercase, and numbers",
  MIN_LENGTH: (length: number) => `Must be at least ${length} characters`,
  MAX_LENGTH: (length: number) => `Cannot exceed ${length} characters`,
}
