import React, { useState } from "react";
import Layout from "../../layouts/Layout";
// Importer les images
import veeamUsage from "/images/veeam_usage.jpg";
import codeBackup from "/images/code_backup.jpg";

const PlansSauvegardeVeeam = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Plans de Sauvegarde avec Veeam</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Découvrez comment j'utilise Veeam pour sauvegarder efficacement mes données personnelles et mes projets.
        </p>
      </div>

      {/* Section Utilisation de Veeam */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Utilisation de Veeam</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Veeam est une solution que j'ai adoptée pour gérer mes sauvegardes de manière fiable et automatisée. 
              Avec Veeam, je peux planifier des sauvegardes régulières de mes fichiers, qu'il s'agisse de mes données personnelles ou du code de mes projets. 
              L'interface intuitive de Veeam me permet de définir des politiques de sauvegarde adaptées et d'assurer la sécurité des données grâce à un chiffrement intégré.
            </p>
            <p className="text-neutral text-lg leading-relaxed">
              J'utilise Veeam pour effectuer des sauvegardes sur un disque dur externe ainsi que sur un cloud sécurisé. 
              Cette double sauvegarde garantit que mes données sont protégées contre les pertes accidentelles ou les défaillances matérielles.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(veeamUsage)}
            >
              <img
                src={veeamUsage}
                alt="Utilisation de Veeam"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Sauvegarde du Code des Projets */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Code des Projets</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Pour mes projets, j'utilise Git et GitHub pour gérer et versionner mon code. En complément, j'ai mis en place une sauvegarde locale via Veeam. 
              Cela me permet de conserver une copie de mes dépôts sur un disque dur externe en cas de problème avec la plateforme en ligne.
            </p>
            <p className="text-neutral text-lg leading-relaxed">
              Cette stratégie assure la sécurité et l'accessibilité de mon code, tout en garantissant une redondance qui est essentielle pour mes projets professionnels et personnels.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(codeBackup)}
            >
              <img
                src={codeBackup}
                alt="Sauvegarde du Code des Projets"
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

export default PlansSauvegardeVeeam;