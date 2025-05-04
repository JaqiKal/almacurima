// src/components/common/Footer.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-heading text-secondary mt-2 py-2 text-sm">
      <div className="flex justify-center gap-6 mb-2">
        <Link to="/contact" className="transform hover:scale-105 hover:text-heading transition" aria-label="Contact">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </Link>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="transform hover:scale-105 hover:text-heading transition" aria-label="LinkedIn">
          <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
        </a>
      </div>{" "}
      <p className="text-center text-xs text-secondary">&copy; 2025 Almacurima website by JaqiKal</p>
    </footer>
  );
}

export default Footer;
