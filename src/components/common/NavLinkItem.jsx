// src/components/common/NavLinkItem.jsx
import { Link } from "react-router-dom";

/**
 * Single nav link with consisten style
 * @param {string} to - destination route
 * @param {ReactNode} children - link text or elements
 */

function NavLinkItem({ to, children }) {
  return (
    <Link to={to} className="inline-block font-bold transform transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-700">
      {children}
    </Link>
  );
}

export default NavLinkItem;
