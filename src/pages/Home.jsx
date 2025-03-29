import React from "react";
import Layout from "../layouts/Layout";
import illustration from "../assets/images/illustration.jpg"; // Assure-toi d'avoir l'image dans `src/assets/images/`

const Home = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Texte d'introduction */}
          <div className="max-w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Bienvenue sur mon Portfolio
            </h2>
            <p className="text-lg text-neutral mt-4 leading-relaxed">
              Je m'appelle <span className="text-secondary font-semibold">Mattéo Lafrancesca</span>, j'ai 20 ans et je prépare un{" "}
              <span className="text-secondary font-semibold">BTS SIO</span>. Passionné par le{" "}
              <span className="text-secondary font-semibold">développement web</span>, je souhaite poursuivre mes études avec un{" "}
              <span className="text-secondary font-semibold">Bachelor en développement web</span> afin de perfectionner mes compétences et concrétiser mes projets.
            </p>
            <div className="mt-6">
              <a href="/projets" className="btn btn-primary btn-lg">
                Découvrir mes projets
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img src={illustration} alt="Illustration" className="rounded-lg" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
