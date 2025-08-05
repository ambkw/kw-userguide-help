import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu, FileText, Settings, Eye, MessageSquare, Users, Puzzle, Gift, MapPin, BarChart3, ThumbsUp, Calendar, Star, ShoppingCart, Clock, Truck, Package, Database, CreditCard, Building, ExternalLink } from "lucide-react";

const navigationItems = [
  {
    category: "Prévisualisation",
    items: [
      { title: "Apparence", url: "/guide/apparence", icon: Eye },
      { title: "Paramètres de page", url: "/guide/parametres-page", icon: Settings },
      { title: "Aperçu site web", url: "/guide/apercu-site", icon: ExternalLink },
      { title: "Site Association", url: "/guide/site-association", icon: Building },
      { title: "Page Kiween", url: "/guide/page-kiween", icon: FileText },
      { title: "Aide & Contact", url: "/guide/aide-contact", icon: MessageSquare },
    ]
  },
  {
    category: "Gestion de contenu",
    items: [
      { title: "Informations", url: "/guide/informations", icon: FileText },
      { title: "Photos", url: "/guide/photos", icon: FileText },
      { title: "Visite virtuelle 360° et vidéo", url: "/guide/visite-virtuelle", icon: FileText },
      { title: "Sites partenaires", url: "/guide/sites-partenaires", icon: Users },
      { title: "Modules externes", url: "/guide/modules-externes", icon: Puzzle },
      { title: "Widget Kiween", url: "/guide/widget-kiween", icon: Gift },
      { title: "Nouveau site", url: "/guide/nouveau-site", icon: MapPin },
    ]
  },
  {
    category: "Communication marketing",
    items: [
      { title: "Plan d'actualités", url: "/guide/plan-actualites", icon: Calendar },
      { title: "Actualités", url: "/guide/actualites", icon: FileText },
      { title: "Promotions", url: "/guide/promotions", icon: Star },
      { title: "Événements", url: "/guide/evenements", icon: Calendar },
      { title: "Paramètres d'envoi", url: "/guide/parametres-envoi", icon: Settings },
      { title: "Réseaux sociaux", url: "/guide/reseaux-sociaux", icon: Users },
      { title: "QR Codes", url: "/guide/qr-codes", icon: FileText },
      { title: "Clients", url: "/guide/clients", icon: Users },
      { title: "Messages reçus", url: "/guide/messages-recus", icon: MessageSquare },
    ]
  },
  {
    category: "Catalogue",
    items: [
      { title: "Commandes", url: "/guide/commandes", icon: ShoppingCart },
      { title: "Paramètres des commandes", url: "/guide/parametres-commandes", icon: Settings },
      { title: "Configuration des transporteurs", url: "/guide/configuration-transporteurs", icon: Truck },
      { title: "Produits", url: "/guide/produits", icon: Package },
      { title: "Catégories de produit", url: "/guide/categories-produit", icon: Database },
      { title: "Paramètres produit", url: "/guide/parametres-produit", icon: Settings },
      { title: "Codes promo", url: "/guide/codes-promo", icon: Star },
      { title: "Mes collections", url: "/guide/mes-collections", icon: Gift },
      { title: "Documents", url: "/guide/documents", icon: FileText },
    ]
  },
  {
    category: "Mes données",
    items: [
      { title: "Statistiques", url: "/guide/statistiques", icon: BarChart3 },
      { title: "Avis", url: "/guide/avis", icon: ThumbsUp },
      { title: "Abonnement", url: "/guide/abonnement", icon: CreditCard },
      { title: "Contrat", url: "/guide/contrat", icon: FileText },
      { title: "Factures", url: "/guide/factures", icon: FileText },
    ]
  }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <FileText className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-xl text-kiween-text">Kiween Docs</span>
        </Link>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="kiween-outline" size="sm">
              <Menu className="h-4 w-4" />
              Guides
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-96 overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Guides Kiween</SheetTitle>
              <SheetDescription>
                Sélectionnez un guide pour en savoir plus sur les fonctionnalités de Kiween.
              </SheetDescription>
            </SheetHeader>
            
            <div className="mt-6 space-y-6">
              {navigationItems.map((category) => (
                <div key={category.category}>
                  <h3 className="font-semibold text-kiween-green mb-3 text-sm uppercase tracking-wide">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {category.items.map((item) => (
                      <Link
                        key={item.url}
                        to={item.url}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 p-3 rounded-lg transition-colors hover:bg-kiween-light-green ${
                          location.pathname === item.url ? 'bg-kiween-light-green border border-kiween-green/20' : ''
                        }`}
                      >
                        <item.icon className="h-5 w-5 text-kiween-green" />
                        <span className="text-sm text-kiween-text">{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}