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
          Modifier l'apparence du site
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Personnaliser l'apparence visuelle de votre site web.</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment modifier l'apparence de votre site Kiween ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro &gt; <strong>Site internet</strong> &gt; <strong>Apparence</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Accéder aux paramètres d'apparence
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            <span className="text-kiween-green font-medium">Rendez-vous dans l'espace pro</span> puis cliquez sur "Site internet" dans le menu principal. 
            Sélectionnez ensuite "Apparence" pour accéder à tous les <span className="text-kiween-green font-medium">paramètres de personnalisation</span> 
            de votre site web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Personnaliser les couleurs
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            Vous pouvez modifier les <strong>couleurs principales</strong> de votre site pour qu'elles correspondent à votre identité visuelle :
          </p>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Couleur principale :</strong> définit la couleur des boutons et éléments d'action</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Couleur secondaire :</strong> utilisée pour les liens et éléments de navigation</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Couleur de fond :</strong> détermine l'arrière-plan général du site</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Modifier le logo et les images
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            Personnalisez l'identité visuelle de votre site en modifiant :
          </p>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Logo principal :</strong> affiché dans l'en-tête du site</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Favicon :</strong> petite icône affichée dans l'onglet du navigateur</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Image de bannière :</strong> image d'en-tête ou d'arrière-plan</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Configurer les polices
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            Choisissez les <strong>polices de caractères</strong> qui s'accordent avec votre image de marque :
          </p>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Police des titres :</strong> utilisée pour les en-têtes et titres principaux</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Police du texte :</strong> appliquée au contenu principal et aux paragraphes</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Prévisualiser les modifications
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            Avant de valider vos changements, utilisez la <strong>fonction de prévisualisation</strong> pour voir le rendu final de votre site. 
            Cela vous permet de <span className="text-kiween-green font-medium">vérifier l'harmonie visuelle</span> et d'ajuster si nécessaire 
            avant la mise en ligne.
          </p>
        </section>

        <section className="bg-green-50 border border-green-200 rounded-lg p-6">
          <p className="text-green-800">
            <strong>Conseil :</strong> <span className="text-green-600">Conservez une cohérence visuelle avec votre identité de marque existante pour une expérience utilisateur optimale.</span>
          </p>
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