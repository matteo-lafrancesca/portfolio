import React, { useState } from "react";
import Layout from "../../layouts/Layout";

// Import des images
import revaPresentation from "/images/reva_presentation.jpg";
import revaConception from "/images/reva_conception.jpg";

const ApplicationMobile = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-teal-500 to-green-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Application Mobile - REVA</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Optimisez la gestion des maintenances dans le secteur du BTP avec REVA, une application innovante et intuitive qui simplifie votre quotidien professionnel.
        </p>
      </div>

      {/* Section Présentation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Présentation de REVA</h3>
            <p className="text-neutral text-lg leading-relaxed">
              L'application <span className="font-bold">REVA</span> optimise la gestion des maintenances dans le secteur du BTP grâce à des fonctionnalités avancées :
            </p>
            <ul className="list-disc list-inside text-neutral text-lg mt-4">
              <li>Technologie OCR pour scanner et ajouter vos notes de frais en un clin d'œil.</li>
              <li>Gestion simplifiée des interventions quotidiennes avec triage par géo-localisation.</li>
              <li>Optimisation des tournées et suivi des interventions.</li>
              <li>Soumission facile de vos congés et absences directement dans l'application.</li>
              <li>Une solution intuitive et efficace pour piloter votre activité professionnelle.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(revaPresentation)}
            >
              <img
                src={revaPresentation}
                alt="Présentation de l'application REVA"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Conception */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Conception et Évolution</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Pendant mon alternance, j'ai participé à la <span className="font-bold">conception</span> de l'application REVA en collaboration avec l'équipe de développement. Mon rôle s'est concentré sur l'analyse des besoins des utilisateurs et la définition des principales fonctionnalités.
            </p>
            <ul className="list-disc list-inside text-neutral text-lg mt-4">
              <li>Analyse des besoins des utilisateurs pour structurer les fonctionnalités essentielles.</li>
              <li>Collaboration avec l'équipe technique pour améliorer les services existants.</li>
              <li>Participation au déploiement et au suivi du service au sein de l'entreprise.</li>
              <li>Accompagnement des utilisateurs pour faciliter la prise en main de l'application.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(revaConception)}
            >
              <img
                src={revaConception}
                alt="Conception de l'application REVA"
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

export default ApplicationMobile;