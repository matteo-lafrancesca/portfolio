import React, { useState } from "react";
import Layout from "../../layouts/Layout";

// Remplace ces chemins par les images/captures de ton bot
import mattebotBanner from "/images/mattebot_banner.jpg";
import mattebotRoles from "/images/mattebot_roles.jpg";
import mattebotWelcome from "/images/mattebot_welcome.jpg";
import mattebotCommands from "/images/mattebot_commands.jpg";
import mattebotTech from "/images/mattebot_tech.jpg";

const Mattebot = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Mattébot : Bot Discord polyvalent</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Mattébot est un bot Discord développé avec Node.js et discord.js pour enrichir et automatiser la gestion des serveurs Discord.
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://github.com/matteo-lafrancesca/Bot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold shadow-md hover:bg-blue-100 transition"
          >
            Voir le code sur GitHub
          </a>
        </div>
      </div>

      {/* Présentation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Qu'est-ce que Mattébot&nbsp;?</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Mattébot est un bot Discord polyvalent qui automatise la gestion des rôles, personnalise l'accueil des nouveaux membres et propose des commandes interactives pour améliorer l'expérience sur votre serveur Discord.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(mattebotBanner)}
            >
              <img
                src={mattebotBanner}
                alt="Mattébot Discord"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fonctionnalités principales */}
        <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
            <h3 className="text-3xl font-bold text-primary mb-4">Fonctionnalités principales</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Liste des fonctionnalités à gauche */}
            <ul className="list-disc list-inside text-neutral text-lg mt-2">
                <li>
                <span className="font-semibold">Gestion des rôles par réaction :</span>
                Les utilisateurs peuvent réagir à un message pour obtenir ou retirer un rôle.
                </li>
                <li>
                <span className="font-semibold">Message d'accueil personnalisé :</span>
                Le bot envoie automatiquement un message de bienvenue lorsqu'un nouveau membre rejoint le serveur.
                </li>
                <li>
                <span className="font-semibold">Création de salon vocal temporaire :</span>
                Le bot crée des salons vocaux lorsqu'un utilisateur rejoint le salon vocal principal.
                </li>
            </ul>

            {/* Images fonctionnalités à droite */}
            <div className="flex flex-col gap-4 w-full max-w-lg mx-auto">
                {/* Grande image en haut */}
                <div className="rounded-lg shadow-lg overflow-hidden aspect-[16/9]">
                <img
                    src={mattebotRoles}
                    alt="Gestion des rôles par réaction"
                    className="w-full h-full object-cover"
                />
                </div>
                {/* Deux petites images en dessous, côte à côte */}
                <div className="flex gap-4">
                <div className="flex-1 rounded-lg shadow-lg overflow-hidden aspect-[16/9]">
                    <img
                    src={mattebotWelcome}
                    alt="Message d'accueil"
                    className="w-full h-full object-cover"
                    />
                </div>
                <div className="flex-1 rounded-lg shadow-lg overflow-hidden aspect-[16/9]">
                    <img
                    src={mattebotCommands}
                    alt="Commandes personnalisées"
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

      {/* Technologies utilisées */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Technologies utilisées</h3>
            <ul className="list-disc list-inside text-lg text-neutral mt-2">
              <li>Node.js</li>
              <li>discord.js</li>
              <li>Hébergé sur un serveur dédié ou cloud</li>
            </ul>
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

export default Mattebot;