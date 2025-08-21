import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import { Layout } from "@/components/Layout";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "./pages/Home";
import Demarrer from "./pages/Demarrer";

import GuideActualites from "./pages/GuideActualites";
import PublierUneVideo from "./pages/actualites/PublierUneVideo";

import GuideApparence from "./pages/GuideApparence";
import ModifierApparenceSite from "./pages/apparence/ModifierApparenceSite";
import ReorganiserPages from "./pages/apparence/ReorganiserPages";

import GuideClients from "./pages/GuideClients";
import ImportEnMasse from "./pages/clients/ImportEnMasse";

import GuideCommandes from "./pages/GuideCommandes";
import GererSesCommandes from "./pages/commandes/GererSesCommandes";
import ImpossibleDePasserCommande from "./pages/commandes/ImpossibleDePasserCommande";

import GuideProduits from "./pages/GuideProduits";
import GererSesCodes from "./pages/produits/GererSesCodes";
import ChangerAffichageCatalogue from "./pages/produits/ChangerAffichageCatalogue";
import CreerFicheAbonnement from "./pages/produits/CreerFicheAbonnement";
import GererPlusieursPrix from "./pages/produits/GererPlusieursPrix";
import GestionStock from "./pages/produits/GestionStock";
import GestionTransporteurs from "./pages/produits/GestionTransporteurs";
import ImporterFichesProduits from "./pages/produits/ImporterFichesProduits";

import GuideStatistiques from "./pages/GuideStatistiques";
import VoirStats from "./pages/statistiques/VoirStats";

import NotFound from "./pages/NotFound";

const Router = typeof window !== 'undefined' ? BrowserRouter : StaticRouter;

const queryClient = new QueryClient();

const App = ({ url }: { url?: string }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Router location={url}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demarrer" element={<Demarrer />} />

            <Route path="/guide/actualites" element={<GuideActualites />} />
            <Route path="/guide/actualites/publier-une-video" element={<PublierUneVideo />} />

            <Route path="/guide/apparence" element={<GuideApparence />} />
            <Route path="/guide/apparence/modifier-apparence-site" element={<ModifierApparenceSite />} />
            <Route path="/guide/apparence/reorganiser-pages" element={<ReorganiserPages />} />

            <Route path="/guide/clients" element={<GuideClients />} />
            <Route path="/guide/clients/import-en-masse" element={<ImportEnMasse />} />

            <Route path="/guide/commandes" element={<GuideCommandes />} />
            <Route path="/guide/commandes/gerer-ses-commandes" element={<GererSesCommandes />} />
            <Route path="/guide/commandes/impossible-de-passer-commande" element={<ImpossibleDePasserCommande />} />

            <Route path="/guide/produits" element={<GuideProduits />} />
            <Route path="/guide/produits/gerer-ses-codes-promo" element={<GererSesCodes />} />
            <Route path="/guide/produits/changer-affichage-catalogue" element={<ChangerAffichageCatalogue />} />
            <Route path="/guide/produits/creer-fiche-abonnement" element={<CreerFicheAbonnement />} />
            <Route path="/guide/produits/gerer-plusieurs-prix" element={<GererPlusieursPrix />} />
            <Route path="/guide/produits/gestion-stock" element={<GestionStock />} />
            <Route path="/guide/produits/gestion-transporteurs" element={<GestionTransporteurs />} />
            <Route path="/guide/produits/importer-fiches-produits" element={<ImporterFichesProduits />} />

            <Route path="/guide/statistiques" element={<GuideStatistiques />} />
            <Route path="/guide/statistiques/voir-stats" element={<VoirStats />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
