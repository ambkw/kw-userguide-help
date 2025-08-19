import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ImageGallery } from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { useMeta } from "@/hooks/useMeta";

export default function GererSesCommandes() {
  useMeta({
    title: 'Gérer ses commandes en ligne - Guide Commandes Kiween',
    description: 'Apprenez à consulter, rechercher, mettre à jour le statut, délivrer, encaisser, annuler ou rembourser une commande avec Kiween.',
    keywords: 'kiween, commandes, gestion commandes, statut commande, livraison, encaissement, remboursement',
    image: '/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-guide.png'
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-01.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-02.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-03.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-04.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-05.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-06.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-07.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-08.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-09.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-10.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-11.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-12.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-13.png",
    "/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-capture-14.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/commandes" className="hover:text-kiween-green">
            Guide Commandes
          </Link>
          {" > "}
          <span>Gérer ses commandes en ligne</span>
        </nav>

        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Gérer ses commandes en ligne
        </h1>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Consulter ses commandes en ligne, rechercher, mettre à jour le statut, délivrer pour encaisser, annuler ou rembourser une commande.</strong>
          </p>
        </div>

        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment gérer efficacement ses commandes ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro &gt; <strong>Commandes</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Consulter ses commandes
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            L'interface de gestion des commandes permet de <span className="text-kiween-green font-medium">visualiser toutes vos commandes</span> avec 
            leurs informations essentielles : numéro, date, client, montant et statut. Utilisez les filtres pour trouver rapidement 
            une commande spécifique.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Mettre à jour le statut
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            Vous pouvez modifier le statut de chaque commande selon son avancement : <strong>en attente</strong>, 
            <strong>en préparation</strong>, <strong>expédiée</strong>, <strong>livrée</strong> ou <strong>annulée</strong>. 
            Cette information est automatiquement communiquée au client.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Délivrer et encaisser
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            Une fois la commande préparée, utilisez la fonction <span className="text-kiween-green font-medium">"Délivrer"</span> pour 
            marquer la commande comme livrée et procéder à l'encaissement automatique si le paiement était en attente.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Annulations et remboursements
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            En cas de besoin, vous pouvez <strong>annuler une commande</strong> et procéder au remboursement automatique du client. 
            Le système gère la logique de remboursement selon le mode de paiement utilisé.
          </p>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <p className="text-orange-800">
            <strong>Astuce :</strong> <span className="text-orange-600">Utilisez les notifications automatiques pour tenir vos clients informés de l'évolution de leurs commandes</span> 📧
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
            src="/kb/commandes/gerer-ses-commandes/gerer-ses-commandes-guide.png" 
            alt="Guide - Gérer ses commandes en ligne"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        <ImageGallery 
          images={screenshots}
          altPrefix="Capture d'écran - Gérer ses commandes"
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