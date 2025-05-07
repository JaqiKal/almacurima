// pagesError500.jsx
import React from "react";
import ErrorPage from "../components/common/ErrorPage";

function Error500() {
  return <ErrorPage code={500} message="401 – Inte inloggad" description="Du måste vara inloggad för att komma åt den här sidan." />;
}

export default Error500;
