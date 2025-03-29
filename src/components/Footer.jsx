import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector("footer");
    const body = document.body;
    if (footer && body.offsetHeight < window.innerHeight) {
      footer.style.position = "absolute";
      footer.style.bottom = "0";
    }
  }, []);

  return (
    <footer className="text-center py-4 mt-auto w-full">
      © 2025 Mon Portfolio. Tous droits réservés.
    </footer>
  );
};

export default Footer;
