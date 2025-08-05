import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Calendar, BarChart3, ShoppingCart, Users, Globe } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-kiween-text mb-6">
            Documentation <span className="text-kiween-green">Kiween</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Découvrez comment utiliser toutes les fonctionnalités de Kiween, 
            votre application professionnelle dédiée à la gestion de la communication digitale.
          </p>
          <Link to="/demarrer">
            <Button variant="kiween" size="lg" className="text-lg px-8 py-6">
              Démarrer
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-kiween-text mb-12">
            Qu'est-ce que Kiween ?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Globe className="h-12 w-12 text-kiween-green mb-4" />
              <h3 className="text-xl font-semibold text-kiween-text mb-3">Site Internet</h3>
              <p className="text-gray-600">Gérez votre présence en ligne avec un site web professionnel et optimisé.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Calendar className="h-12 w-12 text-kiween-green mb-4" />
              <h3 className="text-xl font-semibold text-kiween-text mb-3">Calendrier Éditorial</h3>
              <p className="text-gray-600">Planifiez et organisez votre contenu sur les réseaux sociaux.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Users className="h-12 w-12 text-kiween-green mb-4" />
              <h3 className="text-xl font-semibold text-kiween-text mb-3">Base de Données Clients</h3>
              <p className="text-gray-600">Centralisez et gérez vos contacts et communications clients.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <ShoppingCart className="h-12 w-12 text-kiween-green mb-4" />
              <h3 className="text-xl font-semibold text-kiween-text mb-3">Boutique en Ligne</h3>
              <p className="text-gray-600">Vendez vos produits avec une solution e-commerce intégrée.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <BarChart3 className="h-12 w-12 text-kiween-green mb-4" />
              <h3 className="text-xl font-semibold text-kiween-text mb-3">Statistiques Centralisées</h3>
              <p className="text-gray-600">Visualisez votre performance : trafic web, réseaux sociaux, avis Google.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <Smartphone className="h-12 w-12 text-kiween-green mb-4" />
              <h3 className="text-xl font-semibold text-kiween-text mb-3">Multi-plateformes</h3>
              <p className="text-gray-600">Accédez à toutes vos données depuis n'importe quel appareil.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modes de Fonctionnement */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-kiween-text mb-12">
              Modes de Fonctionnement
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-kiween-light-green rounded-xl">
                <div className="w-8 h-8 bg-kiween-green text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-kiween-text mb-2">Mode Classique</h3>
                  <p className="text-gray-600">
                    Pour les entreprises qui souhaitent gérer et centraliser leurs contenus et leur communication web de manière autonome.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl">
                <div className="w-8 h-8 bg-kiween-orange text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-kiween-text mb-2">Mode Gestionnaire</h3>
                  <p className="text-gray-600">
                    Pour les agences web qui travaillent pour le compte de plusieurs clients. Inclut des fonctionnalités de validation de contenus et de suivi pour faciliter les échanges avec les clients finaux.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-gray-50 rounded-xl">
                <div className="w-8 h-8 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-kiween-text mb-2">Mode Multi Points de Vente</h3>
                  <p className="text-gray-600">
                    Pour les groupes ayant plusieurs points de vente à gérer. Permet d'homogénéiser la communication et de suggérer des contenus à l'ensemble des points de vente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-kiween-text mb-6">
            Prêt à explorer Kiween ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Consultez nos guides détaillés pour maîtriser toutes les fonctionnalités de l'application.
          </p>
          <Link to="/demarrer">
            <Button variant="kiween-orange" size="lg" className="text-lg px-8 py-6">
              Accéder aux Guides
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}