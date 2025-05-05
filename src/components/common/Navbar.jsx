// src/components/common/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  /**
   * Toggles the mobile dropdown menu
   */
  function toggleMenu() {
    setIsOpen((prev) => !prev); // Toggle the menu state
  }

  /**
   * Closes the menu if clicking outside of it
   * Only active when menu is open
   */
  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      const clickedOutsideMenu = menuRef.current && !menuRef.current.contains(event.target);
      const clickedOutsideButton = buttonRef.current && !buttonRef.current.contains(event.target);
      if (clickedOutsideMenu && clickedOutsideButton) {
        setIsOpen(false); // Close the menu if clicked outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside); // Add event listener for clicks
    return () => document.removeEventListener("mousedown", handleClickOutside); // Cleanup event listener on unmount
  }, [isOpen]); // Only run this effect if the menu is open

  /**
   * Tailwind class for mobile dropdown visibility
   */
  const mobileMenuClass = `md:hidden bg-secondary p-4 shadow-md flex justify-end ${isOpen ? "" : "hidden"}`;

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
      <div ref={menuRef} className={mobileMenuClass}>
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
    </nav>
  );
}

export default Navbar;
