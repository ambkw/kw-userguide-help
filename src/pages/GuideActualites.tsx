import { Search, FileText, Settings, Share2, Facebook, Instagram, Video } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  {
    title: "Créer une actualité",
    description: "Apprenez à créer et publier vos actualités",
    icon: FileText,
    url: "/guide/actualites/creer-actualite",
    category: "Gestion de contenu",
    keywords: ["actualité", "créer", "publier", "contenu", "article", "news"]
  },
  {
    title: "Personnaliser une actualité par média",
    description: "Adaptez vos actualités selon les différents supports",
    icon: Settings,
    url: "/guide/actualites/personnaliser-media",
    category: "Gestion de contenu", 
    keywords: ["personnaliser", "média", "adaptation", "format", "customisation"]
  },
  {
    title: "Synchroniser ses réseaux sociaux pour la multi-diffusion",
    description: "Configurez la diffusion automatique sur vos réseaux",
    icon: Share2,
    url: "/guide/actualites/synchroniser-reseaux",
    category: "Réseaux sociaux",
    keywords: ["synchronisation", "réseaux sociaux", "multi-diffusion", "automatique", "partage"]
  },
  {
    title: "Synchroniser sa page Facebook",
    description: "Connectez et configurez votre page Facebook",
    icon: Facebook,
    url: "/guide/actualites/synchroniser-facebook",
    category: "Réseaux sociaux",
    keywords: ["facebook", "synchronisation", "page", "connexion", "social media"]
  },
  {
    title: "Synchroniser son compte Instagram",
    description: "Connectez et configurez votre compte Instagram",
    icon: Instagram,
    url: "/guide/actualites/synchroniser-instagram", 
    category: "Réseaux sociaux",
    keywords: ["instagram", "synchronisation", "compte", "connexion", "social media"]
  },
  {
    title: "Publier une vidéo",
    description: "Guide complet pour publier des vidéos dans vos actualités",
    icon: Video,
    url: "/guide/actualites/publier-une-video",
    category: "Gestion de contenu",
    keywords: ["vidéo", "publier", "upload", "multimédia", "contenu vidéo"]
  }
];

export default function GuideActualites() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFeatures = features.filter(feature => {
    const searchLower = searchTerm.toLowerCase();
    return (
      feature.title.toLowerCase().includes(searchLower) ||
      feature.description.toLowerCase().includes(searchLower) ||
      feature.category.toLowerCase().includes(searchLower) ||
      feature.keywords.some(keyword => keyword.toLowerCase().includes(searchLower))
    );
  });

  const categories = [...new Set(filteredFeatures.map(feature => feature.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-kiween-light-green/20 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-kiween-green to-kiween-dark-green bg-clip-text text-transparent mb-4">
            Guide Actualités
          </h1>
          <p className="text-xl text-kiween-text/80 max-w-2xl mx-auto leading-relaxed">
            Découvrez comment créer, personnaliser et diffuser vos actualités sur tous vos canaux de communication
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -y-1/2 h-5 w-5 text-kiween-green/60" />
            <Input
              type="text"
              placeholder="Rechercher un guide..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg border-kiween-green/20 focus:border-kiween-green focus:ring-kiween-green/20 bg-white/80 backdrop-blur-sm"
            />
          </div>
        </div>

        <div className="space-y-16">
          {categories.map((category) => (
            <section key={category} className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-kiween-green mb-2">
                  {category}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-kiween-green to-kiween-dark-green mx-auto rounded-full"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFeatures
                  .filter(feature => feature.category === category)
                  .map((feature) => (
                    <FeatureCard key={feature.url} {...feature} />
                  ))}
              </div>
            </section>
          ))}
        </div>

        {filteredFeatures.length === 0 && (
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-kiween-light-green to-kiween-green/20 rounded-full flex items-center justify-center">
              <Search className="h-16 w-16 text-kiween-green/60" />
            </div>
            <h3 className="text-xl font-semibold text-kiween-text mb-2">
              Aucun résultat trouvé
            </h3>
            <p className="text-kiween-text/60">
              Essayez de modifier votre recherche ou parcourez toutes les fonctionnalités
            </p>
          </div>
        )}
      </div>
    </div>
  );
}