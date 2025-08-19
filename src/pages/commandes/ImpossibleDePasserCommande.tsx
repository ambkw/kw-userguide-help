import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageGallery } from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useMeta } from "@/hooks/useMeta";

export default function ImpossibleDePasserCommande() {
  useMeta({
    title: 'Impossible de passer ma commande en ligne - Guide Commandes Kiween',
    description: 'Solutions aux problèmes courants empêchant de finaliser une commande en ligne. Diagnostiquer et résoudre les difficultés de commande.',
    keywords: 'kiween, commande impossible, problème commande, erreur paiement, bug commande, aide commande',
    image: '/kb/commandes/impossible-de-passer-commande/impossible-de-passer-commande-guide.png'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/commandes/impossible-de-passer-commande/impossible-de-passer-commande-capture-01.jpg",
    "/kb/commandes/impossible-de-passer-commande/impossible-de-passer-commande-capture-02.jpg",
    "/kb/commandes/impossible-de-passer-commande/impossible-de-passer-commande-capture-03.jpg"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/commandes" className="hover:text-kiween-green">
            Guide Commandes
          </Link>
          {" > "}
          <span>Impossible de passer ma commande en ligne</span>
        </nav>

        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Impossible de passer ma commande en ligne
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Solutions aux problèmes courants empêchant de finaliser une commande en ligne.</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment résoudre les difficultés de commande ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Page :</strong> Site internet &gt; <strong>Catalogue produits</strong> &gt; <strong>Panier</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Vérifications préliminaires
          </h2>
          
          <ul className="space-y-3 text-kiween-text/90">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Connexion internet :</strong> Vérifiez que votre connexion est stable et fonctionnelle
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Navigateur :</strong> Utilisez un navigateur récent et activez JavaScript
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Cookies :</strong> Autorisez les cookies pour le bon fonctionnement du panier
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Problèmes de paiement
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            Si le paiement ne s'effectue pas, vérifiez :
          </p>
          
          <ul className="space-y-3 text-kiween-text/90">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Informations bancaires :</strong> Vérifiez la validité de votre carte et les informations saisies
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Limites bancaires :</strong> Contactez votre banque si le montant dépasse vos limites
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Paiement sécurisé :</strong> Validez l'authentification 3D Secure si demandée
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Problèmes techniques
          </h2>
          
          <ul className="space-y-3 text-kiween-text/90">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Cache navigateur :</strong> Videz le cache et les données de navigation
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Mode privé :</strong> Testez la commande en navigation privée
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Autre navigateur :</strong> Essayez avec un navigateur différent
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Informations de livraison
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            Vérifiez que toutes les <span className="text-kiween-green font-medium">informations de livraison</span> sont correctement 
            renseignées : adresse complète, code postal, ville, et que la zone de livraison est couverte par le marchand.
          </p>
        </section>

        <section className="bg-red-50 border border-red-200 rounded-lg p-6">
          <p className="text-red-800">
            <strong>Besoin d'aide :</strong> <span className="text-red-600">Si le problème persiste, contactez directement le service client avec le détail de votre commande</span> 📞
          </p>
        </section>
      </div>

      {/* Guide visuel */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-kiween-text mb-4">
          Guide visuel
        </h2>
        <div className="mb-6">
          <img 
            src="/kb/commandes/impossible-de-passer-commande/impossible-de-passer-commande-guide.png" 
            alt="Guide - Impossible de passer ma commande en ligne"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <ImageGallery 
          images={screenshots}
          altPrefix="Capture d'écran - Impossible de passer commande"
        />
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-kiween-green/20">
        <div className="flex justify-between">
          <Link
            to="/guide/commandes"
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ← Retour au guide Commandes
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