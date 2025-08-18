import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import Demarrer from "./pages/Demarrer";
import GuideStatistiques from "./pages/GuideStatistiques";
import VoirStats from "./pages/statistiques/VoirStats";
import Clients from "./pages/GuideClients";
import ImportEnMasse from "./pages/clients/ImportEnMasse";
import GuideActualites from "./pages/GuideActualites";
import PublierUneVideo from "./pages/actualites/PublierUneVideo";
import GuideProduits from "./pages/GuideProduits";
import GererSesCodes from "./pages/produits/GererSesCodes";
import ChangerAffichageCatalogue from "./pages/produits/ChangerAffichageCatalogue";
import CreerFicheAbonnement from "./pages/produits/CreerFicheAbonnement";
import GererPlusieursPrix from "./pages/produits/GererPlusieursPrix";
import GestionStock from "./pages/produits/GestionStock";
import GestionTransporteurs from "./pages/produits/GestionTransporteurs";
import ImporterFichesProduits from "./pages/produits/ImporterFichesProduits";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demarrer" element={<Demarrer />} />
            <Route path="/guide/statistiques" element={<GuideStatistiques />} />
            <Route path="/guide/statistiques/voir-stats" element={<VoirStats />} />
            <Route path="/guide/clients" element={<Clients />} />
            <Route path="/guide/clients/import-en-masse" element={<ImportEnMasse />} />
            <Route path="/guide/actualites" element={<GuideActualites />} />
            <Route path="/guide/actualites/publier-une-video" element={<PublierUneVideo />} />
            <Route path="/guide/produits" element={<GuideProduits />} />
            <Route path="/guide/produits/gerer-ses-codes-promo" element={<GererSesCodes />} />
            <Route path="/guide/produits/changer-affichage-catalogue" element={<ChangerAffichageCatalogue />} />
            <Route path="/guide/produits/creer-fiche-abonnement" element={<CreerFicheAbonnement />} />
            <Route path="/guide/produits/gerer-plusieurs-prix" element={<GererPlusieursPrix />} />
            <Route path="/guide/produits/gestion-stock" element={<GestionStock />} />
            <Route path="/guide/produits/gestion-transporteurs" element={<GestionTransporteurs />} />
            <Route path="/guide/produits/importer-fiches-produits" element={<ImporterFichesProduits />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
