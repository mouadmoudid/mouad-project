"use client"

import { useSession as useNextAuthSession } from "next-auth/react"
import type { UserRole } from "@prisma/client"

export function useSession() {
  const { data: session, status } = useNextAuthSession()

  return {
    session: session as {
      user: {
        id: string
        name?: string | null
        email?: string | null
        image?: string | null
        role: UserRole
      }
    } | null,
    status,
    isLoading: status === "loading",
    isAuthenticated: status === "authenticated",
  }
}
