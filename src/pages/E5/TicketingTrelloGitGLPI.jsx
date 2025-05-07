import React, { useState } from "react";
import Layout from "../../layouts/Layout";
// Importation des images
import ticketingBoard from "/images/ticketing_board.jpg";
import glpiManagement from "/images/glpi_management.jpg";
import projectAnalysis from "/images/project_analysis.jpg";

const TicketingTrelloGitGLPI = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Ticketing avec Trello, Git, et GLPI</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Suivi et gestion des demandes, des tâches et des projets avec des outils comme Trello, GitHub/GitLab et GLPI.
        </p>
      </div>

      {/* Section Suivi et Gestion */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Suivi et Gestion des Demandes</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'utilise des tableaux comme ceux proposés par Trello ou GLPI pour suivre et gérer les demandes et besoins des utilisateurs et des équipes. 
              Chaque demande est collectée sous forme de ticket, ce qui permet de centraliser les informations, de les suivre tout au long du processus, 
              et d'assurer une traçabilité complète des actions menées.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(ticketingBoard)}
            >
              <img
                src={ticketingBoard}
                alt="Tableau de Suivi des Demandes"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Utilisation de GLPI */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Utilisation de GLPI</h3>
            <p className="text-neutral text-lg leading-relaxed">
              GLPI est un outil que j’ai utilisé pour centraliser et gérer les tickets de support ou de maintenance de projets. 
              Il permet de créer et suivre les demandes des utilisateurs, d'attribuer des tâches aux membres de l’équipe, 
              et de prioriser les actions à entreprendre. La fonctionnalité de gestion des tickets facilite la traçabilité et 
              l’identification rapide des problèmes récurrents, tout en améliorant la qualité du service rendu.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(glpiManagement)}
            >
              <img
                src={glpiManagement}
                alt="Utilisation de GLPI"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Organisation et Analyse */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Organisation et Analyse</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'organise les tâches et répartis les responsabilités en fonction des objectifs du projet, en utilisant des outils comme Trello pour structurer 
              les étapes. Grâce à l'analyse des indicateurs de suivi, je peux évaluer l'avancement du projet, identifier les éventuels blocages, et ajuster 
              la planification pour atteindre les objectifs dans les délais impartis.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(projectAnalysis)}
            >
              <img
                src={projectAnalysis}
                alt="Organisation et Analyse des Projets"
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

export default TicketingTrelloGitGLPI;