import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token
    const { pathname } = req.nextUrl

    // Vérifier que le token existe
    if (!token) {
      return NextResponse.redirect(new URL("/auth/signin", req.url))
    }

    // Redirection selon le rôle après connexion
    if (pathname === "/dashboard" && token.role) {
      switch (token.role) {
        case "SUPER_ADMIN":
          return NextResponse.redirect(new URL("/super-admin", req.url))
        case "ADMIN":
          return NextResponse.redirect(new URL("/admin", req.url))
        case "CLIENT":
          return NextResponse.redirect(new URL("/client", req.url))
        case "LIVREUR":
          return NextResponse.redirect(new URL("/livreur", req.url))
        default:
          return NextResponse.redirect(new URL("/client", req.url))
      }
    }

    // Protection des routes selon les rôles
    if (pathname.startsWith("/super-admin") && token.role !== "SUPER_ADMIN") {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    if (pathname.startsWith("/admin") && !["SUPER_ADMIN", "ADMIN"].includes(token.role as string)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    if (pathname.startsWith("/livreur") && !["SUPER_ADMIN", "LIVREUR"].includes(token.role as string)) {
      return NextResponse.redirect(new URL("/unauthorized", req.url))
    }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  },
)

export const config = {
  matcher: ["/dashboard/:path*", "/super-admin/:path*", "/admin/:path*", "/client/:path*", "/livreur/:path*"],
}
