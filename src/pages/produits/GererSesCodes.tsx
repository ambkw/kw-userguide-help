import { Link } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function GererSesCodes() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/produits" className="hover:text-kiween-green">
            Guide Produits
          </Link>
          {" > "}
          <span>Gestion de stock</span>
        </nav>

        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Gérer ses codes promo
        </h1>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Créer un bon de réduction pour ses clients.</strong>
          </p>
        </div>

        <p className="text-lg text-kiween-text/80 mb-6">
          Comment créer un code promo pour sa boutique en ligne ?
        </p>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu :</strong> Espace pro &gt; <strong>Code promo</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Créer un code promo ou bon de réduction
          </h2>

          <p className="text-kiween-text/90 mb-6">
            L'utilisation de code promo est un véritable levier pour booster ses ventes en ligne.
          </p>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Un code promo permet de communiquer sur sa boutique, un produit, sa marque.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Une réduction attire toujours une clientèle fidèle ou une nouvelle clientèle.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Il permet de favoriser un certain montant de commande minimum.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Un code promo doit être utilisé de manière judicieuse, à aligner avec une véritable stratégie de communication et d'analyse de ses ventes.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Exemples de cas d'usage :
          </h2>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Date spéciale (fête de fin d'année, nouvelle année, Saint-Valentin, rentrée scolaire, black friday, white monday)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Contextuel (fin de stock, produit spécifique, nouvel événement dans l'entreprise)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Inscription à la newsletter</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Recommandation, parrainage</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Concernant un code promo :
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            <strong>Informations requises pour créer un code de réduction :</strong>
          </p>
          
          <ul className="space-y-2 text-kiween-text/90 mb-6 ml-6">
            <li className="flex items-start">
              <span className="w-1 h-1 bg-kiween-green rounded-full mr-3 mt-3 flex-shrink-0"></span>
              <span>code du bon de réduction,</span>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-kiween-green rounded-full mr-3 mt-3 flex-shrink-0"></span>
              <span>type (% ou €),</span>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-kiween-green rounded-full mr-3 mt-3 flex-shrink-0"></span>
              <span>valeur,</span>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-kiween-green rounded-full mr-3 mt-3 flex-shrink-0"></span>
              <span>montant minimum du panier,</span>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-kiween-green rounded-full mr-3 mt-3 flex-shrink-0"></span>
              <span>date de début de validité.</span>
            </li>
          </ul>

          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>On peut créer plusieurs codes promo actifs pour les mêmes périodes.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Lorsqu'un code promo est activé, un consommateur peut l'appliquer sur l'ensemble de son panier.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Un seul code promo peut être appliqué au panier.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Un code promo est activable en fonction du montant minimum du panier et la date de début de validité du code promo.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Un même consommateur peut utiliser autant de fois le code promo (s'il passe 2 commandes séparément, il pourra appliquer le même code pour chacune de ses commandes).</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>Dans le cas d'une réduction en %, elle s'applique aussi pour les articles qui ont déjà un prix réduit.</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>On ne recommande pas de modifier le montant d'un code promo une fois qu'il a été communiqué et utilisé (même si le système n'empêche pas cela).</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Options
          </h2>
          
          <ul className="space-y-3 text-kiween-text/90 mb-6">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Générer automatiquement :</strong> à côté du nom du code promo, un bouton permet de générer automatiquement le nom du code promo</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Utilisation unique :</strong> le code promo est utilisable qu'une seule fois (donc par un seul compte ou total)</span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span><strong>Inactive :</strong> indique que le code est désactivé, donc plus aucun compte ne peut utiliser le code peu importe les autres conditions (seuil, date).</span>
            </li>
          </ul>
        </section>

        {/* Carrousel d'images */}
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Images du guide
          </h2>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <div key={index} className="flex-shrink-0">
                  <img
                    src={`/kb/produits/gerer-ses-codes-promo/gerer-ses-codes-promo-capture-0${index}.png`}
                    alt={`Guide étape ${index}`}
                    className="w-80 h-auto rounded-lg shadow-lg border border-gray-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-kiween-green/20">
        <div className="flex justify-between">
          <Link
            to="/guide/produits"
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ← Retour au guide Produits
          </Link>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ↑ Haut de page
          </button>
        </div>
      </div>
    </div>
  );
}