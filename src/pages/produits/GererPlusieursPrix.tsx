import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function GererPlusieursPrix() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/produits/gerer-plusieurs-prix-sur-une-fiche-produit/gerer-plusieurs-prix-sur-une-fiche-produit-capture-01.png",
    "/kb/produits/gerer-plusieurs-prix-sur-une-fiche-produit/gerer-plusieurs-prix-sur-une-fiche-produit-capture-02.png",
    "/kb/produits/gerer-plusieurs-prix-sur-une-fiche-produit/gerer-plusieurs-prix-sur-une-fiche-produit-capture-03.png",
    "/kb/produits/gerer-plusieurs-prix-sur-une-fiche-produit/gerer-plusieurs-prix-sur-une-fiche-produit-capture-04.png",
    "/kb/produits/gerer-plusieurs-prix-sur-une-fiche-produit/gerer-plusieurs-prix-sur-une-fiche-produit-capture-05.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/produits" className="hover:text-kiween-green">
            Guide Produits
          </Link>
          {" > "}
          <span>Gérer plusieurs prix sur une fiche produit</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Gérer plusieurs prix sur une fiche produit
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Fiche produit et déclinaisons.</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment créer des déclinaisons de produit à prix variable ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro › <strong>Produits</strong> › Ajouter/modifier un produit › <strong>Ajouter une déclinaison</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="prose prose-lg max-w-none text-kiween-text">
        <h2 className="text-2xl font-semibold text-kiween-text mb-4">
          Créer plusieurs prix sur une seule fiche produit
        </h2>

        <p className="mb-6">
          Pour ajouter une fiche produit, aller dans votre <strong>Espace pro › Produits</strong>. Dans le cas où vous avez la même description de produit disponible en
          plusieurs déclinaisons et dont le prix diffère, vous pouvez "<strong>ajouter une déclinaison</strong>" sur une fiche produit.
        </p>

        <p className="mb-6">
          Une déclinaison d'un produit doit comporter un <strong>libellé</strong> et un <strong>prix</strong> afin d'être lisible pour votre client lors de la sélection de l'article à commander.
          Vous pouvez aussi ajouter une photo spécifique à chaque déclinaison de produit et des caractéristiques spécifiques (taille de vêtement,
          pointure de chaussure, couleur d'un objet, senteur d'un parfum, ...).
        </p>

        <p className="mb-6">
          Une fiche produit et ses déclinaisons vous permettent de gagner du temps dans la constitution de votre catalogue de produit pour des
          articles dont certaines caractéristiques influencent le prix mais ne changent en rien la description de celui-ci (longueur d'un câble,
          couleur d'une coque de téléphone, volume d'une bouteille ou d'un pot de yaourt, poids d'un pot en verre d'une confiture, ...).
        </p>

        <p className="mb-6">
          Nous vous recommandons d'être précis dans la description de la fiche produit "principale" afin d'éviter de mauvaise surprise lors de la
          commande pour votre client.
        </p>

        <p className="mb-6">
          Ajouter des produits sur votre site permet à vos clients de mieux comprendre votre activité et d'avoir des informations sur ce que vous
          vendez ou les services proposés. Le catalogue en ligne <strong>contribue à améliorer votre référencement</strong>, même sans activer la commande
          en ligne. C'est <strong>une vitrine et un atout</strong> majeur pour vous démarquer. <a href="#" className="text-kiween-green">Découvrez notre article pour "ajouter un produit" ici</a>.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Pour créer un produit avec plusieurs prix :</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Connectez-vous à l'interface Kiween : <a href="https://www.kiween.com/" className="text-kiween-green">https://www.kiween.com/</a></li>
            <li>Accédez à <strong>Mon espace pro</strong> dans le menu en haut de page</li>
            <li>Sur le menu de gauche sélectionnez <strong>Produits</strong></li>
            <li>Cliquez sur l'icône <strong>Ajouter un produit</strong></li>
            <li>Indiquer les informations communes qui décrivent votre produit et ses déclinaisons</li>
            <li><strong>Ajouter une déclinaison</strong> à l'aide du bouton en bas de la fiche produit</li>
            <li>Sur chaque déclinaison, indiquer un <strong>nom</strong>, un <strong>prix</strong> et une <strong>photo</strong></li>
            <li>À noter que pour le paiement en ligne, un produit qui a un prix "sur devis" ou une indication de prix "à partir de" n'est pas éligible au paiement en ligne</li>
          </ol>
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
                    alt={`Capture d'écran ${index + 1} - Gérer plusieurs prix sur une fiche produit`}
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