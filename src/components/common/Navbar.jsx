// src/components/common/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const timerRef = useRef(null);

  function toggleMenu() {
    setIsOpen((prev) => {
      if (!prev) {
        timerRef.current = setTimeout(() => setIsOpen(false), 500);
      } else {
        clearTimeout(timerRef.current);
      }
      return !prev;
    });
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
        clearTimeout(timerRef.current);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full bg-secondary p-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">AlmaCurima</div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        {/* Hamburger menu button (mobile) */}
        <button ref={buttonRef} onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle Menu">
          <FontAwesomeIcon icon={faBars} className="text-xl text-black" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div ref={menuRef} className="md:hidden bg-secondary p-4 shadow-md flex justify-end">
          <ul className="flex flex-col items-end space-y-2 text-sm font-medium">
            <li>
              <Link to="/" className="text-black hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black hover:text-gray-700">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-black hover:text-gray-700">
                Services
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
