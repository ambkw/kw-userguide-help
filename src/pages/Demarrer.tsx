import { useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FileText, Settings, Eye, MessageSquare, Users, Puzzle, Gift, MapPin, BarChart3, ThumbsUp, Calendar, Star, ShoppingCart, Clock, Truck, Package, Database, CreditCard, Building, ExternalLink } from "lucide-react";

const features = [
  // Prévisualisation
  { title: "Apparence", url: "/guide/apparence", icon: Eye, category: "Prévisualisation", keywords: ["design", "style", "thème", "couleur", "visuel", "esthétique"] },
  { title: "Paramètres de page", url: "/guide/parametres-page", icon: Settings, category: "Prévisualisation", keywords: ["configuration", "réglages", "options", "structure", "layout"] },
  { title: "Aperçu site web", url: "/guide/apercu-site", icon: ExternalLink, category: "Prévisualisation", keywords: ["prévisualisation", "preview", "visualisation", "rendu", "test"] },
  { title: "Site Association", url: "/guide/site-association", icon: Building, category: "Prévisualisation", keywords: ["organisation", "association", "entreprise", "structure", "société"] },
  { title: "Page Kiween", url: "/guide/page-kiween", icon: FileText, category: "Prévisualisation", keywords: ["plateforme", "interface", "dashboard", "accueil", "portail"] },
  { title: "Aide & Contact", url: "/guide/aide-contact", icon: MessageSquare, category: "Prévisualisation", keywords: ["support", "assistance", "help", "formulaire", "communication"] },
  
  // Gestion de contenu
  { title: "Informations", url: "/guide/informations", icon: FileText, category: "Gestion de contenu", keywords: ["données", "details", "description", "renseignements", "profil"] },
  { title: "Photos", url: "/guide/photos", icon: FileText, category: "Gestion de contenu", keywords: ["images", "galerie", "visuels", "médias", "upload"] },
  { title: "Visite virtuelle 360° et vidéo", url: "/guide/visite-virtuelle", icon: FileText, category: "Gestion de contenu", keywords: ["360", "immersif", "panorama", "vidéo", "virtuel", "3D"] },
  { title: "Sites partenaires", url: "/guide/sites-partenaires", icon: Users, category: "Gestion de contenu", keywords: ["partenariat", "collaboration", "réseau", "affiliés", "liens"] },
  { title: "Modules externes", url: "/guide/modules-externes", icon: Puzzle, category: "Gestion de contenu", keywords: ["plugins", "extensions", "widgets", "intégrations", "add-ons"] },
  { title: "Widget Kiween", url: "/guide/widget-kiween", icon: Gift, category: "Gestion de contenu", keywords: ["composant", "élément", "bloc", "module", "outil"] },
  { title: "Nouveau site", url: "/guide/nouveau-site", icon: MapPin, category: "Gestion de contenu", keywords: ["création", "nouveau", "ajouter", "établissement", "location"] },
  
  // Communication marketing
  { title: "Plan d'actualités", url: "/guide/plan-actualites", icon: Calendar, category: "Communication marketing", keywords: ["calendrier", "planning", "programme", "agenda", "éditoriel"] },
  { title: "Actualités", url: "/guide/actualites", icon: FileText, category: "Communication marketing", keywords: ["news", "articles", "blog", "publications", "contenu"] },
  { title: "Promotions", url: "/guide/promotions", icon: Star, category: "Communication marketing", keywords: ["offres", "réductions", "remises", "deals", "marketing"] },
  { title: "Événements", url: "/guide/evenements", icon: Calendar, category: "Communication marketing", keywords: ["events", "manifestations", "animations", "activités", "agenda"] },
  { title: "Paramètres d'envoi", url: "/guide/parametres-envoi", icon: Settings, category: "Communication marketing", keywords: ["email", "mailing", "expédition", "configuration", "smtp"] },
  { title: "Réseaux sociaux", url: "/guide/reseaux-sociaux", icon: Users, category: "Communication marketing", keywords: ["facebook", "instagram", "twitter", "linkedin", "social media"] },
  { title: "QR Codes", url: "/guide/qr-codes", icon: FileText, category: "Communication marketing", keywords: ["qrcode", "scan", "mobile", "lien", "code"] },
  { title: "Clients", url: "/guide/clients", icon: Users, category: "Communication marketing", keywords: ["clientèle", "contacts", "base", "prospects", "CRM"] },
  { title: "Messages reçus", url: "/guide/messages-recus", icon: MessageSquare, category: "Communication marketing", keywords: ["courrier", "inbox", "réception", "contact", "formulaire"] },
  
  // Catalogue
  { title: "Commandes", url: "/guide/commandes", icon: ShoppingCart, category: "Catalogue", keywords: ["orders", "achats", "ventes", "transactions", "e-commerce"] },
  { title: "Paramètres des commandes", url: "/guide/parametres-commandes", icon: Settings, category: "Catalogue", keywords: ["configuration", "options", "réglages", "gestion", "workflow"] },
  { title: "Configuration des transporteurs", url: "/guide/configuration-transporteurs", icon: Truck, category: "Catalogue", keywords: ["livraison", "expédition", "transport", "colissimo", "chronopost"] },
  { title: "Produits", url: "/guide/produits", icon: Package, category: "Catalogue", keywords: ["articles", "items", "marchandises", "inventory", "stock"] },
  { title: "Catégories de produit", url: "/guide/categories-produit", icon: Database, category: "Catalogue", keywords: ["classification", "rubriques", "sections", "taxonomie", "organisation"] },
  { title: "Paramètres produit", url: "/guide/parametres-produit", icon: Settings, category: "Catalogue", keywords: ["configuration", "options", "attributs", "variables", "caractéristiques"] },
  { title: "Codes promo", url: "/guide/codes-promo", icon: Star, category: "Catalogue", keywords: ["coupons", "réductions", "remises", "promotions", "discount"] },
  { title: "Mes collections", url: "/guide/mes-collections", icon: Gift, category: "Catalogue", keywords: ["séries", "gammes", "ensembles", "groupes", "sélections"] },
  { title: "Documents", url: "/guide/documents", icon: FileText, category: "Catalogue", keywords: ["fichiers", "PDF", "téléchargements", "documentation", "ressources"] },
  
  // Mes données
  { title: "Statistiques", url: "/guide/statistiques", icon: BarChart3, category: "Mes données", keywords: ["analytics", "métriques", "données", "rapports", "performance"] },
  { title: "Avis", url: "/guide/avis", icon: ThumbsUp, category: "Mes données", keywords: ["reviews", "commentaires", "feedback", "évaluations", "notes"] },
  { title: "Abonnement", url: "/guide/abonnement", icon: CreditCard, category: "Mes données", keywords: ["subscription", "plan", "forfait", "paiement", "billing"] },
  { title: "Contrat", url: "/guide/contrat", icon: FileText, category: "Mes données", keywords: ["accord", "conditions", "termes", "légal", "engagement"] },
  { title: "Factures", url: "/guide/factures", icon: FileText, category: "Mes données", keywords: ["invoices", "facturation", "paiements", "comptabilité", "finances"] },
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
    feature.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    feature.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
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