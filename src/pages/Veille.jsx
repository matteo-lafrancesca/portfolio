import React from "react";
import Layout from "../layouts/Layout";

const newsArticles = [
  {
    title: "Cette start-up mêle réalité virtuelle, e-sport et sport pour offrir une expérience unique",
    summary: "Cet article détaille la croissance d'EVA, une start-up française spécialisée dans les jeux de tir en VR, qui a su s'imposer sur le marché du divertissement immersif.",
    source: "Presse Citron",
    link: "https://www.presse-citron.net/cette-start-up-mele-realite-virtuelle-e-sport-et-sport-pour-offrir-une-experience-unique/",
    image: "/images/news_1.jpg"
  },
  {
    title: "Metaverse : cinq questions sur le nouveau monde virtuel de Facebook",
    summary: "Cet article analyse les initiatives de Meta dans le domaine de la VR et de l'AR, et souligne le virage stratégique de la multinationale vers le métavers.",
    source: "Les Echos",
    link: "https://www.lesechos.fr/tech-medias/hightech/metaverse-cinq-questions-sur-le-nouveau-monde-virtuel-de-facebook-1359667",
    image: "/images/news_2.jpg"
  },
  {
    title: "La réalité augmentée comme on l’aime",
    summary: "Le Consumer Electronics Show 2024 a mis en avant les nouvelles technologies de réalité augmentée. Mise en lumière des innovations et des impacts potentiels.",
    source: "La Presse",
    link: "https://www.lapresse.ca/affaires/techno/2025-01-10/la-presse-a-las-vegas/la-realite-augmentee-comme-on-l-aime.php",
    image: "/images/news_3.jpg"
  },
  {
    title: "Réalité virtuelle : l’Apple Vision Pro ouvre les portes d’un autre monde",
    summary: "Apple a lancé le Vision Pro, un casque de réalité mixte révolutionnaire aux États-Unis en février 2024, marquant un tournant dans le domaine des technologies immersives.",
    source: "Ouest France",
    link: "https://www.ouest-france.fr/high-tech/apple/realite-virtuelle-lapple-vision-pro-ouvre-les-portes-dun-autre-monde-nous-lavons-teste-25d4aa38-3d13-11ef-8b5d-fae23e5223f7",
    image: "/images/news_4.jpg"
  },
  {
    title: "La réalité virtuelle immersive permet de réduire la douleur chez les patients atteints d’un cancer",
    summary: "Une étude montre que des séances de réalité virtuelle immersive de 10 minutes peuvent réduire efficacement la douleur chez les patients atteints de cancer.",
    source: "Science et Vie",
    link: "https://www.science-et-vie.com/corps-et-sante/la-realite-virtuelle-immersive-permet-de-reduire-la-douleur-chez-les-patients-atteints-dun-cancer-132073.html",
    image: "/images/news_5.jpg"
  }
];

const Veille = () => {
  return (
    <Layout>
      <div className="text-center py-12">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">Veille Technologique VR</h2>
        <p className="text-lg text-neutral mt-4 leading-relaxed">Les dernières nouvelles sur les technologies de réalité virtuelle.</p>
      </div>
      <div className="space-y-8">
        {newsArticles.map((article, index) => (
          <div key={index} className="hero bg-base-200 my-6">
            <div className="hero-content flex-col lg:flex-row">
              <img
                src={article.image}
                className="max-w-sm rounded-lg shadow-2xl"
                alt={`Image pour ${article.title}`}
              />
              <div>
                <h1 className="text-3xl font-bold">{article.title}</h1>
                <p className="py-6">{article.summary}</p>
                <p className="italic">Source: {article.source}</p>
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <button className="btn btn-primary mt-4">Consulter</button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Veille;
