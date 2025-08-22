export interface GuideSection {
  id: string;
  title: string;
  url: string;
}

export interface GuidePageData {
  title: string;
  description: string;
  sections: GuideSection[];
  backLink: {
    url: string;
    text: string;
  };
}

export const guidesData: Record<string, GuidePageData> = {
  produits: {
    title: "Guide Produits",
    description: "Gérez efficacement votre catalogue produits avec Kiween. Commandes, prix, stock, codes promo et bien plus encore.",
    sections: [
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
    ],
    backLink: {
      url: "/demarrer",
      text: "← Retour aux guides"
    }
  }
};