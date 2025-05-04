// pagesError403.jsx
import React from "react";
import ErrorPage from "./ErrorPage";

function Error403() {
  return <ErrorPage code={403} message="Error 403. You do not have permission to view this page." />;
}

export default Error403;
