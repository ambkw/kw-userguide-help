export default function Clients() {
  const sections = [
    {
      id: "importer-base",
      title: "Importer en masse sa base de données mails clients",
      content: `
        <p>Cette fonctionnalité vous permet d'importer rapidement une large base de données de contacts clients existante.</p>
        <h3>Étapes d'importation :</h3>
        <ol>
          <li>Préparez votre fichier CSV avec les colonnes : nom, prénom, email, téléphone</li>
          <li>Accédez à la section "Clients" puis "Importer des contacts"</li>
          <li>Sélectionnez votre fichier CSV</li>
          <li>Mappez les colonnes selon vos données</li>
          <li>Validez l'importation</li>
        </ol>
        <p><strong>Formats acceptés :</strong> CSV, Excel (.xlsx), vCard (.vcf)</p>
        <p><strong>Limite :</strong> 10 000 contacts par importation</p>
      `
    },
    {
      id: "exporter-contacts",
      title: "Exporter sa liste de contacts",
      content: `
        <p>Exportez facilement votre base de contacts pour la sauvegarder ou l'utiliser dans d'autres outils.</p>
        <h3>Options d'exportation :</h3>
        <ul>
          <li><strong>Export complet :</strong> Tous vos contacts avec toutes les informations</li>
          <li><strong>Export filtré :</strong> Seulement les contacts d'un groupe spécifique</li>
          <li><strong>Export personnalisé :</strong> Choisissez les champs à inclure</li>
        </ul>
        <h3>Formats disponibles :</h3>
        <ul>
          <li>CSV (compatible Excel)</li>
          <li>Excel (.xlsx)</li>
          <li>vCard (.vcf)</li>
        </ul>
      `
    },
    {
      id: "creer-groupe",
      title: "Créer un groupe pour segmenter sa base",
      content: `
        <p>La segmentation de votre base de contacts permet d'envoyer des communications ciblées et personnalisées.</p>
        <h3>Types de groupes :</h3>
        <ul>
          <li><strong>Groupe manuel :</strong> Ajoutez manuellement les contacts</li>
          <li><strong>Groupe automatique :</strong> Basé sur des critères (localisation, âge, intérêts)</li>
          <li><strong>Groupe comportemental :</strong> Selon les interactions (ouvertures, clics)</li>
        </ul>
        <h3>Création d'un groupe :</h3>
        <ol>
          <li>Cliquez sur "Nouveau groupe" dans la section Clients</li>
          <li>Nommez votre groupe</li>
          <li>Définissez les critères de segmentation</li>
          <li>Prévisualisez les contacts qui correspondent</li>
          <li>Sauvegardez le groupe</li>
        </ol>
      `
    },
    {
      id: "personnaliser-newsletter",
      title: "Personnaliser le modèle de mail d'inscription à la newsletter",
      content: `
        <p>Créez des emails d'inscription personnalisés qui reflètent votre image de marque et engagent vos nouveaux abonnés.</p>
        <h3>Éléments personnalisables :</h3>
        <ul>
          <li><strong>En-tête :</strong> Logo, couleurs, police</li>
          <li><strong>Message de bienvenue :</strong> Texte personnalisé</li>
          <li><strong>Call-to-action :</strong> Boutons d'action personnalisés</li>
          <li><strong>Pied de page :</strong> Informations de contact, liens sociaux</li>
        </ul>
        <h3>Bonnes pratiques :</h3>
        <ul>
          <li>Utilisez un ton chaleureux et accueillant</li>
          <li>Présentez clairement vos services/produits</li>
          <li>Incluez vos coordonnées</li>
          <li>Ajoutez des liens vers vos réseaux sociaux</li>
          <li>Testez l'affichage sur mobile et desktop</li>
        </ul>
      `
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Guide Clients
        </h1>
        <p className="text-lg text-kiween-text/80">
          Gérez efficacement votre base de contacts clients avec Kiween. 
          Importez, exportez, segmentez et personnalisez vos communications.
        </p>
      </div>

      {/* Sommaire */}
      <div className="bg-kiween-light-green rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-kiween-text mb-4">
          Sommaire
        </h2>
        <nav className="space-y-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="block w-full text-left p-3 rounded hover:bg-white/50 transition-colors text-kiween-text hover:text-kiween-green"
            >
              <span className="font-medium text-kiween-green mr-2">
                {index + 1}.
              </span>
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-20">
            <div className="border-l-4 border-kiween-green pl-6">
              <h2 className="text-2xl font-semibold text-kiween-text mb-4">
                <span className="text-kiween-green mr-2">{index + 1}.</span>
                {section.title}
              </h2>
              <div 
                className="prose prose-lg max-w-none text-kiween-text/90"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
            </div>
          </section>
        ))}
      </div>

      {/* Navigation */}
      <div className="mt-12 pt-8 border-t border-kiween-green/20">
        <div className="flex justify-between">
          <button
            onClick={() => window.history.back()}
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ← Retour aux guides
          </button>
          <button
            onClick={() => scrollToSection(sections[0].id)}
            className="text-kiween-green hover:text-kiween-text transition-colors"
          >
            ↑ Haut de page
          </button>
        </div>
      </div>
    </div>
  );
}