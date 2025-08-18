import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function GestionTransporteurs() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-01.png",
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-02.png",
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-03.png",
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-04.png",
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-05.png",
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-06.png",
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-07.png",
    "/kb/produits/gestion-des-transporteurs/gestion-des-transporteurs-capture-08.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/produits" className="hover:text-kiween-green">
            Guide Produits
          </Link>
          {" > "}
          <span>Gestion des transporteurs</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Gestion des transporteurs
        </h1>
        
        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment gérer le transport des colis pour les commandes en ligne ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Configurer ses colis de commande produit pour Chronopost/Chronofresh ou </strong>
            <a href="#" className="text-kiween-green">ses transporteurs par zone</a>
          </AlertDescription>
        </Alert>
      </div>

      <div className="prose prose-lg max-w-none text-kiween-text">
        <div className="mb-6">
          <p className="mb-4">
            <strong>Menu :</strong> Espace pro › <strong>Configuration des transporteurs</strong>
          </p>
        </div>

        <p className="mb-6">
          Avec la boutique en ligne, il est possible de recevoir des commandes et d'en assurer la livraison.
          Une liaison directe est disponible avec le transporteur afin de lui réserver les colis à venir récupérer à une date donnée.
        </p>

        <p className="mb-6">
          Liaison transporteur disponible : Chronopost et Chronofresh.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Étape 1</h3>
            <p>Configurer le transporteur et les dimensions des colis</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Étape 2</h3>
            <p>À chaque commande reçue en ligne à livrer, soumettre le ou les colis à réserver en cliquant sur le bouton <strong>Transport</strong>.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Étape 3</h3>
            <p>Télécharger l'étiquette de transport à imprimer et à coller sur le colis préparée.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Étape 4</h3>
            <p>Remettre le colis au transporteur à la date réservée</p>
          </div>
        </div>

        <p className="my-6">
          Une fois que le colis est confirmé comme ayant été remis au destinataire, collecter les fonds en cliquant sur le bouton <strong>Délivrer</strong>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Informations utiles pour la configuration avec un transporteur :</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>identifiant du service du transporteur</li>
            <li>mot de passe du service du transporteur</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p>
            <strong>Définir des transporteurs par zone</strong> et appliquer des frais de livraison différents.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Choisir un libellé à afficher sur le site internet, lors de la commande en ligne pour le visiteur ;</li>
            <li>Personnaliser ses frais de livraison.</li>
          </ul>
        </div>
      </div>

      {/* Carrousel des captures d'écran */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-kiween-text mb-6">
          Guide visuel
        </h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <img
                    src={screenshot}
                    alt={`Capture d'écran ${index + 1} - Gestion des transporteurs`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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