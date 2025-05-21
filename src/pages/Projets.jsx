import React from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";
import natation from '/images/natation.jpg';
import bot_discord from '/images/bot_discord.jpg';
import tower_defense from '/images/tower_defense.jpg';
import portfolio from '/images/portfolio.jpg';
import memomix from '/images/memomix.jpg'; // Importer l'image pour Memomix
import reva from '/images/reva.jpg'; // Importer l'image pour Application REVA

const Projets = () => {
  return (
    <Layout>
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Mes Projets</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed">Voici quelques projets sur lesquels j'ai travaillé.</p>
      </div>

      {/* Section Projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-13 justify-items-center">
        {/* Projet Natation */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/projets/onswim" className="block h-full">
            <figure>
              <img src={natation} alt="Natation" className="rounded-lg" />
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
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/projets/mattebot" className="block h-full">
            <figure>
              <img src={bot_discord} alt="Bot Discord" className="rounded-lg" />
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
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/projets/dungeon-defender" className="block h-full">
            <figure>
              <img src={tower_defense} alt="Tower Defense" className="rounded-lg" />
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

        {/* Projet Memomix */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/projets/memomix" className="block h-full">
            <figure>
              <img src={memomix} alt="Memomix" className="rounded-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Memomix
                {/* Badge JavaScript */}
                <div className="badge badge-warning">Java</div>
              </h2>
              <p>Un jeu amusant et interactif conçu pour améliorer la mémoire tout en s'amusant.</p>
            </div>
          </Link>
        </div>

        {/* Projet Application REVA */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/projets/application-mobile" className="block h-full">
            <figure>
              <img src={reva} alt="Application REVA" className="rounded-lg" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Application REVA
                {/* Badge Mobile */}
                <div className="badge badge-info">Mobile</div>
              </h2>
              <p>Une application mobile innovante pour optimiser la gestion des maintenances dans le secteur du BTP.</p>
            </div>
          </Link>
        </div>

        {/* Projet Portfolio */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/" className="block h-full">
            <figure>
              <img src={portfolio} alt="Portfolio" className="rounded-lg" />
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