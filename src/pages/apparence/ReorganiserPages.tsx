import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageGallery } from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useMeta } from "@/hooks/useMeta";

export default function ReorganiserPages() {
  useMeta({
    title: 'Réorganiser l\'ordre des pages - Guide Apparence Kiween',
    description: 'Apprenez à réorganiser et structurer les pages de votre site Kiween. Guide complet pour optimiser la navigation et l\'expérience utilisateur.',
    keywords: 'kiween, réorganiser pages, structure site, navigation, menu, ordre pages, architecture site',
    image: '/kb/apparence-site/reorganiser-pages/reorganiser-pages-capture-01.png'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/apparence-site/reorganiser-pages/reorganiser-pages-capture-01.png",
    "/kb/apparence-site/reorganiser-pages/reorganiser-pages-capture-02.png",
    "/kb/apparence-site/reorganiser-pages/reorganiser-pages-capture-03.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/apparence" className="hover:text-kiween-green">
            Guide Apparence
          </Link>
          {" > "}
          <span>Réorganiser l'ordre des pages</span>
        </nav>

        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Réorganiser l'ordre des pages
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Structurer et organiser les pages de votre site web.</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment réorganiser l'ordre des pages de votre site ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro &gt; <strong>Site internet</strong> &gt; <strong>Structure des pages</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Accéder à la gestion des pages
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            <span className="text-kiween-green font-medium">Rendez-vous dans votre espace professionnel</span> et accédez à la section "Site internet". 
            Cliquez sur "Structure des pages" pour visualiser et <span className="text-kiween-green font-medium">modifier l'organisation</span> 
            de toutes les pages de votre site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Modifier l'ordre des pages
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            Vous pouvez facilement <strong>réorganiser vos pages</strong> en utilisant le système de glisser-déposer :
          </p>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Glisser-déposer :</strong> cliquez et maintenez sur une page, puis faites-la glisser à la position souhaitée</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Hiérarchie :</strong> créez des sous-pages en les plaçant sous une page parent</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Visibilité :</strong> activez ou désactivez l'affichage de certaines pages dans le menu</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Organiser le menu principal
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            La <strong>structure de votre menu</strong> influence directement l'expérience utilisateur :
          </p>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Pages principales :</strong> placez les sections les plus importantes en premier</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Sous-menus :</strong> regroupez les pages similaires sous des catégories logiques</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Page d'accueil :</strong> définissez quelle page s'affiche en premier</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Configurer les paramètres avancés
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            Pour chaque page, vous pouvez personnaliser :
          </p>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Titre du menu :</strong> le texte affiché dans la navigation (peut différer du titre de la page)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>URL personnalisée :</strong> définissez une adresse web spécifique pour la page</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Statut :</strong> publiée, brouillon ou masquée du menu</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Optimiser la navigation
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            Une <strong>navigation claire et intuitive</strong> améliore l'expérience utilisateur et le référencement de votre site. 
            Organisez vos pages de manière <span className="text-kiween-green font-medium">logique et cohérente</span> en regroupant 
            les contenus similaires et en limitant le nombre de niveaux de navigation.
          </p>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <p className="text-orange-800">
            <strong>Important :</strong> <span className="text-orange-600">Les modifications de structure peuvent affecter le référencement. 
            Pensez à mettre en place des redirections si vous changez les URLs de pages existantes.</span>
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
          altPrefix="Capture d'écran - Réorganiser l'ordre des pages"
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