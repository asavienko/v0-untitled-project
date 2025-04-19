// Application routes
export const ROUTES = {
  HOME: "/",
  APP: "/app",
  SETTINGS: "/settings",
  HELP: "/help",
  LOGOUT: "/logout",
  DOCS: "/docs",

  // Organization routes
  ORGANIZATION: {
    BASE: "/organization",
    DETAIL: (slug: string) => `/organization/${slug}`,
  },

  // Admin routes
  ADMIN: {
    BASE: "/admin",
    USERS: "/admin/users",
    ORGANIZATIONS: "/admin/organizations",
    VAULTS: "/admin/vaults",
    CACHES: "/admin/caches",
    COMPUTES: "/admin/computes",
    CREDITS: "/admin/credits",
  },

  // Vault routes
  VAULTS: "/vaults",

  // API routes
  API: {
    BASE: "/api",
    DOCS: "/api/docs",
  },
}
