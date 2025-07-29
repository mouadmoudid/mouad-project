import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default async function Home() {
  const session = await getServerSession(authOptions)

  // Redirection automatique selon le rôle si l'utilisateur est connecté
  if (session?.user?.role) {
    switch (session.user.role) {
      case "SUPER_ADMIN":
        redirect("/super-admin")
      case "ADMIN":
        redirect("/admin")
      case "CLIENT":
        redirect("/client")
      case "LIVREUR":
        redirect("/livreur")
      default:
        redirect("/client")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">Pressing Pro</CardTitle>
          <CardDescription>Gestion complète de votre blanchisserie</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700 text-sm">Connectez-vous pour accéder à votre espace</p>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <Link href="/auth/signin">
              <Button className="w-full">Se connecter</Button>
            </Link>

            <Link href="/auth/signup">
              <Button variant="outline" className="w-full bg-transparent">
                Créer un compte
              </Button>
            </Link>
          </div>

          <div className="text-xs text-gray-500 text-center">
            <p>Rôles disponibles :</p>
            <p>• Super Admin • Admin Pressing • Client • Livreur</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
