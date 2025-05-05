// src/router/Router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MasterLayout from "../layout/MasterLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";

import Error401 from "../error/Error401";
import Error403 from "../error/Error403";
import Error404 from "../error/Error404";
import Error500 from "../error/Error500";

/**
 * AppRouter defines all routes in the application using a nested structure.
 */
const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <MasterLayout />,
      errorElement: <Error404 />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },

        // Testable error routes (optional to remove later)
        { path: "error/401", element: <Error401 /> },
        { path: "error/403", element: <Error403 /> },
        { path: "error/500", element: <Error500 /> },
      ],
    },
  ],
  {
    basename: "/almacurima",
  }
);

export default AppRouter;
