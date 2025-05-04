// 📁 src/layout/MasterLayout.jsx
import React from "react";
import Navbar from "../components/common/Navbar";

function MasterLayout({ children }) {
  return (
    <div className="bg-secondary text-heading text-secondary min-h-screen ">
      <Navbar />
      <main className="p-4 bg-amber-300">{children}</main>
    </div>
  );
}

export default MasterLayout;
