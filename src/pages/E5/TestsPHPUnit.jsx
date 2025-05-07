import React, { useState } from "react";
import Layout from "../../layouts/Layout";
// Importation des images
import phpunitTesting from "/images/phpunit_testing.jpg";
import xdebugAnalysis from "/images/xdebug_analysis.jpg";
import integrationTesting from "/images/integration_testing.jpg";

const TestsPHPUnit = () => {
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
      <div className="text-center py-12 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Tests PHPUnit</h2>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Garantir le bon fonctionnement et la fiabilité des services grâce à des tests automatisés avec PHPUnit.
        </p>
      </div>

      {/* Section Écriture et Exécution des Tests */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Écriture et Exécution des Tests</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'ai utilisé PHPUnit pour écrire et exécuter des tests unitaires et fonctionnels afin de vérifier le bon fonctionnement des services. 
              Ces tests permettent de s'assurer que chaque composant fonctionne comme prévu, que ce soit de manière isolée ou dans un contexte 
              d'intégration plus large. En identifiant rapidement les éventuelles erreurs, je peux garantir une qualité de code optimale.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(phpunitTesting)}
            >
              <img
                src={phpunitTesting}
                alt="Tests avec PHPUnit"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Utilisation de Xdebug */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Utilisation de Xdebug</h3>
            <p className="text-neutral text-lg leading-relaxed">
              Pour analyser les tests et déboguer efficacement, j'ai utilisé Xdebug. Cet outil m'a permis d'identifier les erreurs dans le code 
              et de mieux comprendre les résultats des tests. Grâce à une analyse approfondie, j'ai pu optimiser les performances et résoudre 
              les problèmes rapidement.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(xdebugAnalysis)}
            >
              <img
                src={xdebugAnalysis}
                alt="Analyse avec Xdebug"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section Tests d’Intégration et Automatisation */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-primary mb-4">Tests d’Intégration et Automatisation</h3>
            <p className="text-neutral text-lg leading-relaxed">
              J'ai mis en place des tests d'intégration pour valider l'interaction entre les différents composants de l'application. 
              En simulant les cas d'usage attendus, ces tests permettent de vérifier que les critères d'acceptation sont respectés. 
              De plus, j'ai automatisé les tests afin de garantir la stabilité et la fiabilité du service avant chaque déploiement.
            </p>
          </div>
          <div className="flex justify-center">
            <div
              className="rounded-lg shadow-lg overflow-hidden w-full max-w-md cursor-pointer"
              onClick={() => openModal(integrationTesting)}
            >
              <img
                src={integrationTesting}
                alt="Tests d’Intégration"
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

export default TestsPHPUnit;