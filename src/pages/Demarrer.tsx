import { useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FileText, Settings, Eye, MessageSquare, Users, Puzzle, Gift, MapPin, BarChart3, ThumbsUp, Calendar, Star, ShoppingCart, Clock, Truck, Package, Database, CreditCard, Building, ExternalLink } from "lucide-react";

const features = [
  // Prévisualisation
  { title: "Apparence", url: "/guide/apparence", icon: Eye, category: "Prévisualisation" },
  { title: "Paramètres de page", url: "/guide/parametres-page", icon: Settings, category: "Prévisualisation" },
  { title: "Aperçu site web", url: "/guide/apercu-site", icon: ExternalLink, category: "Prévisualisation" },
  { title: "Site Association", url: "/guide/site-association", icon: Building, category: "Prévisualisation" },
  { title: "Page Kiween", url: "/guide/page-kiween", icon: FileText, category: "Prévisualisation" },
  { title: "Aide & Contact", url: "/guide/aide-contact", icon: MessageSquare, category: "Prévisualisation" },
  
  // Gestion de contenu
  { title: "Informations", url: "/guide/informations", icon: FileText, category: "Gestion de contenu" },
  { title: "Photos", url: "/guide/photos", icon: FileText, category: "Gestion de contenu" },
  { title: "Visite virtuelle 360° et vidéo", url: "/guide/visite-virtuelle", icon: FileText, category: "Gestion de contenu" },
  { title: "Sites partenaires", url: "/guide/sites-partenaires", icon: Users, category: "Gestion de contenu" },
  { title: "Modules externes", url: "/guide/modules-externes", icon: Puzzle, category: "Gestion de contenu" },
  { title: "Widget Kiween", url: "/guide/widget-kiween", icon: Gift, category: "Gestion de contenu" },
  { title: "Nouveau site", url: "/guide/nouveau-site", icon: MapPin, category: "Gestion de contenu" },
  
  // Communication marketing
  { title: "Plan d'actualités", url: "/guide/plan-actualites", icon: Calendar, category: "Communication marketing" },
  { title: "Actualités", url: "/guide/actualites", icon: FileText, category: "Communication marketing" },
  { title: "Promotions", url: "/guide/promotions", icon: Star, category: "Communication marketing" },
  { title: "Événements", url: "/guide/evenements", icon: Calendar, category: "Communication marketing" },
  { title: "Paramètres d'envoi", url: "/guide/parametres-envoi", icon: Settings, category: "Communication marketing" },
  { title: "Réseaux sociaux", url: "/guide/reseaux-sociaux", icon: Users, category: "Communication marketing" },
  { title: "QR Codes", url: "/guide/qr-codes", icon: FileText, category: "Communication marketing" },
  { title: "Clients", url: "/guide/clients", icon: Users, category: "Communication marketing" },
  { title: "Messages reçus", url: "/guide/messages-recus", icon: MessageSquare, category: "Communication marketing" },
  
  // Catalogue
  { title: "Commandes", url: "/guide/commandes", icon: ShoppingCart, category: "Catalogue" },
  { title: "Paramètres des commandes", url: "/guide/parametres-commandes", icon: Settings, category: "Catalogue" },
  { title: "Configuration des transporteurs", url: "/guide/configuration-transporteurs", icon: Truck, category: "Catalogue" },
  { title: "Produits", url: "/guide/produits", icon: Package, category: "Catalogue" },
  { title: "Catégories de produit", url: "/guide/categories-produit", icon: Database, category: "Catalogue" },
  { title: "Paramètres produit", url: "/guide/parametres-produit", icon: Settings, category: "Catalogue" },
  { title: "Codes promo", url: "/guide/codes-promo", icon: Star, category: "Catalogue" },
  { title: "Mes collections", url: "/guide/mes-collections", icon: Gift, category: "Catalogue" },
  { title: "Documents", url: "/guide/documents", icon: FileText, category: "Catalogue" },
  
  // Mes données
  { title: "Statistiques", url: "/guide/statistiques", icon: BarChart3, category: "Mes données" },
  { title: "Avis", url: "/guide/avis", icon: ThumbsUp, category: "Mes données" },
  { title: "Abonnement", url: "/guide/abonnement", icon: CreditCard, category: "Mes données" },
  { title: "Contrat", url: "/guide/contrat", icon: FileText, category: "Mes données" },
  { title: "Factures", url: "/guide/factures", icon: FileText, category: "Mes données" },
];

export default function Demarrer() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [
    "Prévisualisation",
    "Gestion de contenu", 
    "Communication marketing",
    "Catalogue",
    "Mes données"
  ];

  const filteredFeatures = features.filter(feature =>
    feature.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Prévisualisation": return "bg-yellow-50 border-yellow-200";
      case "Gestion de contenu": return "bg-green-50 border-green-200";
      case "Communication marketing": return "bg-orange-50 border-orange-200";
      case "Catalogue": return "bg-purple-50 border-purple-200";
      case "Mes données": return "bg-red-50 border-red-200";
      default: return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-kiween-text mb-4">
              Guides d'utilisation Kiween
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explorez toutes les fonctionnalités de Kiween. Cliquez sur une icône pour accéder au guide correspondant.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="mb-8">
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Rechercher un guide..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {categories.map((category) => {
            const categoryFeatures = filteredFeatures.filter((feature) => feature.category === category);
            
            // Ne pas afficher la catégorie si aucune fonctionnalité ne correspond à la recherche
            if (categoryFeatures.length === 0) return null;
            
            return (
              <div key={category} className={`mb-12 p-6 rounded-xl border-2 ${getCategoryColor(category)}`}>
                <h2 className="text-2xl font-bold text-kiween-text mb-6 text-center">
                  {category}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {categoryFeatures.map((feature) => (
                    <FeatureCard
                      key={feature.url}
                      title={feature.title}
                      url={feature.url}
                      icon={feature.icon}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}