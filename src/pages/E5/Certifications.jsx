import React, { useState } from "react";
import Layout from "../../layouts/Layout";

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const rgpdImages = [
    "/images/attestation_rgpd_1.jpg",
    "/images/attestation_rgpd_2.jpg",
    "/images/attestation_rgpd_3.jpg",
    "/images/attestation_rgpd_4.jpg",
    "/images/attestation_rgpd_5.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage("");
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rgpdImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? rgpdImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <Layout>
      {/* En-tête principale */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Voici une présentation des certifications que j'ai obtenues, comprenant des formations en cybersécurité, RGPD et réseaux.
        </p>
      </div>

      {/* Section MOOC ANSSI */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">MOOC de l'ANSSI</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'ai suivi les cours en ligne proposés par l'ANSSI (Agence Nationale de la Sécurité des Systèmes d'Information), me permettant d'acquérir des compétences clés en cybersécurité. Ces MOOC couvrent des sujets tels que la protection des données, la sécurisation des systèmes d'information et la gestion des risques numériques.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal("/images/attestation_mooc_annsi.jpg")}
            >
              <img
                src="/images/attestation_mooc_annsi.jpg"
                alt="Attestation MOOC ANSSI"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Atelier RGPD CNIL */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Atelier RGPD de la CNIL</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'ai participé à l'atelier RGPD (Règlement Général sur la Protection des Données) organisé par la CNIL (Commission Nationale de l'Informatique et des Libertés). Cette formation m'a permis de mieux comprendre les obligations légales et les bonnes pratiques pour garantir la conformité des traitements de données personnelles.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer">
              <img
                src={rgpdImages[currentImageIndex]}
                alt={`Attestation RGPD ${currentImageIndex + 1}`}
                className="w-full object-contain"
                onClick={() => openModal(rgpdImages[currentImageIndex])}
              />
              <div className="flex justify-between items-center mt-4">
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    previousImage();
                  }}
                >
                  ◀ Précédent
                </button>
                <p className="text-neutral text-center">
                  {currentImageIndex + 1} / {rgpdImages.length}
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                >
                  Suivant ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Certification Cisco NetAcad */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Certification Cisco sur NetAcad</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'ai obtenu une certification Cisco via la plateforme NetAcad, qui propose des formations de référence dans le domaine des réseaux. Cette certification valide mes compétences en configuration réseau, gestion des équipements Cisco et résolution de problèmes liés à l'infrastructure réseau.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal("/images/attestation_cisco_netacad.jpg")}
            >
              <img
                src="/images/attestation_cisco_netacad.jpg"
                alt="Attestation Cisco NetAcad"
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
              alt="Certification en grand"
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

export default Certifications;