// pagesError404.jsx
import React from "react";
import ErrorPage from "../components/common/ErrorPage";

function Error404() {
  return <ErrorPage code={404} message="404 – Sidan kunde inte hittas" description="Vi kunde tyvärr inte hitta sidan du letade efter." />;
}

export default Error404;
