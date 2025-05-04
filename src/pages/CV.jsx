import React from "react";
import Layout from "../layouts/Layout";

const CV = () => {
  // Le chemin vers votre fichier CV
  const cvPath = "/cv.pdf"; // Assurez-vous que le fichier est dans le dossier public
  
  return (
    <Layout>
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Mon CV</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed">Téléchargez mon CV en cliquant sur le bouton ci-dessous.</p>
        <a 
          href={cvPath} 
          className="btn btn-primary mt-4" 
          download 
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