// Layout-related constants
export const LAYOUT = {
  // Header heights
  HEADER: {
    MOBILE: "h-14",
    DESKTOP: "h-16",
  },
  // Sidebar widths
  SIDEBAR: {
    WIDTH: "w-64",
    COLLAPSED: "w-20",
  },
  // Content padding
  CONTENT_PADDING: {
    MOBILE: "p-4",
    DESKTOP: "p-6",
  },
  // Container max widths
  CONTAINER: {
    SM: "max-w-3xl",
    MD: "max-w-4xl",
    LG: "max-w-5xl",
    XL: "max-w-6xl",
    XXL: "max-w-7xl",
  },
  // Grid columns
  GRID: {
    MOBILE: "grid-cols-1",
    TABLET: "sm:grid-cols-2",
    DESKTOP: "lg:grid-cols-3",
    WIDE: "xl:grid-cols-4",
  },
}

// Common layout class combinations
export const LAYOUT_CLASSES = {
  CARD_CONTENT: "p-3 sm:p-4 md:p-5",
  CARD_HEADER: "px-4 py-3 border-b flex items-center justify-between",
  CARD_FOOTER: "px-4 py-3 border-t bg-gray-50",
  SECTION_SPACING: "space-y-4 sm:space-y-6",
  FORM_GROUP: "space-y-2",
}
