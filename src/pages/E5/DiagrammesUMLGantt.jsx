import React, { useState } from "react";
import Layout from "../../layouts/Layout";
// Importer les images
import useCaseDiagram from "/images/use_case_diagram.jpg";
import mcdDiagram from "/images/mcd_diagram.jpg";

const DiagrammesUML = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Diagrammes UML</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Analysez et structurez vos projets grâce aux diagrammes UML, notamment les diagrammes de cas d'utilisation et les MCD.
        </p>
      </div>

      {/* Section Diagrammes de Cas d'Utilisation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Diagrammes de Cas d'Utilisation</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Les diagrammes de cas d'utilisation sont essentiels pour identifier les acteurs et leurs interactions avec le système. Voici les étapes importantes que j'ai suivies :
            </p>
            <ul className="list-disc list-inside text-neutral text-lg mt-4">
              <li>
                <span className="font-bold">Analyse des objectifs</span> pour comprendre les besoins des utilisateurs.
              </li>
              <li>
                <span className="font-bold">Identification des acteurs</span> et des cas d'utilisation pour structurer les fonctionnalités principales.
              </li>
              <li>
                <span className="font-bold">Modélisation visuelle</span> pour représenter clairement les interactions entre les acteurs et le système.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(useCaseDiagram)}
            >
              <img
                src={useCaseDiagram}
                alt="Diagramme de Cas d'Utilisation"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Diagrammes MCD */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Diagrammes MCD</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Les Modèles Conceptuels de Données (MCD) sont utilisés pour représenter les entités, leurs attributs, et les relations entre elles. Lors de mes projets, j'ai réalisé :
            </p>
            <ul className="list-disc list-inside text-neutral text-lg mt-4">
              <li>
                <span className="font-bold">Identification des entités</span> clés et de leurs attributs.
              </li>
              <li>
                <span className="font-bold">Définition des relations</span> entre les entités pour structurer la base de données.
              </li>
              <li>
                <span className="font-bold">Modélisation visuelle</span> pour assurer une compréhension claire et partagée de la structure des données.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(mcdDiagram)}
            >
              <img
                src={mcdDiagram}
                alt="Diagramme MCD"
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

export default DiagrammesUML;