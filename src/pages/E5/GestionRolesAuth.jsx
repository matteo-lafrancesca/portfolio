import React, { useState } from "react";
import Layout from "../../layouts/Layout";
// Importer les images
import laravelBreezeExample from "/images/laravel_breeze_example.jpg";
import middlewareExample from "/images/middleware_example.jpg";

const GestionRolesAuth = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Gestion des Rôles et Authentification</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          J'ai implémenté un système d'authentification sécurisé et une gestion des rôles efficace
          dans mon projet <span className="font-bold">OnSwim</span>, en utilisant Laravel Breeze et des middlewares.
        </p>
      </div>

      {/* Section Laravel Breeze */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Laravel Breeze</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Dans <span className="font-bold">OnSwim</span>, j'ai utilisé <span className="text-primary font-bold">Laravel Breeze </span> 
              pour mettre en place un système d'authentification rapide, moderne et sécurisé. Laravel Breeze fournit une structure légère 
              avec des contrôleurs et des vues prêtes à l'emploi, permettant une gestion intuitive des connexions, inscriptions et 
              réinitialisations de mot de passe.
            </p>
            <p className="text-neutral text-lg leading-relaxed mt-4">
              Cela m'a permis de me concentrer sur les fonctionnalités personnalisées du projet, comme la gestion des rôles et des permissions.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(laravelBreezeExample)}
            >
              <img
                src={laravelBreezeExample}
                alt="Exemple Laravel Breeze"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Middlewares */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(middlewareExample)}
            >
              <img
                src={middlewareExample}
                alt="Exemple Middleware Laravel"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-primary mb-4">Middlewares pour les Rôles</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'ai utilisé des <span className="font-bold text-primary">middlewares</span> pour restreindre l'accès à certaines fonctionnalités 
              en fonction des rôles des utilisateurs. Ces middlewares vérifient si un utilisateur a les privilèges nécessaires avant 
              de lui permettre d'accéder à une page ou d'effectuer une action.
            </p>
            <p className="text-neutral text-lg leading-relaxed mt-4">
              Les coachs ont le droit de créer des programmes et des exercices, tandis que les athlètes peuvent uniquement consulter
              les programmes et valider leurs exercices.
            </p>
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

export default GestionRolesAuth;