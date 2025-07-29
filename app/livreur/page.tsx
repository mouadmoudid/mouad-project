import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, MapPin, Clock, CheckCircle, Navigation, Phone } from "lucide-react"
import Link from "next/link"

export default async function LivreurDashboard() {
  const session = await getServerSession(authOptions)

  if (!session || !["LIVREUR", "SUPER_ADMIN"].includes(session.user.role)) {
    redirect("/unauthorized")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Truck className="h-8 w-8 text-orange-600" />
              <h1 className="text-2xl font-bold text-gray-900">Espace Livreur</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">En service</span>
              </div>
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Livraisons Aujourd'hui</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">5 terminées, 3 en cours</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gains du Jour</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">€45</div>
              <p className="text-xs text-muted-foreground">+€15 vs hier</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Distance Parcourue</CardTitle>
              <Navigation className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42km</div>
              <p className="text-xs text-muted-foreground">Aujourd'hui</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Note Moyenne</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
              <p className="text-xs text-muted-foreground">⭐⭐⭐⭐⭐</p>
            </CardContent>
          </Card>
        </div>

        {/* Current Deliveries */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>Livraisons en Cours</span>
            </CardTitle>
            <CardDescription>Vos livraisons assignées pour aujourd'hui</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg bg-blue-50">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      En cours
                    </span>
                    <span className="text-sm font-medium">#LIV-001</span>
                  </div>
                  <p className="font-medium">Marie Dubois</p>
                  <p className="text-sm text-gray-600">📍 15 Rue de la Paix, 75001 Paris</p>
                  <p className="text-xs text-gray-500">📞 +33 6 12 34 56 78</p>
                  <p className="text-xs text-gray-500">⏰ Créneau: 14h00 - 16h00</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button size="sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    Navigation
                  </Button>
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <Phone className="h-4 w-4 mr-1" />
                    Appeler
                  </Button>
                  <Button variant="outline" size="sm" className="bg-green-50 text-green-700 border-green-200">
                    Marquer livré
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      Assignée
                    </span>
                    <span className="text-sm font-medium">#LIV-002</span>
                  </div>
                  <p className="font-medium">Jean Martin</p>
                  <p className="text-sm text-gray-600">📍 42 Avenue des Champs, 75008 Paris</p>
                  <p className="text-xs text-gray-500">📞 +33 6 98 76 54 32</p>
                  <p className="text-xs text-gray-500">⏰ Créneau: 16h00 - 18h00</p>
                </div>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="bg-transparent">
                    <MapPin className="h-4 w-4 mr-1" />
                    Voir l'adresse
                  </Button>
                  <Button variant="outline" size="sm" className="bg-blue-50 text-blue-700 border-blue-200">
                    Commencer
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Truck className="h-5 w-5" />
                <span>Mes Tournées</span>
              </CardTitle>
              <CardDescription>Gérer vos tournées de livraison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Tournée du jour
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Optimiser le trajet
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Localisation</span>
              </CardTitle>
              <CardDescription>Gérer votre position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2 bg-green-50 rounded">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-700">Position partagée</span>
                </div>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Mettre à jour
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Historique</span>
              </CardTitle>
              <CardDescription>Vos livraisons passées</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Livraisons du mois
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Rapport détaillé
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5" />
                <span>Performances</span>
              </CardTitle>
              <CardDescription>Vos statistiques de livraison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-center p-2 bg-blue-50 rounded">
                  <p className="text-blue-700 font-semibold">98% de réussite</p>
                  <p className="text-xs text-blue-600">Ce mois-ci</p>
                </div>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Voir détails
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Navigation className="h-5 w-5" />
                <span>Outils</span>
              </CardTitle>
              <CardDescription>Outils de livraison</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Scanner QR Code
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Signaler un problème
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Support</span>
              </CardTitle>
              <CardDescription>Aide et assistance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button className="w-full" size="sm">
                  Contacter le support
                </Button>
                <Button variant="outline" className="w-full bg-transparent" size="sm">
                  Guide livreur
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
