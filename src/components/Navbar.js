import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartCount }) => {
  const [hover, setHover] = useState({ products: false, cart: false, logo: false });

  return (
    <nav style={styles.nav}>
      <div style={styles.logoContainer}>
        <Link
          to="/"
          style={hover.logo ? { ...styles.logoLink, ...styles.linkHover } : styles.logoLink}
          onMouseEnter={() => setHover({ ...hover, logo: true })}
          onMouseLeave={() => setHover({ ...hover, logo: false })}
        >
          SmartStyle
        </Link>
      </div>
      <ul style={styles.navLinks}>
        <li>
          <Link
            to="/products"
            style={hover.products ? { ...styles.link, ...styles.linkHover } : styles.link}
            onMouseEnter={() => setHover({ ...hover, products: true })}
            onMouseLeave={() => setHover({ ...hover, products: false })}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            style={hover.cart ? { ...styles.link, ...styles.linkHover } : styles.link}
            onMouseEnter={() => setHover({ ...hover, cart: true })}
            onMouseLeave={() => setHover({ ...hover, cart: false })}
          >
            Cart 
            {cartCount > 0 && (
              <span style={styles.cartCount}>({cartCount})</span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#004D4D",
    padding: "20px 30px",
    color: "#fff",
    height: "50px",
    
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },
  logoLink: {
    fontSize: "36px",
    color: "#FFC2A1",
    textDecoration: "none",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
    transition: "text-decoration 0.3s ease, font-size 0.3s ease",
    textTransform: "uppercase",
    fontFamily: "'Poppins', sans-serif",
  },
  navLinks: {
    listStyleType: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#F4F4F4",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.3s ease",
  },
  linkHover: {
    color: "#D4AF37",
  },
  cartCount: {
    color: "#D4AF37",
    marginLeft: "5px",
    fontWeight: "bold",
  },
};

export default Navbar;
