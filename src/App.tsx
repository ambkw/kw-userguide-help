import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import Demarrer from "./pages/Demarrer";
import GuideExample from "./pages/GuideExample";
import Clients from "./pages/Clients";
import ImportEnMasse from "./pages/ImportEnMasse";
import GuideActualites from "./pages/GuideActualites";
import PublierUneVideo from "./pages/PublierUneVideo";
import GuideProduits from "./pages/GuideProduits";
import GererSesCodes from "./pages/GererSesCodes";
import ChangerAffichageCatalogue from "./pages/ChangerAffichageCatalogue";
import CreerFicheAbonnement from "./pages/CreerFicheAbonnement";
import GererPlusieursPrix from "./pages/GererPlusieursPrix";
import GestionStock from "./pages/GestionStock";
import GestionTransporteurs from "./pages/GestionTransporteurs";
import ImporterFichesProduits from "./pages/ImporterFichesProduits";
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
            <Route path="/guide/statistiques" element={<GuideExample />} />
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
