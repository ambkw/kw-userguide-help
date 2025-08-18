import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function ImporterFichesProduits() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const screenshots = [
    "/kb/produits/importer-ses-fiches-produits-en-masse/importer-ses-fiches-produits-en-masse-capture-01.png"
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <nav className="text-sm text-kiween-text/70 mb-4">
          <Link to="/guide/produits" className="hover:text-kiween-green">
            Guide Produits
          </Link>
          {" > "}
          <span>Importer ses fiches produits en masse</span>
        </nav>
        
        <h1 className="text-3xl font-bold text-kiween-text mb-4">
          Importer ses fiches produits en masse
        </h1>
        
        <h2 className="text-xl text-kiween-text/80 mb-6">
          Comment importer plusieurs produits à partir d'un fichier Excel ?
        </h2>

        <Alert className="mb-6">
          <AlertDescription>
            <strong>Menu Espace pro › Produits</strong>
          </AlertDescription>
        </Alert>
      </div>

      <div className="prose prose-lg max-w-none text-kiween-text">
        <p className="mb-6">
          Pour créer une fiche produit, il est recommandé d'utiliser l'interface qui offre une expérience plus visuelle.
        </p>

        <p className="mb-6">
          En revanche, lorsque l'on a beaucoup de fiches produits à créer, il est parfois plus simple de gérer les informations dans un fichier Excel,
          qui sera la source de données, puis le fichier peut être importé pour créer ou mettre à jour des informations.
        </p>

        <p className="mb-6">
          Retrouver le format de fichier à respecter pour une intégration sans erreur.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <h3 className="text-lg font-semibold mb-4">Format du fichier</h3>
          <p className="mb-4">
            En-tête de colonne <strong>requis :</strong> Nom, Description, Quantités, Prix
          </p>
          <p className="mb-4">
            Autres en-têtes recommandées : <strong>Catégories, Collections, Mots-clés privés</strong>
          </p>
          
          <p className="mb-4">Liste complète des en-têtes possible du fichier d'import :</p>
          <p className="text-sm">
            Identifiant | Catégories | Catégories enseigne | Collections | Nom | Description | Quantités | Prix | TVA | Sur devis | Prix de
            référence | Libellé de réduction | Marque | Fournisseur | Disponibilité | Date de disponibilité | Date d'indisponibilité | Durée avant
            disponibilité | Poids de livraison | En ligne | Pré-commande | Paiement en ligne | Quantité limite par commande | Mots-clés
            privés | Identifiant externe | Noms photos
          </p>
          
          <p className="mt-4">
            <a href="#" className="text-kiween-green">Télécharger un exemple ici</a>
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Mise à jour et champ vide</h3>
            <p>
              Cellule vide = <strong>effacer !</strong>
            </p>
            <p>
              Lors de la mise à jour d'une fiche produit existante (avec présence de la colonne Identifiant), le système tente de remplacer la
              valeur existante par celle indiquée dans le fichier Excel. Si une colonne est présente dans le fichier, le système modifie pas les valeurs existantes. Il ne traite que les
              propriétés correspondantes aux en-têtes du fichier d'import.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Cas d'exception</h3>
            <p>
              Si une propriété telle que la "Disponibilité" doit forcément être valorisée, alors le système ne remplacera pas la
              valeur existante par une valeur "vide". La valeur existante est conservée.
            </p>
            <p>
              Si un en-tête de colonne n'est pas fournie dans le fichier, le système ne modifie pas les valeurs existantes. Il ne traite que les
              propriétés correspondantes aux en-têtes du fichier d'import.
            </p>
          </div>
        </div>

        <div className="space-y-6 mt-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">Colonne "Identifiant"</h3>
            <p>
              L'identifiant correspond à une valeur interne gérée par le système. La valeur est unique pour chaque fiche produit. On peut
              obtenir cette information lorsque l'on exporte le fichier Excel depuis la plateforme ;
            </p>
            <p>
              Un import sans la colonne "Identifiant", le système crée un nouveau produit ;
            </p>
            <p>
              Avec la colonne "Identifiant", le système met à jour le produit concerné.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Colonne "Noms photos"</h3>
            <p>
              Indiquer le nom exacte d'une ou plusieurs photos présents dans l'Espace pro › <strong>Photos</strong>.
            </p>
            <p>
              Ex: photo1 ou photo1.jpg ou image.png ;
            </p>
            <p>
              Chaque nom de photo doit être séparé par une virgule.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Colonne "Catégories"</h3>
            <p>
              Nous contacter pour obtenir la liste des valeurs possibles issues du référentiel du système.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Colonne "Catégories enseigne"</h3>
            <p>
              Les valeurs possibles correspondent aux catégories personnalisées dans l'Espace pro › <strong>Catégories de produits</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Carrousel des captures d'écran */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-kiween-text mb-6">
          Guide visuel
        </h3>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index}>
                <div className="p-2">
                  <img
                    src={screenshot}
                    alt={`Capture d'écran ${index + 1} - Importer ses fiches produits en masse`}
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      {/* Navigation */}
      <div className="mt-8 pt-6 border-t border-kiween-green/20 flex justify-between items-center">
        <Link
          to="/guide/produits"
          className="text-kiween-green hover:text-kiween-text transition-colors"
        >
          ← Retour au Guide Produits
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
  );
}