// pagesError500.jsx
import React from "react";
import ErrorPage from "../components/common/ErrorPage";

function Error500() {
  return <ErrorPage code={403} message="Error 500. An unexpected server error occurred." />;
}

export default Error500;
