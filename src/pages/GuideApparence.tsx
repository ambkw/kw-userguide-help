import { Link } from "react-router-dom";
import { useMeta } from "@/hooks/useMeta";

export default function GuideApparence() {
  useMeta({
    title: 'Guide Apparence du site - Guide Kiween',
    description: 'Guides et tutoriels pour personnaliser l\'apparence de votre site Kiween. Apprenez à modifier l\'apparence et réorganiser vos pages.',
    keywords: 'kiween, apparence, design, personnalisation, site web, modifier apparence, réorganiser pages'
  });

  const sections = [
    {
      id: "modifier-apparence-site",
      title: "Modifier l'apparence du site",
      url: "/guide/apparence/modifier-apparence-site"
    },
    {
      id: "reorganiser-pages",
      title: "Réorganiser l'ordre des pages",
      url: "/guide/apparence/reorganiser-pages"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Guide Apparence
        </h1>
        <p className="text-lg text-kiween-text/80">
          Découvrez comment personnaliser l'apparence de votre site et organiser vos pages pour une expérience utilisateur optimale.
        </p>
      </div>

      {/* Sommaire */}
      <div className="bg-kiween-light-green rounded-lg p-6">
        <h2 className="text-xl font-semibold text-kiween-text mb-6">
          Sommaire des guides
        </h2>
        <nav className="grid gap-4">
          {sections.map((section, index) => (
            <Link
              key={section.id}
              to={section.url}
              className="block p-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 hover:bg-kiween-light-green/50 border border-transparent hover:border-kiween-green/20"
            >
              <div className="flex items-center space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-kiween-green text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </span>
                <span className="text-kiween-text font-medium hover:text-kiween-green transition-colors">
                  {section.title}
                </span>
              </div>
            </Link>
          ))}
        </nav>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t border-kiween-green/20">
        <Link
          to="/demarrer"
          className="text-kiween-green hover:text-kiween-text transition-colors"
        >
          ← Retour aux guides
        </Link>
      </div>
    </div>
  );
}