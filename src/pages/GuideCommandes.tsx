import { Link } from "react-router-dom";

export default function GuideCommandes() {
  const sections = [
    {
      id: "gerer-commandes-en-ligne",
      title: "Gérer ses commandes en ligne",
      url: "/guide/commandes/gerer-ses-commandes"
    },
    {
      id: "impossible-passer-commande",
      title: "Impossible de passer ma commande en ligne",
      url: "/guide/commandes/impossible-de-passer-commande"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Guide Commandes
        </h1>
        <p className="text-lg text-kiween-text/80">
          Consulter ses commandes en ligne, rechercher, mettre à jour le statut, délivrer pour encaisser, annuler ou rembourser une commande.
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