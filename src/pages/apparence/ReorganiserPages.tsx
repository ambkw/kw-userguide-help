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
          Réorganiser les pages du site
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Modifier l'ordre des pages du menu du site internet</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment changer l'ordre des liens de page du menu principal ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro &gt; Paramètres de page
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Changer l'ordre des pages du menu
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            <strong>Afficher la vue détaillée</strong> pour accéder aux actions supplémentaires, puis utiliser la poignée dans le coin supérieur droit d'un élément pour le glisser-déposer à la position souhaitée. Enregistrer les modifications pour terminer.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Créer un alias ou une redirection de page
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            Pour une page, cliquer sur <strong>l'icône "clé à molette"</strong> pour accéder aux paramètres avancés. L'url de la page doit être défini explicitement, puis cliquer sur <strong>alias</strong> pour ajouter la redirection. Par exemple, saisir "<em>boutique</em>" (sans les guillemets) puis valider avec la touche [<strong>Entrée</strong>] et <strong>enregistrer</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Modifier le titre et l'url
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            Pour modifier le titre d'une page affiché dans le menu principal, et son url, saisir le texte dans le champ <strong>Titre de page</strong> et <strong>Url de la page</strong>, puis enregistrer.
          </p>
          
          <p className="text-kiween-text/90 mb-4">
            Il est possible, mais non recommandé, de modifier le titre et l'url des pages générées automatiquement (accueil.html, actualites.html, produits.html, ...).
          </p>
          
          <p className="text-kiween-text/90 mb-4">
            Il est recommandé de choisir des urls différentes de celles déjà utilisées par la plateforme pour les pages personnalisées créées.
          </p>
          
          <p className="text-kiween-text/90 mb-6">
            Le titre et l'url d'une page peuvent être modifiés directement depuis l'éditeur d'aperçu du site, où les META informations peuvent aussi être définies.
          </p>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-yellow-800">
              <strong>NB :</strong> pour la valeur de l'url de la page, éviter les espaces, caractères accentués et caractères spéciaux.
            </p>
            <p className="text-yellow-700 mt-2">
              - Exemples de valeur recommandée : mapage, ma-page, mapage.html, ...
            </p>
            <p className="text-yellow-700">
              - Exemples de valeur à éviter : ma page, mapâge.
            </p>
          </div>
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