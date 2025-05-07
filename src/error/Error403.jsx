// pagesError403.jsx
import React from "react";
import ErrorPage from "../components/common/ErrorPage";

function Error403() {
  return <ErrorPage code={403} message="403 – Åtkomst nekad" description="Du har inte behörighet att visa den här sidan." />;
}

export default Error403;
