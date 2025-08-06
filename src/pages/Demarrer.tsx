import { useState } from "react";
import { FeatureCard } from "@/components/FeatureCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { FileText, Settings, Eye, MessageSquare, Users, Puzzle, Gift, MapPin, BarChart3, ThumbsUp, Calendar, Star, ShoppingCart, Clock, Truck, Package, Database, CreditCard, Building, ExternalLink } from "lucide-react";

const features = [
  // Prévisualisation
  { title: "Apparence", url: "/guide/apparence", icon: Eye, category: "Prévisualisation", keywords: ["site", "personnalisation", "design", "style", "thème", "couleur", "visuel", "esthétique"] },
  { title: "Paramètres de page", url: "/guide/parametres-page", icon: Settings, category: "Prévisualisation", keywords: ["configuration", "réglages", "options", "structure", "layout", "ordre", "menu", "site"] },
  { title: "Aperçu site web", url: "/guide/apercu-site", icon: ExternalLink, category: "Prévisualisation", keywords: ["prévisualisation", "preview", "visualisation", "rendu", "test", "page", "ajouter", "design", "mise en page", "structure"] },
  { title: "Site Association", url: "/guide/site-association", icon: Building, category: "Prévisualisation", keywords: ["organisation", "association", "entreprise", "structure", "société"] },
  { title: "Page Kiween", url: "/guide/page-kiween", icon: FileText, category: "Prévisualisation", keywords: ["plateforme", "interface", "dashboard", "accueil", "portail"] },
  { title: "Aide & Contact", url: "/guide/aide-contact", icon: MessageSquare, category: "Prévisualisation", keywords: ["support", "assistance", "help", "formulaire", "communication", "vidéo", "docs", "documentation"] },
  
  // Gestion de contenu
  { title: "Informations", url: "/guide/informations", icon: FileText, category: "Gestion de contenu", keywords: ["textes", "rubriques", "données", "details", "description", "renseignements", "profil", "infos", "rédaction", "export"] },
  { title: "Photos", url: "/guide/photos", icon: FileText, category: "Gestion de contenu", keywords: ["images", "galerie", "visuels", "médias", "upload", "album", "vidéo"] },
  { title: "Visite virtuelle 360° et vidéo", url: "/guide/visite-virtuelle", icon: FileText, category: "Gestion de contenu", keywords: ["360", "immersif", "panorama", "vidéo", "virtuel", "3D", "photo"] },
  { title: "Sites partenaires", url: "/guide/sites-partenaires", icon: Users, category: "Gestion de contenu", keywords: ["références", "partenariat", "collaboration", "réseau", "affiliés", "liens"] },
  { title: "Modules externes", url: "/guide/modules-externes", icon: Puzzle, category: "Gestion de contenu", keywords: ["plugins", "extensions", "widgets", "intégrations", "add-ons", "iframe"] },
  { title: "Widget Kiween", url: "/guide/widget-kiween", icon: Gift, category: "Gestion de contenu", keywords: ["composant", "élément", "bloc", "module", "outil", "iframe"] },
  { title: "Nouveau site", url: "/guide/nouveau-site", icon: MapPin, category: "Gestion de contenu", keywords: ["création", "nouveau", "ajouter", "établissement", "location"] },
  
  // Communication marketing
  { title: "Plan d'actualités", url: "/guide/plan-actualites", icon: Calendar, category: "Communication marketing", keywords: ["planning", "programme", "agenda", "publications", "annonces", "calendrier", "éditorial", "rédaction", "export"] },
  { title: "Actualités", url: "/guide/actualites", icon: FileText, category: "Communication marketing", keywords: ["news", "articles", "blog", "marketing", "publications", "annonces", "contenu", "calendrier", "éditorial", "rédaction", "export"] },
  { title: "Promotions", url: "/guide/promotions", icon: Star, category: "Communication marketing", keywords: ["offres", "réductions", "remises", "deals", "marketing", "publications", "annonces", "export"] },
  { title: "Événements", url: "/guide/evenements", icon: Calendar, category: "Communication marketing", keywords: ["events", "manifestations", "animations", "activités", "agenda", "marketing", "publications", "annonces"] },
  { title: "Paramètres d'envoi", url: "/guide/parametres-envoi", icon: Settings, category: "Communication marketing", keywords: ["email", "mailing", "expédition", "configuration", "smtp", "marketing", "mails", "groupe", "spam"] },
  { title: "Réseaux sociaux", url: "/guide/reseaux-sociaux", icon: Users, category: "Communication marketing", keywords: ["facebook", "instagram", "twitter", "linkedin", "google", "gmb", "place id", "placeid", "social media", "urls"] },
  { title: "QR Codes", url: "/guide/qr-codes", icon: FileText, category: "Communication marketing", keywords: ["qrcode", "scan", "mobile", "lien", "code", "marketing"] },
  { title: "Clients", url: "/guide/clients", icon: Users, category: "Communication marketing", keywords: ["clientèle", "contacts", "base", "prospects", "CRM", "mails", "mailing", "données", "import", "masse", "export"] },
  { title: "Messages reçus", url: "/guide/messages-recus", icon: MessageSquare, category: "Communication marketing", keywords: ["courrier", "inbox", "réception", "contact", "formulaire"] },
  
  // Catalogue
  { title: "Commandes", url: "/guide/commandes", icon: ShoppingCart, category: "Catalogue", keywords: ["orders", "achats", "ventes", "transactions", "e-commerce", "eboutique", "boutique", "produits", "articles", "export"] },
  { title: "Paramètres des commandes", url: "/guide/parametres-commandes", icon: Settings, category: "Catalogue", keywords: ["configuration", "options", "réglages", "gestion", "workflow"] },
  { title: "Configuration des transporteurs", url: "/guide/configuration-transporteurs", icon: Truck, category: "Catalogue", keywords: ["livraison", "expédition", "transport", "colissimo", "chronopost"] },
  { title: "Produits", url: "/guide/produits", icon: Package, category: "Catalogue", keywords: ["articles", "services", "prestations", "items", "marchandises", "inventaire", "stock", "catalogue", "export"] },
  { title: "Catégories de produit", url: "/guide/categories-produit", icon: Database, category: "Catalogue", keywords: ["classification", "rubriques", "sections", "taxonomie", "organisation", "export"] },
  { title: "Paramètres produit", url: "/guide/parametres-produit", icon: Settings, category: "Catalogue", keywords: ["configuration", "options", "attributs", "variables", "caractéristiques"] },
  { title: "Codes promo", url: "/guide/codes-promo", icon: Star, category: "Catalogue", keywords: ["coupons", "réductions", "remises", "promotions", "discount"] },
  { title: "Mes collections", url: "/guide/mes-collections", icon: Gift, category: "Catalogue", keywords: ["séries", "gammes", "ensembles", "groupes", "sélections"] },
  { title: "Documents", url: "/guide/documents", icon: FileText, category: "Catalogue", keywords: ["fichiers", "PDF", "téléchargements", "documentation", "ressources"] },
  
  // Mes données
  { title: "Statistiques", url: "/guide/statistiques", icon: BarChart3, category: "Mes données", keywords: ["analytics", "métriques", "données", "rapports", "performance", "export"] },
  { title: "Avis", url: "/guide/avis", icon: ThumbsUp, category: "Mes données", keywords: ["réponses", "commentaires", "feedback", "évaluations", "notes"] },
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
      case "Prévisualisation": return "bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-200/60";
      case "Gestion de contenu": return "bg-gradient-to-br from-emerald-50 to-green-50 border-emerald-200/60";
      case "Communication marketing": return "bg-gradient-to-br from-orange-50 to-red-50 border-orange-200/60";
      case "Catalogue": return "bg-gradient-to-br from-purple-50 to-violet-50 border-purple-200/60";
      case "Mes données": return "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/60";
      default: return "bg-gradient-to-br from-muted to-muted/50 border-border/60";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Prévisualisation": return Eye;
      case "Gestion de contenu": return FileText;
      case "Communication marketing": return MessageSquare;
      case "Catalogue": return Package;
      case "Mes données": return BarChart3;
      default: return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-button shadow-elegant mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
              Guides d'utilisation <span className="bg-gradient-button bg-clip-text text-transparent">Kiween</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explorez toutes les fonctionnalités de Kiween avec nos guides détaillés. 
              Trouvez rapidement ce que vous cherchez grâce à notre recherche intelligente.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="mb-16">
            <div className="max-w-xl mx-auto relative">
              <div className="absolute inset-0 bg-gradient-button rounded-2xl blur opacity-20"></div>
              <div className="relative bg-card rounded-2xl border border-border/50 shadow-card p-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Rechercher un guide ou une fonctionnalité..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-4 bg-transparent border-0 text-lg placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                </div>
              </div>
            </div>
          </div>

          {categories.map((category) => {
            const categoryFeatures = filteredFeatures.filter((feature) => feature.category === category);
            
            // Ne pas afficher la catégorie si aucune fonctionnalité ne correspond à la recherche
            if (categoryFeatures.length === 0) return null;
            
            const CategoryIcon = getCategoryIcon(category);
            
            return (
              <div key={category} className={`mb-16 p-8 rounded-3xl border-2 backdrop-blur-sm ${getCategoryColor(category)}`}>
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center space-x-4">
                    <h2 className="text-3xl font-bold text-foreground">
                      {category}
                    </h2>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
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