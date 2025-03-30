import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-base-100 shadow-md border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-8 py-6">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-primary hover:text-primary focus:outline-none transition-all duration-300 tracking-wide transform hover:scale-105"
          >
            Mattéo Lafrancesca
          </Link>

          {/* Navigation */}
          <div className="space-x-8 text-lg">
            <NavLink to="/" text="Accueil" />
            <NavLink to="/projets" text="Projets" />
            <NavLink to="/competences" text="Compétences" />
            <NavLink to="/veille" text="Veille" />
            <NavLink to="/contact" text="Contact" />
            <NavLink to="/cv" text="CV" />
          </div>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, text }) => (
  <Link to={to} className="relative text-base-content hover:text-primary group">
    {text}
    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"></span>
  </Link>
);

export default Header;
