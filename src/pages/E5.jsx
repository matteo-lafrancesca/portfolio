import React from "react";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

// Import des images pour chaque compétence/réalisation
import imgAuth from "/images/roles_auth.jpg";
import imgTicketing from "/images/ticketing.jpg";
import imgVeeam from "/images/veeam.jpg";
import imgUML from "/images/uml.jpg";
import imgPhpunit from "/images/phpunit.jpg";
import imgWiki from "/images/wiki.jpg";
import imgLinkedin from "/images/linkedin.jpg";
import imgCertif from "/images/certif.jpg";
import imgWeb from "/images/website.jpg";

const E5 = () => {
  return (
    <Layout>
      <div className="text-center py-8">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">E5 - Compétences et Réalisations</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed">
          Voici les compétences et réalisations présentées dans le cadre de l'épreuve E5.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-13 justify-items-center">
        {/* Gestion de rôles et authentification */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/gestion-roles-auth">
            <img src={imgAuth} alt="Gestion de rôles et authentification" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Gestion de rôles et authentification
                <div className="badge badge-error">Sécurité</div>
              </h2>
              <p>
                Mise en place de systèmes d'authentification sécurisés et gestion des rôles pour restreindre les accès en fonction des privilèges des utilisateurs.
              </p>
            </div>
          </Link>
        </div>

        {/* Ticketing avec Trello / Git / GLPI */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/ticketing-trello-git-glpi">
            <img src={imgTicketing} alt="Ticketing Trello/Git/GLPI" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Ticketing avec Trello / Git / GLPI
                <div className="badge badge-success">Gestion</div>
              </h2>
              <p>
                Utilisation d'outils comme Trello, Git et GLPI pour suivre les tâches, gérer les incidents et organiser les projets efficacement.
              </p>
            </div>
          </Link>
        </div>

        {/* Réalisation de plans de sauvegarde avec Veeam */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/plans-sauvegarde-veeam">
            <img src={imgVeeam} alt="Plans de sauvegarde avec Veeam" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Plans de sauvegarde avec Veeam
                <div className="badge badge-warning">Sauvegarde</div>
              </h2>
              <p>
                Élaboration et mise en œuvre de stratégies de sauvegarde avec Veeam pour garantir la sécurité des données et la continuité des activités.
              </p>
            </div>
          </Link>
        </div>

        {/* Diagrammes d'utilisation / UML / Gantt */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/diagrammes-uml-mcd">
            <img src={imgUML} alt="Diagrammes UML et MCD" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Diagrammes UML et MCD
                <div className="badge badge-accent">Modélisation</div>
              </h2>
              <p>
                Création de diagrammes UML, MCD et de cas d'utilisation pour modéliser des systèmes et planifier des projets informatiques.
              </p>
            </div>
          </Link>
        </div>

        {/* Tests avec PHPUnit */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/tests-phpunit">
            <img src={imgPhpunit} alt="Tests avec PHPUnit" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Tests avec PHPUnit
                <div className="badge badge-primary">Tests</div>
              </h2>
              <p>
                Mise en œuvre de tests unitaires avec PHPUnit pour garantir la qualité et la fiabilité du code dans les projets PHP.
              </p>
            </div>
          </Link>
        </div>

        {/* Wiki et Readme sur projets Git */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/wiki-readme-git">
            <img src={imgWiki} alt="Wiki et Readme Git" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Wiki et Readme sur projets Git
                <div className="badge badge-info">Documentation</div>
              </h2>
              <p>
                Création et maintenance de wikis et fichiers Readme pour documenter les projets Git et améliorer leur accessibilité.
              </p>
            </div>
          </Link>
        </div>

        {/* Création, optimisation et mise à jour de profil LinkedIn */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/profil-linkedin">
            <img src={imgLinkedin} alt="Optimisation profil LinkedIn" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Optimisation de profil LinkedIn
                <div className="badge badge-secondary">Réseautage</div>
              </h2>
              <p>
                Création, optimisation et mise à jour régulière de profils LinkedIn pour améliorer la visibilité et les opportunités professionnelles.
              </p>
            </div>
          </Link>
        </div>

        {/* Certifications CNIL, ANSSI, Cisco */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/certifications">
            <img src={imgCertif} alt="Certifications CNIL, ANSSI, Cisco" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Certifications CNIL, ANSSI, Cisco
                <div className="badge badge-error">Certifications</div>
              </h2>
              <p>
                Obtention de certifications reconnues telles que CNIL, ANSSI et Cisco pour renforcer les compétences en sécurité et conformité.
              </p>
            </div>
          </Link>
        </div>

        {/* Amélioration du site web de l'entreprise */}
        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/amelioration-site-web">
            <img src={imgWeb} alt="Amélioration site web entreprise" className="w-full h-44 object-cover rounded-t-lg" />
            <div className="card-body">
              <h2 className="card-title">
                Amélioration du site web de l'entreprise
                <div className="badge badge-success">Développement</div>
              </h2>
              <p>
                Optimisation et refonte du site web pour améliorer l'expérience utilisateur et répondre aux objectifs de l'entreprise.
              </p>
            </div>
          </Link>
        </div>

        <div className="card bg-base-100 w-80 shadow-sm transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <Link to="/E5/tableau">
            <div className="card-body">
              <h2 className="card-title">
                Tableau de Synthèse
              </h2>
              <p>
                Le tableau de synthèse qui récapitule toutes les compétences et réalisations présentées dans le cadre de l'épreuve E5.
              </p>
            </div>
          </Link>
        </div>

      </div>
    </Layout>
  );
};

export default E5;