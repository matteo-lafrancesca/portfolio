import React, { useState } from "react";
import Layout from "../../layouts/Layout";

const AmeliorationSiteWeb = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setIsModalOpen(false);
  };

  return (
    <Layout>
      {/* En-tête principale */}
      <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-blue-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Amélioration du site web de l'entreprise</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Modernisation du design et optimisation du back-end pour améliorer l'expérience utilisateur et la gestion des données, en collaboration avec l'équipe.
        </p>
        <a
          href="https://lepage-electronique.com"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4"
        >
          Voir le site web de l'entreprise
        </a>
      </div>

      {/* Section Modernisation du Design */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Modernisation du Design</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Nous avons entrepris une refonte complète du front-end pour moderniser le design du site web. Ce travail a inclus 
              la mise à jour de l'apparence visuelle avec des styles modernes, la création d'une interface utilisateur plus intuitive, 
              et l'optimisation de la compatibilité pour les appareils mobiles. Ces changements ont permis de valoriser l'image en ligne 
              de l'entreprise tout en offrant une meilleure expérience utilisateur.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal("/images/design_modernization.jpg")}
            >
              <img
                src="/images/design_modernization.jpg"
                alt="Modernisation du Design"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Optimisation du Back-End */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Optimisation du Back-End</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Nous avons optimisé le traitement des données sur le back-end en réorganisant le code pour le rendre plus maintenable. 
              Une attention particulière a été portée à la gestion des comptes utilisateurs, avec des améliorations au niveau de la 
              sécurité et de la performance des fonctionnalités liées, telles que l'authentification, la récupération de mot de passe, 
              et la gestion des profils. Ces optimisations, réalisées en collaboration, garantissent une meilleure stabilité et une gestion des données plus efficace.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal("/images/backend_optimization.jpg")}
            >
              <img
                src="/images/backend_optimization.jpg"
                alt="Optimisation du Back-End"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal pour afficher les images en grand */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Image en grand"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center"
              onClick={closeModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AmeliorationSiteWeb;