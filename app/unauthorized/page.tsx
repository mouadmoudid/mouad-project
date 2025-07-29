import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle } from "lucide-react"

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-900">Accès Non Autorisé</CardTitle>
          <CardDescription>Vous n'avez pas les permissions nécessaires pour accéder à cette page.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-red-700 text-sm">Veuillez vous connecter avec un compte ayant les bonnes permissions.</p>
          </div>

          <div className="flex flex-col space-y-2">
            <Link href="/">
              <Button className="w-full">Retour à l'accueil</Button>
            </Link>
            <Link href="/api/auth/signout">
              <Button variant="outline" className="w-full bg-transparent">
                Se déconnecter
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
