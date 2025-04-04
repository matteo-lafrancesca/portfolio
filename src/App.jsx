import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Natation from "./pages/projets/Natation";
import VeillePage from "./pages/Veille"; // Import de la page Veille

const basename = import.meta.env.PROD ? "/portfolio" : "/";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projets/onswim" element={<Natation />} />
        <Route path="/veille" element={<VeillePage />} /> {/* Nouvelle route pour Veille */}
      </Routes>
    </Router>
  );
}

export default App;
