import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cart, updateQuantity, removeItem }) => { 
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Your Cart</h1>
      <Cart cart={cart} updateQuantity={updateQuantity} removeItem={removeItem} />
    </div>
  );
};

const styles = {
  container: {
    padding: "50px 20px",
    backgroundColor: "#F4F4F4",
    minHeight: "80vh", 
  },
  title: {
    textAlign: "center",
    fontSize: "36px",
    color: "#004D4D",
    marginBottom: "40px",
  },
};

export default CartPage;
