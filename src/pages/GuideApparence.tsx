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
      id: 1,
      title: "Modifier l'apparence du site",
      url: "/guide/apparence/modifier-apparence-site"
    },
    {
      id: 2,
      title: "Réorganiser l'ordre des pages",
      url: "/guide/apparence/reorganiser-pages"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/" className="hover:text-kiween-green">
            Accueil
          </Link>
          {" > "}
          <span>Guide Apparence</span>
        </nav>

        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Guide Apparence
        </h1>
        
        <p className="text-kiween-text/80 mb-8">
          Découvrez comment personnaliser l'apparence de votre site et organiser vos pages pour une expérience utilisateur optimale.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-kiween-green/20 p-6">
        <h2 className="text-xl font-semibold text-kiween-text mb-6">
          Sommaire des guides
        </h2>
        
        <div className="space-y-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              to={section.url}
              className="block p-4 border border-kiween-green/20 rounded-lg hover:bg-kiween-green/5 hover:border-kiween-green/40 transition-colors"
            >
              <div className="flex items-center">
                <span className="flex-shrink-0 w-8 h-8 bg-kiween-green/10 text-kiween-green rounded-full flex items-center justify-center text-sm font-medium mr-3">
                  {section.id}
                </span>
                <span className="text-kiween-text hover:text-kiween-green font-medium">
                  {section.title}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Link
          to="/"
          className="text-kiween-green hover:text-kiween-text transition-colors"
        >
          ← Retour aux guides
        </Link>
      </div>
    </div>
  );
}