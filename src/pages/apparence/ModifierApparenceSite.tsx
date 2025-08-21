import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageGallery } from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useMeta } from "@/hooks/useMeta";

export default function ModifierApparenceSite() {
  useMeta({
    title: 'Modifier l\'apparence du site - Guide Apparence Kiween',
    description: 'Apprenez à personnaliser l\'apparence de votre site Kiween : couleurs, polices, logo et éléments visuels. Guide complet avec captures d\'écran.',
    keywords: 'kiween, modifier apparence, personnaliser site, design, couleurs, logo, thème, style',
    image: '/kb/apparence-site/modifier-apparence-site/modifier-apparence-site-capture-01.png'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/apparence-site/modifier-apparence-site/modifier-apparence-site-capture-01.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/apparence" className="hover:text-kiween-green">
            Guide Apparence
          </Link>
          {" > "}
          <span>Modifier l'apparence du site</span>
        </nav>

        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Modifier l'apparence du site web
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Choisir l'apparence du site à partir des thèmes prédéfinis.</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment changer le thème du site internet ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro &gt; Apparence
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Choix du thème
          </h2>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Sélectionnez le thème</strong> en cliquant sur une des vignettes d'aperçu. Les <em>STYLE 3, 4 et 9</em> sont les plus populaires.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Sélectionnez le modèle de couleur</strong> pour utiliser un jeu de couleur prédéfini. Ces couleurs peuvent être personnalisées plus tard.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Sélectionnez le type de disposition</strong> pour organiser les contenus affichés automatiquement sur la page d'accueil gérée par l'application. La page d'accueil peut-être personnalisée plus tard.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Valider</strong> pour enregistrer les modifications.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Ajouter des images
          </h2>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Ajouter une (ou plusieurs) <strong>photo panoramique</strong> pour la page d'accueil gérée automatiquement.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Ajouter un <strong>logo</strong>. Le logo est affiché automatiquement et mis en page en fonction du thème sélectionné.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Ajouter une <strong>favicon</strong>.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Choisir un <strong>album de photos</strong> pour afficher des images automatiquement sur la page d'accueil. Se référer à la gestion des photos et des albums pour en savoir plus.</span>
            </li>
          </ul>
        </section>
      </div>

      {/* Carrousel des captures d'écran */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-kiween-text mb-4">
          Guide visuel
        </h2>
        <ImageGallery 
          images={screenshots}
          altPrefix="Capture d'écran - Modifier l'apparence du site"
        />
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-kiween-green/20">
        <div className="flex justify-between">
          <Link
            to="/guide/apparence"
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ← Retour au guide Apparence
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
    </div>
  );
}