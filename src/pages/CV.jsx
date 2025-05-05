import React from "react";
import Layout from "../layouts/Layout";

// Définir le chemin de base dynamiquement en fonction de l'environnement
const basePath = import.meta.env.PROD ? "/portfolio" : "/";

const CV = () => {
  const cvPath = `${basePath}cv.pdf`; // Construire le chemin complet vers le fichier CV

  return (
    <Layout>
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Mon CV</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed">
          Téléchargez mon CV en cliquant sur le bouton ci-dessous.
        </p>
        <a 
          href={cvPath} 
          className="btn btn-primary mt-4" 
          download="CV-Matteo-Lafrancesca.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Télécharger mon CV
        </a>
      </div>
    </Layout>
  );
};

export default CV;