import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import E5 from "./pages/E5";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Natation from "./pages/projets/Natation";
import Memomix from "./pages/projets/Memomix";
import Veille from "./pages/Veille";
import GestionRolesAuth from "./pages/E5/GestionRolesAuth";
import TicketingTrelloGitGLPI from "./pages/E5/TicketingTrelloGitGLPI";
import PlansSauvegardeVeeam from "./pages/E5/PlansSauvegardeVeeam";
import DiagrammesUMLGantt from "./pages/E5/DiagrammesUMLGantt";
import TestsPHPUnit from "./pages/E5/TestsPHPUnit";
import WikiReadmeGit from "./pages/E5/WikiReadmeGit";
import ProfilLinkedIn from "./pages/E5/ProfilLinkedIn";
import Certifications from "./pages/E5/Certifications";
import ApplicationMobile from "./pages/projets/ApplicationMobile"; // Nouvelle importation
import Ticketing from "./pages/E5/TicketingTrelloGitGLPI"; // Importation pour la nouvelle page Ticketing
import AmeliorationSiteWeb from "./pages/E5/AmeliorationSiteWeb";
import Mattebot from "./pages/projets/Mattebot";
import DungeonDefender from "./pages/projets/DungeonDefenderRoyale2";


const basename = import.meta.env.PROD ? "/portfolio" : "/";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/E5" element={<E5 />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projets/onswim" element={<Natation />} />
        <Route path="/projets/memomix" element={<Memomix />} />
        <Route path="/projets/mattebot" element={<Mattebot />} />
        <Route path="/projets/dungeon-defender" element={<DungeonDefender />} />
        <Route path="/veille" element={<Veille />} />
        <Route path="/E5/gestion-roles-auth" element={<GestionRolesAuth />} />
        <Route path="/E5/ticketing-trello-git-glpi" element={<TicketingTrelloGitGLPI />} />
        <Route path="/E5/plans-sauvegarde-veeam" element={<PlansSauvegardeVeeam />} />
        <Route path="/E5/diagrammes-uml-mcd" element={<DiagrammesUMLGantt />} />
        <Route path="/E5/tests-phpunit" element={<TestsPHPUnit />} />
        <Route path="/E5/wiki-readme-git" element={<WikiReadmeGit />} />
        <Route path="/E5/profil-linkedin" element={<ProfilLinkedIn />} />
        <Route path="/E5/certifications" element={<Certifications />} />
        <Route path="/projets/application-mobile" element={<ApplicationMobile />} />
        <Route path="/E5/ticketing" element={<Ticketing />} />
        <Route path="/E5/amelioration-site-web" element={<AmeliorationSiteWeb />} />
      </Routes>
    </Router>
  );
}

export default App;