import React, { useState } from "react";
import Layout from "../../layouts/Layout";

// Remplace ces chemins par tes propres captures/screenshots du jeu :
import ddr2Banner from "/images/ddr2_banner.jpg";
import ddr2Gameplay from "/images/ddr2_gameplay.jpg";
import ddr2Shop from "/images/ddr2_shop.jpg";
import ddr2Enemies from "/images/ddr2_enemies.jpg";
import ddr2Towers from "/images/ddr2_towers.jpg";

const DungeonDefenderRoyale2 = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-emerald-700 to-blue-800 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Dungeon Defender Royale 2</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Un jeu de tower defense  réalisé sous Pygame : défendez votre donjon contre des vagues d’ennemis en plaçant stratégiquement vos tours !
        </p>
        <div className="flex justify-center gap-4 mt-8">
          <a
            href="https://youtu.be/LM11CCM507M"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-white text-emerald-700 font-semibold shadow-md hover:bg-emerald-100 transition"
          >
            Voir la vidéo de Présentation
          </a>
        </div>
      </div>

      {/* Présentation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Le concept du jeu</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Sur une carte en 2D, des vagues d’ennemis progressent le long d’un chemin vers votre donjon. Achetez différentes tours dans la boutique et placez-les autour du chemin pour les empêcher d’atteindre votre base. Si des ennemis atteignent le donjon, vous perdez des points de vie. Survivez à toutes les vagues pour remporter la victoire !
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(ddr2Banner)}
            >
              <img
                src={ddr2Banner}
                alt="Bannière Dungeon Defender Royale 2"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gameplay & Boutique */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Gameplay */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-primary mb-2">Comment jouer ?</h3>
            <p className="text-neutral text-lg">
              - Placez des tours autour du chemin.<br />
              - Les ennemis apparaissent par vagues et suivent le chemin vers votre donjon.<br />
              - Achetez des tours dans la boutique en utilisant les pièces que vous gagnez passivement ou en éliminant des ennemis.<br />
              - Si un ennemi atteint le donjon, vous perdez des points de vie.<br />
              - La partie est perdue si vous n’avez plus de vie ; remportez la victoire si vous survivez à toutes les vagues !
            </p>
          </div>
          {/* Image Gameplay */}
          <div className="flex flex-col gap-4">
            <div
              className="rounded-lg shadow-lg overflow-hidden aspect-[16/9] cursor-pointer"
              onClick={() => openModal(ddr2Gameplay)}
            >
              <img
                src={ddr2Gameplay}
                alt="Gameplay Dungeon Defender Royale 2"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="rounded-lg shadow-lg overflow-hidden aspect-[16/9] cursor-pointer"
              onClick={() => openModal(ddr2Shop)}
            >
              <img
                src={ddr2Shop}
                alt="Boutique Dungeon Defender Royale 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tours et Ennemis */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Tours */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Les tours disponibles</h3>
            <ul className="list-disc list-inside text-neutral text-lg">
              <li>
                <b>Tour Arc (100 pièces)</b> : Tire des flèches à cadence normale.
              </li>
              <li>
                <b>Tour Chaudron (200 pièces)</b> : Lance des boulets de canon infligeant des dégâts de zone.
              </li>
              <li>
                <b>Tour Foudre (300 pièces)</b> : Tire des éclairs très rapidement sur les ennemis.
              </li>
            </ul>
          </div>
          {/* Image Tours */}
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(ddr2Towers)}
            >
              <img
                src={ddr2Towers}
                alt="Tours du jeu"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ennemis */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Ennemis */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-2">Types d’ennemis</h3>
            <ul className="list-disc list-inside text-neutral text-lg">
              <li>
                <b>Gobelin</b> : Peu de points de vie, vitesse normale, faibles dégâts au donjon.
              </li>
              <li>
                <b>Sorcière</b> : Plus résistante que le gobelin, invoque périodiquement des souris.
              </li>
              <li>
                <b>Souris</b> : Très rapide, très faible en vie et en dégâts.
              </li>
              <li>
                <b>Chevalier</b> : Beaucoup de points de vie, dégâts élevés, vitesse normale.
              </li>
              <li>
                <b>Géant</b> : Immenses points de vie et dégâts colossaux, mais se déplace lentement.
              </li>
            </ul>
          </div>
          {/* Image Ennemis */}
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(ddr2Enemies)}
            >
              <img
                src={ddr2Enemies}
                alt="Ennemis du jeu"
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
              alt="Agrandissement"
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

export default DungeonDefenderRoyale2;