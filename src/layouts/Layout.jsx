import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-base-100 text-base-content min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
