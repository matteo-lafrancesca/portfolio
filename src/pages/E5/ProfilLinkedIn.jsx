import React, { useState } from "react";
import Layout from "../../layouts/Layout";
// Importation des images
import linkedinProfile from "/images/linkedin_profile.jpg";
import linkedinConnect from "/images/linkedin_connect.jpg";

const ProfilLinkedIn = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Profil LinkedIn</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Découvrez mon profil LinkedIn, qui met en avant mes expériences professionnelles, mes compétences et mes accomplissements.
        </p>
        <a
          href="https://www.linkedin.com/in/mattéo-lafrancesca/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-4"
        >
          Voir mon profil LinkedIn
        </a>
      </div>

      {/* Section Présentation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Une Présence Professionnelle</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Mon profil LinkedIn est une vitrine de mon parcours professionnel et de mes compétences. Il inclut :
            </p>
            <ul className="list-disc list-inside text-neutral text-lg mt-4">
              <li>
                <span className="font-bold">Mes expériences professionnelles</span>, avec des détails sur mes rôles et responsabilités.
              </li>
              <li>
                <span className="font-bold">Mes compétences</span>, validées par mes collègues et contacts.
              </li>
              <li>
                <span className="font-bold">Mes certifications</span>, mettant en avant mes qualifications dans divers domaines.
              </li>
              <li>
                <span className="font-bold">Mes projets</span>, avec des descriptions détaillées et des résultats obtenus.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(linkedinProfile)}
            >
              <img
                src={linkedinProfile}
                alt="Profil LinkedIn"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Raison de la Présence */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Pourquoi LinkedIn ?</h3>
            <p className="text-neutral text-lg leading-relaxed">
              LinkedIn est une plateforme idéale pour :
            </p>
            <ul className="list-disc list-inside text-neutral text-lg mt-4">
              <li>
                <span className="font-bold">Réseauter</span> avec des professionnels de divers secteurs.
              </li>
              <li>
                <span className="font-bold">Partager mes projets</span> et mes réalisations avec un public plus large.
              </li>
              <li>
                <span className="font-bold">Découvrir des opportunités</span> professionnelles et collaboratives.
              </li>
              <li>
                <span className="font-bold">Maintenir une présence en ligne</span> professionnelle et active.
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(linkedinConnect)}
            >
              <img
                src={linkedinConnect}
                alt="Réseautage sur LinkedIn"
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

export default ProfilLinkedIn;