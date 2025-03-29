import React from "react";
import Layout from "../layouts/Layout";

const CV = () => {
  // Vous devrez ajuster le chemin vers votre CV selon votre configuration
  const cvPath = "/cv.pdf";
  
  return (
    <Layout>
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Mon CV</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed">Téléchargez mon CV en cliquant sur le lien ci-dessous.</p>
        <a href={cvPath} className="btn btn-primary mt-4" download>Télécharger mon CV</a>
      </div>
    </Layout>
  );
};

export default CV;