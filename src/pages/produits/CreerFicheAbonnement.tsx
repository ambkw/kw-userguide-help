import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function CreerFicheAbonnement() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/produits/creer-une-fiche-produit-de-type-abonnement/creer-une-fiche-produit-de-type-abonnement-capture-01.png",
    "/kb/produits/creer-une-fiche-produit-de-type-abonnement/creer-une-fiche-produit-de-type-abonnement-capture-02.png",
    "/kb/produits/creer-une-fiche-produit-de-type-abonnement/creer-une-fiche-produit-de-type-abonnement-capture-03.png",
    "/kb/produits/creer-une-fiche-produit-de-type-abonnement/creer-une-fiche-produit-de-type-abonnement-capture-04.png",
    "/kb/produits/creer-une-fiche-produit-de-type-abonnement/creer-une-fiche-produit-de-type-abonnement-capture-05.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/produits" className="hover:text-kiween-green">
            Guide Produits
          </Link>
          {" > "}
          <span>Créer une fiche produit de type Abonnement</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Créer une fiche produit de type Abonnement
        </h1>
        
        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment créer une fiche produit payable mensuellement (abonnement) ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Fiche produit de type Abonnement.</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="prose prose-lg max-w-none text-kiween-text">
        <div className="mb-6">
          <p className="mb-4">
            <strong>Menu :</strong> Espace pro › <strong>Produits</strong> › Ajouter un produit
          </p>
        </div>

        <p className="mb-6">
          Proposer des produits ou services par abonnement se démocratise. C'est un moyen efficace pour fidéliser ses clients et leur proposer
          une offre adaptée à leurs besoins. Ce système est aussi très apprécié des consommateurs pour offrir un cadeau "pour prolonger le plaisir de
          faire plaisir" à un proche.
        </p>

        <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
          <p className="text-orange-800">
            <strong>Pré-requis :</strong> le paiement par abonnement est disponible avec l'option de <strong>paiement en ligne</strong> (non disponible en pré-commande ou
            click&collect).
          </p>
        </div>

        <p className="mb-6">
          Au niveau du prix, cocher l'option <strong>Paiement récurrent</strong>, puis renseigner le <strong>montant par échéance</strong> et le <strong>nombre de paiements</strong> (par ex. 3,
          6 ou 12 pour 3, 6 ou 12 échéances mensuelles). Les échéances sont mensuelles.
        </p>

        <p className="mb-6">
          Il est possible de préciser un autre montant pour la 1ère échéance, via le bouton <strong>Modifier le 1er paiement</strong>.
        </p>

        <div className="space-y-4 mb-6">
          <p>
            <strong>À chaque date d'échéance</strong>, le consommateur sera débité <strong>du</strong> montant prévu.
          </p>
          
          <p>
            <strong>En cas de problème</strong> lors de la tentative de débit, par ex. la carte a expiré ou n'est plus valide, un email est envoyé au consommateur
            <strong>pour mettre à jour son moyen de paiement</strong>.
          </p>
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
                    alt={`Capture d'écran ${index + 1} - Créer une fiche produit de type Abonnement`}
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