import { Link } from "react-router-dom";

export default function PublierUneVideo() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Publier une vidéo
        </h1>
        <p className="text-lg text-kiween-text/80 mb-6">
          Comment publier une vidéo sur tous ses réseaux sociaux ?
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Diffuser une vidéo sur ses réseaux sociaux.</strong>
          </p>
        </div>
        
        <p className="text-kiween-text/90 mb-6">
          <strong>Menu :</strong> Espace pro &gt; <strong>Actualités</strong>
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Déposer une vidéo
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            <span className="text-kiween-green font-medium">Préparer sa vidéo et la déposer dans l'espace de vidéos.</span> Lors du chargement de la vidéo dans l'interface, un éditeur s'ouvre afin 
            d'apporter des <span className="text-kiween-green font-medium">modifications</span> simples telles que raccourcir la vidéo en indiquant le point de départ et la fin, définir la vignette d'aperçu.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Créer une actualité
          </h2>
          
          <p className="text-kiween-text/90 mb-6">
            Pour diffuser une vidéo sur un média, créer une <strong>actualité</strong> puis choisir la vidéo depuis l'espace de vidéo ou déposer une vidéo à partir 
            de l'appareil.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Compatibilités
          </h2>
          
          <p className="text-kiween-text/90 mb-4">
            <strong>Une seule vidéo</strong> est prise en charge sur une actualité. Il n'est pas possible publier plusieurs vidéos sur le même post vers les réseaux 
            sociaux, ni de combiner des photos en plus de la vidéo.
          </p>
          
          <p className="text-kiween-text/90 mb-4">
            La vidéo n'est pas prise en charge sur la <strong>fiche Google</strong>. Une photo d'aperçu est envoyée à la place.
          </p>
          
          <p className="text-kiween-text/90 mb-4">
            La photo d'aperçu est affichée dans le corps du <strong>mail</strong>. La vidéo se visionne depuis le lien vers le site internet contenu dans le mail.
          </p>
          
          <p className="text-kiween-text/90 mb-6">
            Pour l'affichage sur le <strong>site internet</strong>, il est possible de mettre plusieurs vidéos sur une actualité, promotion, événement ou fiche produit 
            et de mélanger des vidéos et des photos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Limites
          </h2>
          
          <ul className="space-y-3 text-kiween-text/90">
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Limite LinkedIn :</strong> <a href="https://learn.microsoft.com/fr-fr/linkedin/marketing/integrations/community-management/shares/videos-api" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://learn.microsoft.com/fr-fr/linkedin/marketing/integrations/community-management/shares/videos-api</a>
              </span>
            </li>
            <li className="flex items-start">
              <span className="w-2 h-2 bg-kiween-green rounded-full mr-3 mt-2 flex-shrink-0"></span>
              <span>
                <strong>Limite Instagram :</strong> <a href="https://developers.facebook.com/docs/instagram-api/reference/ig-user/media#caract-ristiques-vid-o" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://developers.facebook.com/docs/instagram-api/reference/ig-user/media#caract-ristiques-vid-o</a>
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <p className="text-orange-800">
            <strong>Voir aussi :</strong> <span className="text-orange-600">démonstration pour préparer sa vidéo avant diffusion</span> 📹
          </p>
        </section>
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-kiween-green/20">
        <div className="flex justify-between">
          <Link
            to="/guide/actualites"
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ← Retour au guide Actualités
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