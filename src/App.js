import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";  
import Footer from "./components/Footer";  
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetail from './pages/ProductDetail';
import Notification from "./components/Notification";

function App() {
  const [cart, setCart] = useState([]);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

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

    // Show notification
    setNotificationMessage(`Added ${product.title} to cart!`);
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 2000);
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
        <Notification message={notificationMessage} visible={notificationVisible} />
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

export default App;
