import React from "react";
import Layout from "../../layouts/Layout";
import athlete from '/images/athlete_dashboard.jpg';
import coach from '/images/coach_dashboard.jpg';

const Natation = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Section Coach */}
          <div className="max-w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Bienvenue sur votre espace coach</h2>
            <p className="text-lg text-neutral mt-4 leading-relaxed">
              En tant que coach, vous pouvez créer des <span className="text-secondary font-semibold">programmes d'entraînement</span>, 
              <span className="text-secondary font-semibold">suivre les progrès de vos athlètes</span>, et gérer facilement leurs exercices.
              Attribuez des exercices et des programmes à vos athlètes pour un suivi personnalisé.
            </p>
          </div>
          {/* Illustration */}
          <div className="flex justify-center">
            <img src={coach} alt="Dashboard Coach" className="max-w-md rounded-lg shadow-xl" />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Section Athlète */}
          <div className="max-w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">Bienvenue sur votre espace athlète</h2>
            <p className="text-lg text-neutral mt-4 leading-relaxed">
              Suivez vos <span className="text-secondary font-semibold">programmes d'entraînement</span> et <span className="text-secondary font-semibold">choisissez vos exercices</span>.
              Une fois les exercices terminés, cochez-les pour tenir votre coach informé de votre progression.
            </p>
          </div>
          {/* Illustration */}
          <div className="flex justify-center">
            <img src={athlete} alt="Dashboard Athlète" className="max-w-md rounded-lg shadow-xl" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Natation;