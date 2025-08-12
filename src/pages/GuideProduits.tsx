import { Link } from "react-router-dom";

export default function GuideProduits() {
  const sections = [
    {
      id: "gerer-commandes-en-ligne",
      title: "Gérer ses commandes en ligne",
      url: "/guide/produits/gerer-commandes-en-ligne"
    },
    {
      id: "impossible-passer-commande",
      title: "Impossible de passer ma commande en ligne",
      url: "/guide/produits/impossible-passer-commande"
    },
    {
      id: "importer-fiches-produits",
      title: "Importer ses fiches produits en masse",
      url: "/guide/produits/importer-fiches-produits"
    },
    {
      id: "changer-affichage-catalogue",
      title: "Changer l'affichage du catalogue produits",
      url: "/guide/produits/changer-affichage-catalogue"
    },
    {
      id: "gerer-plusieurs-prix",
      title: "Gérer plusieurs prix sur une fiche produit",
      url: "/guide/produits/gerer-plusieurs-prix"
    },
    {
      id: "creer-fiche-abonnement",
      title: "Créer une fiche produit de type Abonnement",
      url: "/guide/produits/creer-fiche-abonnement"
    },
    {
      id: "gerer-ses-codes-promo",
      title: "Gérer ses codes promo",
      url: "/guide/produits/gerer-ses-codes-promo"
    },
    {
      id: "gestion-transporteurs",
      title: "Gestion des transporteurs",
      url: "/guide/produits/gestion-transporteurs"
    },
    {
      id: "gestion-stock",
      title: "Gestion de stock",
      url: "/guide/produits/gestion-stock"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Guide Produits
        </h1>
        <p className="text-lg text-kiween-text/80">
          Gérez efficacement votre catalogue produits avec Kiween. 
          Commandes, prix, stock, codes promo et bien plus encore.
        </p>
      </div>

      {/* Sommaire */}
      <div className="bg-kiween-light-green rounded-lg p-6">
        <h2 className="text-xl font-semibold text-kiween-text mb-6">
          Sommaire des guides
        </h2>
        <nav className="grid gap-4">
          {sections.map((section, index) => (
            <Link
              key={section.id}
              to={section.url}
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 hover:bg-kiween-light-green/50 border border-transparent hover:border-kiween-green/20"
            >
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-kiween-green text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </span>
                <span className="text-kiween-text font-medium hover:text-kiween-green transition-colors">
                  {section.title}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t border-kiween-green/20">
        <Link
          to="/demarrer"
          className="text-kiween-green hover:text-kiween-text transition-colors"
        >
          ← Retour aux guides
        </Link>
      </div>
    </div>
  );
}