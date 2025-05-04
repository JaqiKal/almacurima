// pagesError404.jsx
import React from "react";
import ErrorPage from "../components/common/ErrorPage";

function Error404() {
  return <ErrorPage code={404} message="Error 404. Page not found." />;
}

export default Error404;
