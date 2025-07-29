import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Clock, MapPin, Star, Gift, User } from "lucide-react"
import Link from "next/link"

export default async function ClientDashboard() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/auth/signin")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-gray-900">Mon Espace Client</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Bonjour, {session.user.name}</span>
              <Link href="/api/auth/signout">
                <Button variant="outline" size="sm">
                  Déconnexion
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commandes en Cours</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 prêtes demain</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Points Fidélité</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+15 ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Commandes Totales</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">Depuis l'inscription</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Économies</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€45</div>
              <p className="text-xs text-muted-foreground">Grâce aux points</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Nouvelle Commande</span>
              </CardTitle>
              <CardDescription>Passer une nouvelle commande de pressing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Commander maintenant
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Voir les services
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Mes Commandes</span>
              </CardTitle>
              <CardDescription>Suivre l'état de vos commandes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  En cours (3)
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Historique
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Livraisons</span>
              </CardTitle>
              <CardDescription>Gérer vos adresses et livraisons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Suivre ma livraison
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Mes adresses
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Gift className="h-5 w-5" />
                <span>Programme Fidélité</span>
              </CardTitle>
              <CardDescription>Vos points et récompenses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-center p-2 bg-green-50 rounded">
                  <p className="text-green-700 font-semibold">245 points</p>
                  <p className="text-xs text-green-600">55 points pour une récompense</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Utiliser mes points
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>Avis & Évaluations</span>
              </CardTitle>
              <CardDescription>Évaluer vos expériences</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Laisser un avis
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Mes évaluations
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>Mon Profil</span>
              </CardTitle>
              <CardDescription>Gérer vos informations personnelles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Modifier le profil
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Paramètres
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Commandes Récentes</CardTitle>
            <CardDescription>Vos dernières commandes de pressing</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Commande #PR-2024-001</p>
                  <p className="text-sm text-gray-600">Nettoyage costume + chemises</p>
                  <p className="text-xs text-gray-500">Commandé le 15 Jan 2024</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                    En cours
                  </span>
                  <p className="text-sm font-medium mt-1">€25.50</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <p className="font-medium">Commande #PR-2024-002</p>
                  <p className="text-sm text-gray-600">Repassage robes</p>
                  <p className="text-xs text-gray-500">Commandé le 12 Jan 2024</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Prête
                  </span>
                  <p className="text-sm font-medium mt-1">€18.00</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
