import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projets from "./pages/Projets";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import Natation from "./pages/projets/Natation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/projets/onswim" element={<Natation />} />
      </Routes>
    </Router>
  );
}

export default App;