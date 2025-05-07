// pagesError401.jsx
import React from "react";
import ErrorPage from "../components/common/ErrorPage";

function Error401() {
  return <ErrorPage code={401} message="401 – Inte inloggad" description="Du måste vara inloggad för att komma åt den här sidan." />;
}

export default Error401;
