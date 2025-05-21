import React, { useState } from "react";
import Layout from "../../layouts/Layout";
import memomixGame from "/images/memomix_game.jpg";

// Import des images des cartes spéciales
import cardCrane from "/images/cards/carte_crane.png";
import cardSirene from "/images/cards/carte_mermaid.png";
import cardCyclone from "/images/cards/carte_cyclone.png";
import cardDemon from "/images/cards/carte_demon.png";
import cardTime from "/images/cards/carte_chronometre.png";
import cardEye from "/images/cards/carte_eye.png";
import cardTresor from "/images/cards/carte_treasure.png";
import cardJackpot from "/images/cards/carte_jackpot.png";

const Memomix = () => {
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
    <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Memomix : Jeu de mémoire ludique</h2>
      <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
        Memomix est un jeu interactif conçu pour améliorer vos capacités de mémoire tout en vous divertissant.
      </p>
      <div className="flex justify-center mt-8">
        <a
          href="https://github.com/matteo-lafrancesca/memory"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg bg-white text-pink-600 font-semibold shadow-md hover:bg-pink-100 transition"
        >
          Voir le code sur GitHub
        </a>
      </div>
    </div>

      {/* Section Présentation du jeu */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Présentation du jeu</h3>
            <ul className="list-disc list-inside text-neutral text-lg mt-4 leading-relaxed">
              <li>Reliez les cartes identiques ensemble pour gagner la partie.</li>
              <li>Des <span className="text-secondary font-semibold">cartes spéciales</span> ajoutent des effets et des règles uniques.</li>
              <li>Système de score basé sur le temps et le nombre de coups.</li>
              <li>Classement en ligne permettant de comparer vos scores avec d'autres joueurs.</li>
              <li>Système d'authentification pour sauvegarder vos scores et consulter vos statistiques.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(memomixGame)}
            >
              <img
                src={memomixGame}
                alt="Memomix Gameplay"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Cartes Spéciales */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">Cartes Spéciales</h3>
          <p className="text-lg text-neutral mt-4 text-center">
            Découvrez les cartes spéciales qui ajoutent une dimension stratégique au jeu.
          </p>

          {/* Première Rangée de Cartes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardCrane)}>
                <img src={cardCrane} alt="Carte Mélange" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Crane</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardSirene)}>
                <img src={cardSirene} alt="Carte Points" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Sirène</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardCyclone)}>
                <img src={cardCyclone} alt="Carte Perte" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Cyclone</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardDemon)}>
                <img src={cardDemon} alt="Carte Règles Modifiées" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Démon</p>
            </div>
          </div>

          {/* Descriptions des Cartes de la Première Rangée */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Crane :</span> Met fin à la partie!
            </p>
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Cyclone :</span> Toutes les cartes sont mélangées!
            </p>
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Sirène :</span> Le joueur doit réussir à réunir deux cartes identiques au coup suivant, sinon c'est perdu!
            </p>
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Démon :</span> Divise le nombre de points du joueur par deux!
            </p>
          </div>

          {/* Deuxième Rangée de Cartes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardTime)}>
                <img src={cardTime} alt="Carte Temps" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Temps</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardEye)}>
                <img src={cardEye} alt="Carte Gel" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Oeil</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardTresor)}>
                <img src={cardTresor} alt="Carte Mouvement Supplémentaire" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Trésor</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-lg shadow-md overflow-hidden w-32 h-32 cursor-pointer" onClick={() => openModal(cardJackpot)}>
                <img src={cardJackpot} alt="Carte Révélation" className="w-full h-full object-cover" />
              </div>
              <p className="text-center text-neutral mt-4 font-semibold">Carte Jackpot</p>
            </div>
          </div>

          {/* Descriptions des Cartes de la Deuxième Rangée */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Temps :</span> La carte donne beaucoup de points si elle est trouvée rapidement, sinon elle ne fait rien.
            </p>
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Trésor :</span> Donne 5 fois plus de points qu'une carte classique, il faut donc la trouver rapidement!
            </p>
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Oeil :</span> Révèle 5 cartes aléatoires pendant 3 secondes.
            </p>
            <p className="text-lg text-neutral leading-relaxed">
              <span className="font-semibold">Carte Jackpot :</span> Les 3 prochains mouvements rapportent 3 fois plus de points!
            </p>
          </div>
        </div>
      </section>

      {/* Section Fonctionnement du jeu */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Fonctionnement du jeu</h3>
          <ol className="list-decimal list-inside text-lg text-neutral mt-4 leading-relaxed">
            <li>Lors du lancement, le joueur se connecte ou crée un compte.</li>
            <li>Depuis le menu principal, il peut lancer une partie ou consulter le classement.</li>
            <li>Dans une partie, le joueur retourne les cartes pour trouver des paires identiques.</li>
            <li>Les cartes spéciales peuvent déclencher des effets imprévus, ajoutant un élément de surprise et de stratégie.</li>
            <li>À la fin de la partie, le score est sauvegardé et le classement est mis à jour.</li>
          </ol>
        </div>
      </section>

      {/* Section Technologies utilisées */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Technologies utilisées</h3>
          <p className="text-lg text-neutral mt-4 leading-relaxed">
            Memomix a été développé en Java avec l'interface graphique JavaFX. <br />Pour la gestion des données, une base de données MySQL a été utilisée.<br />
            Voici les outils et frameworks principaux qui ont été mobilisés :
          </p>
          <ul className="list-disc list-inside text-lg text-neutral mt-4 leading-relaxed">
            <li>Java pour le développement backend et la logique du jeu.</li>
            <li>JavaFX pour une interface graphique moderne et intuitive.</li>
            <li>SQLite pour la gestion des utilisateurs et des scores.</li>
            <li>GitLab pour la gestion des versions et la collaboration.</li>
            <li>CSS, BootstrapFX et ControlsFX pour le design de l'interface utilisateur.</li>
          </ul>
        </div>
      </section>

      {/* Section Objectifs pédagogiques */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Objectifs pédagogiques</h3>
          <p className="text-lg text-neutral mt-4 leading-relaxed">
            Le projet Memomix a été conçu dans le cadre du BTS SIO pour travailler sur les compétences de conception, développement,
            et gestion de données.<br /> Il illustre une application éducative et ludique, avec un accent particulier sur :
          </p>
          <ul className="list-disc list-inside text-lg text-neutral mt-4 leading-relaxed">
            <li>La conception d'une application avec des règles originales pour éviter la monotonie.</li>
            <li>Le développement d'une interface simple et accessible au plus grand nombre.</li>
            <li>La mise en œuvre d'un système d'authentification et de score pour encourager la compétition entre utilisateurs.</li>
          </ul>
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

export default Memomix;