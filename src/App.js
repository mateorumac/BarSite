import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";  
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetail from './pages/ProductDetail';

function App() {
  const [cart, setCart] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setConfirmationMessage(`Added ${product.title} to cart!`);
    setTimeout(() => {
      setConfirmationMessage("");
    }, 3000);
  };

  const updateQuantity = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.reduce((total, item) => total + item.quantity, 0)} /> 
        {confirmationMessage && (
          <div style={styles.confirmationMessage}>{confirmationMessage}</div>
        )}
        <main>
          <Routes>
            <Route path="/" element={<LandingPage addToCart={addToCart} />} />
            <Route path="/products" element={<Home addToCart={addToCart} />} />
            <Route
              path="/cart"
              element={
                <CartPage
                  cart={cart}
                  updateQuantity={updateQuantity}
                  removeItem={removeItem}
                />
              }
            />
            <Route path="/checkout" element={<CheckoutPage cart={cart} />} />
            <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const styles = {
  confirmationMessage: {
    position: "fixed",
    top: "20px",
    right: "20px",
    backgroundColor: "#D4AF37",
    color: "#004D4D",
    padding: "10px 20px",
    borderRadius: "5px",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    zIndex: 1000,
  },
};

export default App;
