// 📁 src/layout/MasterLayout.jsx
import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MasterLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-secondary text-heading ">
      <Navbar />
      <main className="flex-grow p-4 bg-amber-300">{children}</main>
      <Footer />
    </div>
  );
}

export default MasterLayout;
