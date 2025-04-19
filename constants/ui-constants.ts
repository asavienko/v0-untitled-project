// Sizing constants
export const SIZES = {
  // Icon sizes
  ICON: {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 20,
    XXL: 24,
    XXXL: 32,
  },
  // Avatar sizes
  AVATAR: {
    SM: 8,
    MD: 10,
    LG: 12,
  },
  // Spacing
  SPACING: {
    XS: 1,
    SM: 2,
    MD: 3,
    LG: 4,
    XL: 5,
    XXL: 6,
    XXXL: 8,
  },
  // Border radius
  BORDER_RADIUS: {
    SM: "rounded-md",
    DEFAULT: "rounded-lg",
    LG: "rounded-xl",
    FULL: "rounded-full",
  },
  // Animation durations (ms)
  ANIMATION: {
    FAST: 200,
    DEFAULT: 300,
    SLOW: 500,
  },
  // Z-index values
  Z_INDEX: {
    BASE: 10,
    DROPDOWN: 20,
    STICKY: 30,
    FIXED: 40,
    MODAL: 50,
  },
}

// Breakpoints (matching Tailwind defaults)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
}

// Common transition classes
export const TRANSITIONS = {
  DEFAULT: "transition-all duration-300",
  FAST: "transition-all duration-200",
  SLOW: "transition-all duration-500",
  HOVER: "hover:shadow-md hover:border-primary/50 transition-all duration-300",
}

// Common animation classes
export const ANIMATIONS = {
  PULSE: "animate-pulse",
  PULSE_SUBTLE: "animate-pulse-subtle",
  FLOAT: "animate-float",
  BOUNCE: "animate-soft-bounce",
  SLIDE_UP: "animate-slide-up",
}
