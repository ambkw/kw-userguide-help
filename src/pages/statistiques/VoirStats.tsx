import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function VoirStats() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <div className="mb-8">
            <Link to="/demarrer">
              <Button variant="kiween-outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux guides
              </Button>
            </Link>
          </div>

          {/* Guide Content */}
          <article className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-kiween-text mb-6">
              Guide des Statistiques Kiween
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Découvrez comment analyser et comprendre vos données de performance avec le module Statistiques de Kiween.
            </p>

            <div className="bg-kiween-light-green border-l-4 border-kiween-green p-6 mb-8 rounded-r-lg">
              <p className="text-kiween-text font-medium mb-2">💡 Conseil</p>
              <p className="text-gray-700">
                Les statistiques sont mises à jour en temps réel et vous permettent de prendre des décisions éclairées 
                pour optimiser votre présence digitale.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-kiween-text mt-12 mb-6">
              Accéder aux Statistiques
            </h2>
            
            <p className="mb-6">
              Pour accéder au module Statistiques, connectez-vous à votre interface Kiween et cliquez sur l'icône 
              "Statistiques" dans la section "Mes données".
            </p>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <img 
                src="/lovable-uploads/136e88f1-40c7-48a0-b68e-1e3ab2d4512d.png" 
                alt="Interface Kiween - Capture d'écran du tableau de bord"
                className="w-full rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-600 mt-3 text-center italic">
                Interface principale de Kiween avec les différents modules disponibles
              </p>
            </div>

            <h2 className="text-2xl font-bold text-kiween-text mt-12 mb-6">
              Types de Statistiques Disponibles
            </h2>

            <h3 className="text-xl font-semibold text-kiween-text mt-8 mb-4">
              1. Trafic du Site Web
            </h3>
            
            <p className="mb-6">
              Analysez le comportement de vos visiteurs sur votre site web avec des métriques détaillées :
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li><strong>Visiteurs uniques :</strong> Nombre de personnes distinctes qui ont visité votre site</li>
              <li><strong>Pages vues :</strong> Total des pages consultées par tous les visiteurs</li>
              <li><strong>Temps moyen de session :</strong> Durée moyenne passée sur votre site</li>
              <li><strong>Taux de rebond :</strong> Pourcentage de visiteurs qui quittent après une seule page</li>
              <li><strong>Sources de trafic :</strong> D'où viennent vos visiteurs (recherche, réseaux sociaux, etc.)</li>
            </ul>

            <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-kiween-text mb-3">📊 Exemple de données</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>Visiteurs uniques (7 derniers jours) :</strong> 1,247</p>
                  <p><strong>Pages vues :</strong> 3,891</p>
                </div>
                <div>
                  <p><strong>Temps moyen de session :</strong> 2m 34s</p>
                  <p><strong>Taux de rebond :</strong> 42%</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-kiween-text mt-8 mb-4">
              2. Performance des Réseaux Sociaux
            </h3>
            
            <p className="mb-6">
              Suivez l'impact de votre communication sur les réseaux sociaux :
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li><strong>Impressions :</strong> Nombre de fois où vos publications ont été affichées</li>
              <li><strong>Engagements :</strong> Likes, commentaires, partages et clics</li>
              <li><strong>Portée :</strong> Nombre de personnes uniques qui ont vu vos contenus</li>
              <li><strong>Taux d'engagement :</strong> Pourcentage d'interactions par rapport aux impressions</li>
            </ul>

            <h3 className="text-xl font-semibold text-kiween-text mt-8 mb-4">
              3. Avis et Réputation Google
            </h3>
            
            <p className="mb-6">
              Surveillez votre e-réputation avec :
            </p>

            <ul className="list-disc list-inside mb-6 space-y-2 text-gray-700">
              <li><strong>Note moyenne :</strong> Votre score global sur Google</li>
              <li><strong>Nombre total d'avis :</strong> Quantité d'évaluations reçues</li>
              <li><strong>Évolution temporelle :</strong> Suivi de votre réputation dans le temps</li>
              <li><strong>Nouveaux avis :</strong> Alertes pour les dernières évaluations</li>
            </ul>

            <h2 className="text-2xl font-bold text-kiween-text mt-12 mb-6">
              Interprétation des Données
            </h2>

            <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-8">
              <h4 className="font-semibold text-kiween-text mb-3">⚠️ Points d'attention</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Un taux de rebond élevé (&gt;60%) peut indiquer un problème de contenu ou de performance</li>
                <li>• Une diminution soudaine du trafic nécessite une analyse des changements récents</li>
                <li>• Un faible taux d'engagement sur les réseaux peut nécessiter une révision de votre stratégie de contenu</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-kiween-text mt-12 mb-6">
              Actions Recommandées
            </h2>

            <p className="mb-6">
              Basé sur vos statistiques, voici quelques actions que vous pouvez entreprendre :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-kiween-light-green p-6 rounded-lg">
                <h4 className="font-semibold text-kiween-text mb-3">🚀 Optimisation du Site</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Améliorer le temps de chargement</li>
                  <li>• Optimiser le contenu des pages</li>
                  <li>• Travailler le SEO</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-kiween-text mb-3">📱 Réseaux Sociaux</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Publier à des horaires optimaux</li>
                  <li>• Créer du contenu engageant</li>
                  <li>• Répondre aux commentaires</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-kiween-text mt-12 mb-6">
              Fréquence de Consultation
            </h2>

            <p className="mb-6">
              Pour un suivi efficace de votre performance digitale, nous recommandons :
            </p>

            <ul className="list-disc list-inside mb-8 space-y-2 text-gray-700">
              <li><strong>Quotidien :</strong> Vérification rapide des nouveaux avis Google</li>
              <li><strong>Hebdomadaire :</strong> Analyse du trafic web et performance des réseaux sociaux</li>
              <li><strong>Mensuel :</strong> Rapport complet et définition des actions d'amélioration</li>
            </ul>

            <div className="bg-kiween-green text-white p-6 rounded-lg mb-8">
              <h4 className="font-semibold mb-3">✅ Astuce Pro</h4>
              <p>
                Configurez des alertes pour être notifié immédiatement des changements significatifs 
                dans vos statistiques. Cela vous permet de réagir rapidement aux opportunités ou aux problèmes.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-kiween-text mt-12 mb-6">
              Besoin d'aide ?
            </h2>

            <p className="mb-6">
              Si vous avez des questions concernant l'interprétation de vos statistiques ou si vous souhaitez 
              des conseils personnalisés pour améliorer vos performances, n'hésitez pas à contacter notre équipe support.
            </p>

            <div className="flex space-x-4">
              <Button variant="kiween">
                <ExternalLink className="h-4 w-4 mr-2" />
                Contacter le Support
              </Button>
              <Link to="/demarrer">
                <Button variant="kiween-outline">
                  Autres Guides
                </Button>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}