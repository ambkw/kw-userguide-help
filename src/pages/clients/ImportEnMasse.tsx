import { ImageGallery } from "@/components/ImageGallery";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function ImportEnMasse() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/clients/import-contacts-mails/import-contacts-mails-01.png",
    "/kb/clients/import-contacts-mails/import-contacts-mails-02.png",
    "/kb/clients/import-contacts-mails/import-contacts-mails-03.png",
    "/kb/clients/import-contacts-mails/import-contacts-mails-04.png",
    "/kb/clients/import-contacts-mails/import-contacts-mails-05.png",
    "/kb/clients/import-contacts-mails/import-contacts-mails-06.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Importer sa liste de contact mail
        </h1>
        <p className="text-lg text-kiween-text/80 mb-6">
          Comment enrichir ma base de données de contact mail ?
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <p className="text-blue-700">
            <strong>Demande d'import d'un fichier mails clients depuis l'interface.</strong>
          </p>
        </div>
        
        <p className="text-kiween-text/90 mb-6">
          <strong>Menu :</strong> Espace pro &gt; Clients &gt; <em>Choisir un fichier (en partie haute de la page)</em>. 
          Le fichier doit être au format Excel.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <p className="text-kiween-text/90 mb-6">
            Pour ajouter plusieurs de vos contacts mails dans votre base de données clients, il suffit de faire une 
            demande d'import de votre liste de mails clients, depuis l'interface.
          </p>
          
          <p className="text-kiween-text/90 mb-6">
            La liste des contacts mails du fichier ne doit contenir que des données de contacts pour lesquels le 
            consentement a été collecté pour l'utilisation de leurs données personnelles (ex : nom, prénom, mail, 
            téléphone, adresse etc) en vue de l'inscription à la newsletter par mail.
          </p>
          
          <p className="text-kiween-text/90 mb-8">
            Dans l'interface, une case à cocher demande de confirmer que le consentement a bien été recueilli.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Description des 4 étapes :
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-kiween-green pl-6">
              <h3 className="text-xl font-semibold text-kiween-text mb-3">
                1ère étape
              </h3>
              <p className="text-kiween-text/90">
                <strong>Sélectionner l'onglet :</strong> montre les feuilles du fichier Excel. Un aperçu des premières lignes du 
                fichier montre aussi son contenu. Valider si le bon onglet ou la bonne feuille est sélectionnée.
              </p>
            </div>

            <div className="border-l-4 border-kiween-green pl-6">
              <h3 className="text-xl font-semibold text-kiween-text mb-3">
                2e étape
              </h3>
              <p className="text-kiween-text/90">
                <strong>Sélectionner les en-têtes :</strong> permet de faire correspondre les en-têtes attendues (Prénom, 
                Nom, E-mail...) avec les en-têtes du fichier, et d'ignorer les colonnes à ne pas importer. Faire 
                correspondre au moins E-mail avec l'en-tête du fichier contenant tous les Prénom, Nom et E-mail, puis passer à l'étape 
                suivante.
              </p>
            </div>

            <div className="border-l-4 border-kiween-green pl-6">
              <h3 className="text-xl font-semibold text-kiween-text mb-3">
                3e étape
              </h3>
              <p className="text-kiween-text/90">
                <strong>Vérifier les lignes :</strong> montre toutes les lignes du fichier. Le système met en évidence les lignes 
                considérées suspectes. Cliquer sur une cellule pour apporter des modifications dans le tableau. Dans le 
                cas où beaucoup de cellules doivent être modifiées, nous vous recommandons d'apporter les 
                modifications sur le fichier et de recharger le fichier à jour dans l'interface. Répétez les étapes 1 à 3 pour 
                nettoyer le fichier.
              </p>
            </div>

            <div className="border-l-4 border-kiween-green pl-6">
              <h3 className="text-xl font-semibold text-kiween-text mb-3">
                4e étape
              </h3>
              <p className="text-kiween-text/90">
                <strong>Confirmer :</strong> pour demander l'import du fichier en cochant la case de confirmation sur le 
                consentement des contacts du fichier. La demande sera traitée par l'équipe support.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-orange-50 border border-orange-200 rounded-lg p-6">
          <p className="text-orange-800 mb-4">
            <strong>À noter :</strong> Une ligne est considérée suspecte (couleur orange) si le nom de domaine de l'email est peu 
            courant. L'email ou le nom peuvent aussi ne pas être dans un format obligatoire (couleur rouge).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Colonnes prises en charge :
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Prénom *</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Nom *</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Email *</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Téléphone mobile *</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Adresse</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Code postal</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Ville</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Téléphone fixe</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Date de naissance</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-kiween-green rounded-full mr-3"></span>
                  <span className="text-kiween-text">Groupes <em>(nom de groupe séparé par une virgule)</em></span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-sm text-kiween-text/70 mt-4">
            (*) <em>Informations obligatoires.</em> L'email ou le téléphone portable est obligatoire. Sans l'une ou l'autre 
            information, la ligne est ignorée.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-kiween-text mb-4">
            Liens utiles RGPD :
          </h2>
          
          <ul className="space-y-2">
            <li>
              <a 
                href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2#Article6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://www.cnil.fr/fr/reglement-europeen-protection-donnees/chapitre2#Article6
              </a>
            </li>
            <li>
              <a 
                href="https://www.cnil.fr/fr/les-bases-legales/traiter-legalite" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://www.cnil.fr/fr/les-bases-legales/traiter-legalite
              </a>
            </li>
          </ul>
          
          <p className="text-sm text-kiween-text/70 mt-4">
            Il est de la responsabilité de l'utilisateur de vérifier l'autorisation constitutionnelle
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
          altPrefix="Capture d'écran - Importer sa liste de contact mail"
        />
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-kiween-green/20">
        <div className="flex justify-between">
          <Link
            to="/guide/clients"
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ← Retour au guide Clients
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