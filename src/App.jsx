// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MasterLayout from "./layout/MasterLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import Error404 from "./pages/Error404";
import Error500 from "./pages/Error500";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MasterLayout>
            <Home />
          </MasterLayout>
        }
      />
      <Route
        path="/about"
        element={
          <MasterLayout>
            <About />
          </MasterLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <MasterLayout>
            <Contact />
          </MasterLayout>
        }
      />
      <Route
        path="/services"
        element={
          <MasterLayout>
            <Services />
          </MasterLayout>
        }
      />{" "}
      <Route path="/401" element={<Error401 />} />
      <Route path="/403" element={<Error403 />} />
      <Route path="/500" element={<Error500 />} />
      <Route path="/404" element={<Error404 />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
