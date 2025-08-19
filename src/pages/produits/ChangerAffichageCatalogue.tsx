import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function ChangerAffichageCatalogue() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/produits/changer-affichage-du-catalogue-produits/changer-affichage-du-catalogue-produits-capture-01.png",
    "/kb/produits/changer-affichage-du-catalogue-produits/changer-affichage-du-catalogue-produits-capture-02.png",
    "/kb/produits/changer-affichage-du-catalogue-produits/changer-affichage-du-catalogue-produits-capture-03.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/produits" className="hover:text-kiween-green">
            Guide Produits
          </Link>
          {" > "}
          <span>Changer l'affichage du catalogue produits</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Changer l'affichage du catalogue produits
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Mode d'affichage de la e-boutique et page d'accueil des produits</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment changer l'affichage du catalogue produits ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro › <strong>Produits</strong> › bouton <strong>Afficher les paramètres avancés</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="prose prose-lg max-w-none text-kiween-text">
        <h2 className="text-2xl font-semibold text-kiween-text mb-4">
          Gérer les différents modes d'affichage de la page des produits
        </h2>

        <p className="mb-6">
          Il est possible de changer le mode d'affichage de la page des produits. Par ex. avec beaucoup de produits, on peut créer des vignettes
          de collections personnalisées, ou avec peu de produits préférer un affichage sans barre de recherche. Voici la description de chaque
          options, ci-après.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Désactiver le panier</h3>
            <p>
              Permet de ne plus afficher le bouton "Ajouter au panier" à l'ensemble du catalogue produits. Cela évite de mettre
              à jour chaque produit. Le catalogue produits sert alors de vitrine montrant les produits disponibles, mais il n'est pas possible de les pré-
              commander en ligne depuis le site internet, dans la e-boutique. Disposer d'un site vitrine de produits ou services contribue au
              référencement et augmente le trafic sur le site internet, même sans commande en ligne.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Masquer la recherche</h3>
            <p>
              Permet de cacher la barre de recherche et le menu de navigation latéral. Les vignettes de photos de
              produits sont alors affichées plus grandes. Cet affichage convient lorsque l'on a peu de produit à afficher sur le site et que l'on
              souhaite mettre en avant les photos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Afficher les catégories en vignette</h3>
            <p>
              Permet de montrer une page d'accueil du catalogue produits avec des vignettes
              génériques organisées selon le libellé de la catégorie du système positionnée sur les produits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Afficher les collections en vignette</h3>
            <p>
              Permet de montrer les vignettes de collections à la place des vignettes de catégories
              génériques. Ainsi, on peut choisir son propre libellé de collection et positionner une image pour chaque collection (cf. gestion
              des collections de produits).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Afficher la navigation par catégorie</h3>
            <p>
              Permet d'afficher dans le menu latéral l'arborescence des catégories positionnées sur les
              produits.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Afficher la navigation par collection</h3>
            <p>
              Permet d'afficher les libellés de collection dans le menu latéral. On affiche généralement
              soit la navigation par catégorie, soit la navigation par collection, mais les deux peuvent être affichées.
            </p>
          </div>
        </div>

        <p className="mt-6">
          Lorsque des collections et des catégories sont positionnées sur les produits, on affiche généralement : les vignettes de collection et la
          navigation par catégorie.
        </p>
      </div>

      {/* Carrousel des captures d'écran */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-kiween-text mb-6">
          Guide visuel
        </h3>
        <ImageGallery 
          images={screenshots}
          altPrefix="Capture d'écran - Changer l'affichage du catalogue produits"
        />
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t border-kiween-green/20 flex justify-between items-center">
        <Link
          to="/guide/produits"
          className="text-kiween-green hover:text-kiween-text transition-colors"
        >
          ← Retour au Guide Produits
        </Link>
        <Button
          onClick={scrollToTop}
          variant="outline"
          size="sm"
          className="text-kiween-green border-kiween-green hover:bg-kiween-green hover:text-white"
        >
          <ArrowUp className="h-4 w-4 mr-2" />
          Haut de page
        </Button>
      </div>
    </div>
  );
}