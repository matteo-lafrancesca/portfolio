import React, { useState } from "react";
import Layout from "../../layouts/Layout";

const WikiReadmeGit = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Wiki, README et Gestion de Documentation Git</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Création et gestion de documentation pour les projets avec Git, README, et wikis.
        </p>
      </div>

      {/* Section Utilisation des Wikis */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Utilisation des Wikis</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Les wikis Git sont un excellent outil pour centraliser et structurer la documentation d’un projet. J’ai utilisé cet outil pour 
              documenter les processus, les guides d’installation et les bonnes pratiques. La structure hiérarchique des wikis permet de 
              naviguer facilement entre les pages, ce qui facilite la collaboration et le partage d'informations au sein des équipes.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal("/images/wiki_documentation.jpg")}
            >
              <img
                src="/images/wiki_documentation.jpg"
                alt="Documentation avec Wikis"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Rédaction des README */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Rédaction des README</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Un bon fichier README est essentiel pour présenter un projet. J’ai rédigé des README clairs et concis pour expliquer les objectifs 
              du projet, les étapes d’installation, et les exemples d’utilisation. Ces fichiers permettent aux nouveaux contributeurs ou utilisateurs 
              de comprendre rapidement le projet et de commencer à l’utiliser sans difficulté.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal("/images/readme_example.jpg")}
            >
              <img
                src="/images/readme_example.jpg"
                alt="Exemple de README"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Gestion de la Documentation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Gestion de la Documentation</h3>
            <p className="text-neutral text-lg leading-relaxed">
              En utilisant Git pour gérer la documentation, j’ai pu versionner les modifications et collaborer efficacement avec les autres membres 
              de l’équipe. Chaque modification est traçable, ce qui permet de revenir à une version précédente en cas d’erreur. Cela garantit une 
              documentation toujours à jour et alignée avec les évolutions du projet.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal("/images/git_documentation.jpg")}
            >
              <img
                src="/images/git_documentation.jpg"
                alt="Gestion de Documentation avec Git"
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

export default WikiReadmeGit;