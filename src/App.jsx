import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import E5 from "./pages/E5";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Natation from "./pages/projets/Natation";
import Memomix from "./pages/projets/Memomix"; // Importer Memomix
import Veille from "./pages/Veille";

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
        <Route path="/projets/memomix" element={<Memomix />} /> {/* Nouvelle route */}
        <Route path="/veille" element={<Veille />} />
      </Routes>
    </Router>
  );
}

export default App;