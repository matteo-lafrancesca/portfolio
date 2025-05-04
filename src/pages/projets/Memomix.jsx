import React from "react";
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
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16">
        {/* Introduction */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          <div className="max-w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Memomix : Jeu de mémoire ludique</h2>
            <p className="text-lg text-neutral mt-4 leading-relaxed">
              Memomix est un jeu interactif conçu pour améliorer vos capacités de mémoire tout en vous divertissant. 
              Le principe de base est simple : retrouver les paires de cartes identiques en un minimum de temps et de coups.
            </p>
            <p className="text-lg text-neutral mt-4 leading-relaxed">
              Mais attention ! Memomix innove en ajoutant des <span className="text-secondary font-semibold">cartes spéciales </span> 
              qui peuvent modifier les règles, mélanger les cartes, ajouter ou retirer des points, 
              et même provoquer la perte instantanée de la partie. Cela introduit une dimension stratégique unique au jeu.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={memomixGame} alt="Memomix Gameplay" className="max-w-lg rounded-lg shadow-xl" />
          </div>
        </div>

        {/* Fonctionnalités principales */}
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Fonctionnalités principales</h3>
          <ul className="list-disc list-inside text-lg text-neutral mt-4 leading-relaxed">
            <li>Reliez les cartes identiques ensemble pour gagner la partie.</li>
            <li>Des <span className="text-secondary font-semibold">cartes spéciales</span> ajoutent des effets et des règles uniques.</li>
            <li>Système de score basé sur le temps et le nombre de coups.</li>
            <li>Classement en ligne permettant de comparer vos scores avec d'autres joueurs.</li>
            <li>Système d'authentification pour sauvegarder vos scores et consulter vos statistiques.</li>
          </ul>
        </div>

        {/* Section Cartes Spéciales */}
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">Cartes Spéciales</h3>
          <p className="text-lg text-neutral mt-4 text-center">Découvrez les cartes spéciales qui ajoutent une dimension stratégique au jeu.</p>

          {/* Première Rangée de Cartes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div className="flex flex-col items-center">
              <img src={cardCrane} alt="Carte Mélange" className="w-32 h-32 rounded-lg shadow-md" />
              <p className="text-center text-neutral mt-4 font-semibold">Carte Crane</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cardSirene} alt="Carte Points" className="w-32 h-32 rounded-lg shadow-md" />
              <p className="text-center text-neutral mt-4 font-semibold">Carte Sirène</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cardCyclone} alt="Carte Perte" className="w-32 h-32 rounded-lg shadow-md" />
              <p className="text-center text-neutral mt-4 font-semibold">Carte Cyclone</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cardDemon} alt="Carte Règles Modifiées" className="w-32 h-32 rounded-lg shadow-md" />
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
              <img src={cardTime} alt="Carte Temps" className="w-32 h-32 rounded-lg shadow-md" />
              <p className="text-center text-neutral mt-4 font-semibold">Carte Temps</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cardEye} alt="Carte Gel" className="w-32 h-32 rounded-lg shadow-md" />
              <p className="text-center text-neutral mt-4 font-semibold">Carte Oeil</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cardTresor} alt="Carte Mouvement Supplémentaire" className="w-32 h-32 rounded-lg shadow-md" />
              <p className="text-center text-neutral mt-4 font-semibold">Carte Trésor</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={cardJackpot} alt="Carte Révélation" className="w-32 h-32 rounded-lg shadow-md" />
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

        {/* Autres Sections */}
        <div className="mt-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary">Fonctionnement du jeu</h3>
          <ol className="list-decimal list-inside text-lg text-neutral mt-4 leading-relaxed">
            <li>Lors du lancement, le joueur se connecte ou crée un compte.</li>
            <li>Depuis le menu principal, il peut lancer une partie ou consulter le classement.</li>
            <li>Dans une partie, le joueur retourne les cartes pour trouver des paires identiques.</li>
            <li>Les cartes spéciales peuvent déclencher des effets imprévus, ajoutant un élément de surprise et de stratégie.</li>
            <li>À la fin de la partie, le score est sauvegardé et le classement est mis à jour.</li>
          </ol>
        </div>
      </div>

      <div className="mt-16">
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
      
        <div className="mt-16">
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
    </Layout>
  );
};

export default Memomix;