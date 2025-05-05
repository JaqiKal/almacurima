// src/App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./router/Router";

/**
 * The root component of the app. Sets up the router.
 */
function App() {
  return <RouterProvider router={AppRouter} />;
}
export default App;
