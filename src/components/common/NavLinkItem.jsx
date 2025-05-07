// src/components/common/NavLinkItem.jsx
import { Link } from "react-router-dom";

/**
 * Single nav link with consistent style
 * @param {string} to - destination route
 * @param {ReactNode} children - link text or elements
 *
 * When used in mobile navigation, `onClick` is used to close the sidebar
 * immediately after a menu item is clicked, ensuring smooth UX
 */

function NavLinkItem({ to, children, onClick }) {
  return (
    <Link to={to} onClick={onClick} className="inline-block font-bold transform transition-transform duration-300 ease-in-out hover:scale-105 hover:text-gray-700">
      {children}
    </Link>
  );
}

export default NavLinkItem;
