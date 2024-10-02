import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import logo from '../assets/logo.png';

const LandingPage = ({ addToCart }) => { 
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isHovered, setIsHovered] = useState(false); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=4")
      .then((res) => res.json())
      .then((data) => setFeaturedProducts(data))
      .catch((err) => console.error("Error fetching products: ", err));
  }, []);

  return (
    <div>
      <div style={styles.heroSection}>
        <img src={logo} alt="Logo" style={styles.logo} />
        <h1 style={styles.heroTitle}>Welcome to SmartStyle!</h1>
        <p style={styles.heroSubtitle}>
          Discover the best deals on amazing products. Shop now and enjoy exclusive discounts!
        </p>
        <Link to="/products">
          <button 
            style={{
              ...styles.shopNowButton,
              ...(isHovered ? styles.shopNowButtonHover : {})
            }}
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            Shop Now
          </button>
        </Link>
      </div>

      <div style={styles.featuredSection}>
        <h2 style={styles.sectionTitle}>Featured Products</h2>
        <div style={styles.productGrid}>
          {featuredProducts.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "60vh",
    textAlign: "center",
    backgroundImage: "url('https://images.unsplash.com/photo-1512436991641-6745cdb1723f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "#fff",
    padding: "20px",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
  },
  logo: {
    width: "250px",
    marginBottom: "-10px",
  },
  heroTitle: {
    fontSize: "48px",
    color: "#FFFFFF",
    marginBottom: "20px",
  },
  heroSubtitle: {
    fontSize: "18px",
    color: "#FFFFFF",
    marginBottom: "20px",
  },
  shopNowButton: {
    padding: "12px 25px",
    backgroundColor: "#004D4D",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "18px",
    marginTop: "20px",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  shopNowButtonHover: {
    backgroundColor: "#D4AF37",
    transform: "scale(1.05)",
  },
  featuredSection: {
    backgroundColor: "#F4F4F4",
    padding: "50px 20px",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "36px",
    color: "#004D4D",
    marginBottom: "40px",
  },
  productGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
    gap: "20px",
    justifyContent: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  '@media (max-width: 1028px)': {
    productGrid: {
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      justifyItems: "center",
      margin: "0 auto",
    }
  },
  '@media (max-width: 768px)': {
    productGrid: {
      gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
      justifyItems: "center",
      margin: "0 auto",
    },
  },
  '@media (max-width: 480px)': {
    productGrid: {
      gridTemplateColumns: "1fr",
      justifyItems: "center",
      padding: "0 10px",
      
    },
    heroTitle: {
      fontSize: "36px", 
    },
    heroSubtitle: {
      fontSize: "16px", 
    },
  },
};

export default LandingPage;
