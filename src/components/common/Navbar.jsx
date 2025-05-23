// src/components/common/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import NavLinkItem from "./NavLinkItem";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo/logo.webp";

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
  const mobileMenuClass = `fixed top-0 right-0 h-screen w-2/5 max-w-sm z-50 bg-secondary-500/20 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`;

  return (
    <nav className="w-full bg-secondary-200 text-blue-900 p-4 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-8 h-4 md:h-10">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold transform transition-transform duration-300 ease-in-out  hover:text-blue-400 hover:scale-110">
            <img src={logo} alt="Almacurima logo" className="h-10 w-10 object-contain" />
          </Link>
        </div>
        {/* Desktop menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium ">
          <li>
            <NavLinkItem to="/">Hem</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/about">Om oss</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/contact">Kontakt</NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/services">Tjänster</NavLinkItem>
          </li>
        </ul>

        {/* Hamburger menu button (mobile) */}
        <button ref={buttonRef} onClick={toggleMenu} className={`md:hidden focus:outline-none transform transition-transform duration-300 ease-in-out hover:scale-110 ${isOpen ? "hidden" : "block"}`} aria-label="Toggle Menu">
          <FontAwesomeIcon icon={faBars} className="text-xl text-blue-900 hover:text-blue-400 transition" />
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div ref={menuRef} className={mobileMenuClass}>
        {/* Close button inside mobile menu */}
        <button onClick={toggleMenu} className="absolute top-4 left-4 z-50  text-blue-900 hover:text-pink-700 focus:outline-none" aria-label="Close Menu">
          <FontAwesomeIcon icon={faCircleXmark} className="mr-2" />
          <span className="text-xs">Stäng</span>
        </button>

        <ul className="flex flex-col mt-20 mr-6 space-y-6 text-lg font-medium text-right">
          <li>
            <NavLinkItem to="/" onClick={toggleMenu}>
              Hem
            </NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/about" onClick={toggleMenu}>
              Om oss
            </NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/contact" onClick={toggleMenu}>
              Kontakt
            </NavLinkItem>
          </li>
          <li>
            <NavLinkItem to="/services" onClick={toggleMenu}>
              Tjänster
            </NavLinkItem>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
