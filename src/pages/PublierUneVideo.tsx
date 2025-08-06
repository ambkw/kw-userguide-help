import { ArrowLeft, Video, Upload, Settings, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const images = [
  "/kb/actualites/publier-une-video/publier-une-video-01.png",
  "/kb/actualites/publier-une-video/publier-une-video-02.png", 
  "/kb/actualites/publier-une-video/publier-une-video-03.png",
  "/kb/actualites/publier-une-video/publier-une-video-04.png",
  "/kb/actualites/publier-une-video/publier-une-video-05.png",
  "/kb/actualites/publier-une-video/publier-une-video-06.png"
];

export default function PublierUneVideo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-kiween-light-green/20 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/guide/actualites">
            <Button variant="kiween-outline" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au Guide Actualités
            </Button>
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-kiween-green to-kiween-dark-green rounded-lg flex items-center justify-center">
              <Video className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-kiween-green">
                Publier une vidéo
              </h1>
              <p className="text-kiween-text/80 mt-1">
                Guide complet pour publier des vidéos dans vos actualités
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl space-y-8">
          {/* Introduction */}
          <Card className="border-kiween-green/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-kiween-green">
                <Video className="h-5 w-5" />
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kiween-text leading-relaxed">
                La publication de vidéos dans vos actualités vous permet d'enrichir votre contenu et d'engager davantage votre audience. 
                Ce guide vous accompagne pas à pas pour publier efficacement vos vidéos sur votre plateforme Kiween.
              </p>
            </CardContent>
          </Card>

          {/* Étape 1 */}
          <Card className="border-kiween-green/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-kiween-green">
                <Upload className="h-5 w-5" />
                Étape 1 : Accéder à la section Actualités
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kiween-text leading-relaxed">
                Pour commencer, rendez-vous dans votre interface d'administration Kiween et accédez à la section "Actualités" 
                depuis le menu principal.
              </p>
              <ul className="list-disc list-inside space-y-2 text-kiween-text ml-4">
                <li>Connectez-vous à votre interface d'administration</li>
                <li>Cliquez sur "Actualités" dans le menu de navigation</li>
                <li>Sélectionnez "Nouvelle actualité" ou "Créer une actualité"</li>
              </ul>
            </CardContent>
          </Card>

          {/* Étape 2 */}
          <Card className="border-kiween-green/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-kiween-green">
                <Settings className="h-5 w-5" />
                Étape 2 : Configurer votre actualité vidéo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kiween-text leading-relaxed">
                Une fois dans l'éditeur d'actualité, vous devez configurer les paramètres de base avant d'ajouter votre vidéo.
              </p>
              <div className="bg-kiween-light-green/20 p-4 rounded-lg">
                <h4 className="font-semibold text-kiween-green mb-2">Informations requises :</h4>
                <ul className="list-disc list-inside space-y-1 text-kiween-text">
                  <li>Titre de l'actualité</li>
                  <li>Description ou contenu textuel</li>
                  <li>Catégorie (optionnel)</li>
                  <li>Date de publication</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Étape 3 */}
          <Card className="border-kiween-green/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-kiween-green">
                <Video className="h-5 w-5" />
                Étape 3 : Ajouter votre vidéo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kiween-text leading-relaxed">
                Vous pouvez ajouter une vidéo de plusieurs façons dans votre actualité.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-kiween-green/20">
                  <h4 className="font-semibold text-kiween-green mb-2">Upload direct</h4>
                  <p className="text-sm text-kiween-text">
                    Téléchargez directement votre fichier vidéo depuis votre ordinateur
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-kiween-green/20">
                  <h4 className="font-semibold text-kiween-green mb-2">Lien externe</h4>
                  <p className="text-sm text-kiween-text">
                    Intégrez une vidéo depuis YouTube, Vimeo ou d'autres plateformes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Étape 4 */}
          <Card className="border-kiween-green/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-kiween-green">
                <Eye className="h-5 w-5" />
                Étape 4 : Prévisualisation et publication
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-kiween-text leading-relaxed">
                Avant de publier, utilisez la fonction de prévisualisation pour vérifier le rendu de votre actualité vidéo.
              </p>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Points de vérification :</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-700 text-sm">
                  <li>La vidéo se charge correctement</li>
                  <li>Le titre et la description sont affichés</li>
                  <li>La mise en page est optimisée pour mobile et desktop</li>
                  <li>Les paramètres de diffusion sont configurés</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Conseils */}
          <Card className="border-kiween-green/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-kiween-green">
                Conseils pour optimiser vos vidéos
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-kiween-green mb-3">Format et qualité</h4>
                  <ul className="space-y-2 text-sm text-kiween-text">
                    <li>• Utilisez des formats standards (MP4, MOV)</li>
                    <li>• Privilégiez une résolution HD (1080p)</li>
                    <li>• Optimisez la taille du fichier</li>
                    <li>• Vérifiez la compatibilité mobile</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-kiween-green mb-3">Engagement</h4>
                  <ul className="space-y-2 text-sm text-kiween-text">
                    <li>• Ajoutez une image de couverture attrayante</li>
                    <li>• Rédigez une description engageante</li>
                    <li>• Utilisez des mots-clés pertinents</li>
                    <li>• Planifiez la publication aux heures optimales</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gallery */}
          <Card className="border-kiween-green/20 shadow-elegant">
            <CardHeader>
              <CardTitle className="text-kiween-green">
                Captures d'écran du processus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Carousel className="w-full max-w-3xl mx-auto">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <div className="flex aspect-video items-center justify-center rounded-lg border border-kiween-green/20 bg-white overflow-hidden">
                          <img
                            src={image}
                            alt={`Étape ${index + 1} - Publier une vidéo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-center text-sm text-kiween-text/70 mt-2">
                          Étape {index + 1}
                        </p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}