import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Navbar = ({ cartCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null); 

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      closeMenu();
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          SmartStyle
        </Link>
      </div>
      <button className="menu-toggle" onClick={handleMenuToggle} ref={buttonRef}>
        {menuOpen ? "✕" : "☰"}
      </button>
      <ul className={menuOpen ? "nav-links open" : "nav-links"} ref={menuRef}>
        <li>
          <Link to="/products" className="nav-link" onClick={closeMenu}>
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link" onClick={closeMenu}>
            Cart {cartCount > 0 && <span className="cart-count">({cartCount})</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
