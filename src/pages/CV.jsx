import React from "react";
import Layout from "../layouts/Layout";

// Pour un déploiement dans un sous-dossier comme /portfolio
const basePath = import.meta.env.PROD ? "/portfolio" : "/";
const cvPath = `${basePath}cv.pdf`;

const CV = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center w-full min-h-screen bg-base-100">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-8">Mon CV</h2>
        <p className="text-lg text-neutral mt-4 mb-2 leading-relaxed">
          Visualisez mon CV ci-dessous&nbsp;:
        </p>
        <div
          className="flex justify-center items-center w-full"
          style={{
            width: "100vw",
            height: "calc(2 * (100vh - 160px))", // Hauteur doublée
            maxWidth: "100vw",
            overflow: "hidden",
          }}
        >
          <iframe
            src={cvPath}
            title="CV Matteo Lafrancesca"
            width="90%"
            height="200%"
            style={{
              minHeight: "1200px", // Hauteur doublée
              minWidth: "500px",
              width: "50vw",
              height: "1200px", // Hauteur doublée
              border: "none",
              boxShadow: "0 0 16px rgba(0,0,0,0.1)",
              background: "#fff",
            }}
            allowFullScreen
          />
        </div>
      </div>
    </Layout>
  );
};

export default CV;