// 📁 src/layout/MasterLayout.jsx
import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { Outlet } from "react-router-dom";

/**
 * MasterLayout wraps all pages with a Navbar at the top and a Footer at the bottom.
 */
function MasterLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MasterLayout;
