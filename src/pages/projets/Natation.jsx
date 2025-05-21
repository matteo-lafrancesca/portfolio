import React, { useState } from "react";
import Layout from "../../layouts/Layout";

import onswimDashboard from "/images/onswim_dashboard.jpg";
import onswimCoach from "/images/onswim_coach.jpg";
import onswimAthlete from "/images/onswim_athlete.jpg";

const Onswim = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">OnSwim : Gestion sportive pour nageurs & coachs</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          OnSwim est une plateforme web intuitive qui optimise la gestion et le suivi des entraînements de natation, aussi bien pour les coachs que pour les athlètes.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="http://onswim.aftres.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white text-cyan-600 font-semibold shadow-md hover:bg-cyan-100 transition"
          >
            Accéder au site
          </a>
          <a
            href="https://gitlab.com/Magalfu/natation"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-cyan-700 text-white font-semibold shadow-md hover:bg-cyan-800 transition"
          >
            Voir le code sur GitLab
          </a>
        </div>
      </div>

      {/* Section Présentation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Qu'est-ce que OnSwim ?</h3>
            <p className="text-neutral text-lg leading-relaxed">
              OnSwim facilite la création, l’assignation et le suivi de programmes d’entraînement pour la natation.
              Les coachs peuvent créer des exercices personnalisés et suivre la progression de leurs nageurs,
              tandis que les sportifs consultent leurs séances, valident leurs exercices et reçoivent un retour sur leur évolution.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(onswimDashboard)}
            >
              <img
                src={onswimDashboard}
                alt="Dashboard OnSwim"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Public cible */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(onswimCoach)}
            >
              <img
                src={onswimCoach}
                alt="Coach OnSwim"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-primary mb-4">Pour qui ?</h3>
            <ul className="list-disc list-inside text-neutral text-lg">
              <li><span className="font-bold">Coachs de natation</span> : Création, gestion et suivi des programmes d’entraînement.</li>
              <li><span className="font-bold">Athlètes</span> : Consultation et validation des séances assignées, suivi des progrès.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités principales */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h3 className="text-3xl font-bold text-primary mb-4">Fonctionnalités principales</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <ul className="list-disc list-inside text-neutral text-lg mt-2">
              <li>Création de programmes et exercices personnalisés</li>
              <li>Assignation de séances à chaque athlète</li>
              <li>Liaison via un code coach pour intégrer un groupe</li>
              <li>Validation et suivi des séances par les athlètes</li>
              <li>Feedback direct entre coachs et nageurs</li>
              <li>Interface claire et accessible sur mobile</li>
            </ul>
            <div className="flex justify-center">
              <div
                className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
                onClick={() => openModal(onswimAthlete)}
              >
                <img
                  src={onswimAthlete}
                  alt="Athlète OnSwim"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Technologies */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Technologies utilisées</h3>
            <ul className="list-disc list-inside text-lg text-neutral mt-2">
              <li>Laravel (backend PHP robuste)</li>
              <li>TailwindCSS & DaisyUI (UI moderne et responsive)</li>
              <li>SQLite (base de données légère)</li>
              <li>Composer (gestionnaire de dépendances PHP)</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(onswimTech)}
            >
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

export default Onswim;