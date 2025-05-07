// src/components/common/ErrorPage.jsx
import React from "react";

function ErrorPage({ code, message, description }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-6xl font-bold text-red-500 mb-4">{code}</h1>
      <p className="text-xl text-gray-600">{message}</p>
      {description && <p className="text-lg text-gray-600 mb-6">{description}</p>}
      <NavLinkItem to="/">Gå till startsidan</NavLinkItem>
    </div>
  );
}

export default ErrorPage;
