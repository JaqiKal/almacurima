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
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MasterLayout;
