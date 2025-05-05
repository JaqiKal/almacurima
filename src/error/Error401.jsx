// pagesError401.jsx
import React from "react";
import ErrorPage from "../components/common/ErrorPage";

function Error401() {
  return <ErrorPage code={401} message="Error 401. You are not authenticated." />;
}

export default Error401;
