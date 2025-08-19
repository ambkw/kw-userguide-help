import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";

export default function GestionStock() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/produits/gestion-de-stock/gestion-de-stock-capture-01.png",
    "/kb/produits/gestion-de-stock/gestion-de-stock-capture-02.png",
    "/kb/produits/gestion-de-stock/gestion-de-stock-capture-03.png",
    "/kb/produits/gestion-de-stock/gestion-de-stock-capture-04.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/produits" className="hover:text-kiween-green">
            Guide Produits
          </Link>
          {" > "}
          <span>Gestion de stock</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Gestion de stock
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Gérer une quantité limitée sur un produit disponible.</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment gérer une quantité limitée sur un produit en vente en ligne ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro › <strong>Produits</strong> › Afficher paramètres avancés
          </AlertDescription>
        </Alert>
      </div>

      <div className="prose prose-lg max-w-none text-kiween-text">
        <h2 className="text-2xl font-semibold text-kiween-text mb-4">
          Gérer ses stocks disponibles
        </h2>

        <p className="mb-6">
          Pour activer la gestion d'une quantité limitée sur les produits, aller dans les <strong>Paramètres avancés</strong>, puis dans la section "<strong>Stock</strong>", activer
          "<strong>Gérer le stock</strong>" et "<strong>Bloquer la commande si stock faible</strong>".
        </p>

        <p className="mb-6">
          Puis indiquer la quantité disponible sur les produits souhaités.
        </p>

        <p className="mb-6">
          Depuis la liste des produits, sur chaque ligne, il est possible d'indiquer une quantité limitée pour les commandes en ligne.
        </p>

        <p className="mb-6">
          Le système acceptera l'ajout du produit au panier tant que la quantité disponible n'est pas atteinte.
        </p>

        <p className="mb-6">
          Par exemple, pour un produit disponible en quantité de 10. On indique la valeur 10. À chaque commande un 2nd compteur s'incrémente
          en fonction de la quantité du produit commandé. Et un 3è compteur s'actualise pour indiquer le nombre de produit disponible à la
          commande en ligne.
        </p>

        <p className="mb-6">
          La valeur initiale de la quantité disponible (ici, 10) est décrémentée à chaque fois que la commande change de statut à "délivrée".
          C'est-à-dire que le gestionnaire des commandes indique que la commande a été traitée et remise au client.
        </p>

        <p className="mb-6">
          Pour actualiser la quantité en stock, il est possible d'ajouter ou retirer des unités (+1 ou -1) à la quantité initiale. Ou de remplir la valeur
          souhaitée à l'aide de l'icône de modification (le crayon).
        </p>

        <p className="mb-6">
          Dans le cas où une commande est annulée, la quantité disponible en ligne est actualisée.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
          <p className="text-orange-800">
            <strong>À noter :</strong> bien distinguer la quantité disponible en stock, de la quantité en cours de commande et celle disponible en ligne.
          </p>
        </div>
      </div>

      {/* Carrousel des captures d'écran */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-kiween-text mb-6">
          Guide visuel
        </h3>
        <ImageGallery 
          images={screenshots}
          altPrefix="Capture d'écran - Gestion de stock"
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