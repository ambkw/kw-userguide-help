import { GuidePage } from "@/components/GuideLinks";

export const guideBackLink = {
  url: "/demarrer",
  text: "← Retour aux guides"
};

export const guidesData: Record<string, GuidePage> = {
  apparence: {
    title: "Guide Apparence",
    description: "Découvrez comment personnaliser l'apparence de votre site et organiser vos pages pour une expérience utilisateur optimale.",
    subtitle: "Sommaire des guides",
    sections: [
      {
        id: "modifier-apparence-site",
        title: "Modifier l'apparence du site",
        url: "/guide/apparence/modifier-apparence-site"
      },
      {
        id: "reorganiser-pages",
        title: "Réorganiser l'ordre des pages",
        url: "/guide/apparence/reorganiser-pages"
      }
    ]
  },
  actualites: {
    title: "Guide Actualités",
    description: "Découvrez comment créer, personnaliser et diffuser vos actualités sur tous vos canaux de communication.",
    subtitle: "Sommaire des guides",
    sections: [
      {
        id: "creer-actualite",
        title: "Créer une actualité",
        url: "/guide/actualites/creer-actualite"
      },
      {
        id: "personnaliser-media",
        title: "Personnaliser une actualité par média",
        url: "/guide/actualites/personnaliser-media"
      },
      {
        id: "synchroniser-reseaux",
        title: "Synchroniser ses réseaux sociaux pour la multi-diffusion",
        url: "/guide/actualites/synchroniser-reseaux"
      },
      {
        id: "synchroniser-facebook",
        title: "Synchroniser sa page Facebook",
        url: "/guide/actualites/synchroniser-facebook"
      },
      {
        id: "synchroniser-instagram",
        title: "Synchroniser son compte Instagram",
        url: "/guide/actualites/synchroniser-instagram"
      },
      {
        id: "publier-une-video",
        title: "Publier une vidéo",
        url: "/guide/actualites/publier-une-video"
      }
    ]
  },
  clients: {
    title: "Guide Clients",
    description: "Gérez efficacement votre base de contacts clients avec Kiween. Importez, exportez, segmentez et personnalisez vos communications.",
    subtitle: "Sommaire des guides",
    sections: [
      {
        id: "import-en-masse",
        title: "Importer en masse sa base de données mails clients",
        url: "/guide/clients/import-en-masse"
      },
      {
        id: "exporter-contacts",
        title: "Exporter sa liste de contacts",
        url: "/guide/clients/exporter-contacts"
      },
      {
        id: "creer-groupe",
        title: "Créer un groupe pour segmenter sa base",
        url: "/guide/clients/creer-groupe"
      },
      {
        id: "personnaliser-newsletter",
        title: "Personnaliser le modèle de mail d'inscription à la newsletter",
        url: "/guide/clients/personnaliser-newsletter"
      }
    ]
  },
  produits: {
    title: "Guide Produits",
    description: "Gérez efficacement votre catalogue produits avec Kiween. Commandes, prix, stock, codes promo et bien plus encore.",
    subtitle: "Sommaire des guides",
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
    ]
  },
  commandes: {
    title: "Guide Commandes",
    description: "Consulter ses commandes en ligne, rechercher, mettre à jour le statut, délivrer pour encaisser, annuler ou rembourser une commande.",
    subtitle: "Sommaire des guides",
    sections: [
      {
        id: "gerer-commandes-en-ligne",
        title: "Gérer ses commandes en ligne",
        url: "/guide/commandes/gerer-ses-commandes"
      },
      {
        id: "impossible-passer-commande",
        title: "Impossible de passer ma commande en ligne",
        url: "/guide/commandes/impossible-de-passer-commande"
      }
    ]
  },
  statistiques: {
    title: "Guide Statistiques",
    description: "Explorez les statistiques de visites de votre site, réseaux sociaux et mailing.",
    subtitle: "Sommaire des guides",
    sections: [
      {
        id: "voir-stats",
        title: "Voir ses statistiques",
        url: "/guide/statistiques/voir-stats"
      }
    ]
  },
  todo: {
    title: "Guide TODO",
    description: "Todo",
    subtitle: "Sommaire des guides",
    sections: []
  },
};