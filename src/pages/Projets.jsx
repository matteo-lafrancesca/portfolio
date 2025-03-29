import React from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

// Importez les images (ajustez les chemins selon votre structure)
import natationImg from "../assets/images/natation.jpg";
import botDiscordImg from "../assets/images/bot_discord.jpg";
import towerDefenseImg from "../assets/images/tower_defense.jpg";
import portfolioImg from "../assets/images/portfolio.jpg";

const Projets = () => {
  return (
    <Layout>
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Mes Projets</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed">Voici quelques projets sur lesquels j'ai travaillé.</p>
      </div>

      {/* Section Projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-13">
        {/* Projet Natation */}
        <div className="card bg-base-100 w-96 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/projets/onswim" className="block h-full">
            <figure>
              <img src={natationImg} alt="Natation" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Onswim
                {/* Badge Laravel */}
                <div className="badge badge-error">Laravel</div>
              </h2>
              <p>Un projet s'inscrivant dans le domaine de la natation, visant à accompagner les coachs et les athlètes dans la gestion des programmes sportifs.</p>
            </div>
          </Link>
        </div>

        {/* Projet Bot Discord */}
        <div className="card bg-base-100 w-96 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="#" className="block h-full">
            <figure>
              <img src={botDiscordImg} alt="Bot Discord" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Mattébot
                {/* Badge Node.js */}
                <div className="badge badge-success">Node.js</div>
              </h2>
              <p>Un bot développé pour gérer les rôles et interagir avec les utilisateurs sur Discord de manière simple et efficace.</p>
            </div>
          </Link>
        </div>

        {/* Projet Jeu de Tower Defense */}
        <div className="card bg-base-100 w-96 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="#" className="block h-full">
            <figure>
              <img src={towerDefenseImg} alt="Tower Defense" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Dungeon Defender Royale 2
                {/* Badge Python */}
                <div className="badge badge-accent">Python</div>
              </h2>
              <p>Un petit jeu de Tower Defense utilisant la bibliothèque Pygame.</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card bg-base-100 w-96 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
            <Link to="#" className="block h-full">
                <figure>
                   <img src={portfolioImg} alt="Portfolio React" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Mon Portfolio
                        {/* Badge React */}
                        <div className="badge badge-info">React</div>
                    </h2>
                    <p>Le portfolio que vous êtes en train de consulter a été développé en utilisant le framework React et déployé à l'aide de Github Pages</p>
                </div>
            </Link>
        </div>
        </div>
    </Layout>
  );
};

export default Projets;