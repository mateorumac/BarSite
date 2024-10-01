import React from "react";
import { useNavigate } from "react-router-dom"; 

const Cart = ({ cart, updateQuantity, removeItem }) => {
  const navigate = useNavigate(); 
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout"); 
  };

  return (
    <div style={styles.cartContainer}>
      {cart.length === 0 ? (
        <p style={styles.emptyCartMessage}>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} style={styles.cartItem}>
            <img src={item.image} alt={item.title} style={styles.image} />
            <div style={styles.details}>
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.price}>${item.price.toFixed(2)}</p>
              <div style={styles.quantityControls}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                  style={styles.button}
                >
                  -
                </button>
                <span style={styles.quantity}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.button}
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  style={styles.removeButton}
                  onMouseOver={(e) => (e.target.style.backgroundColor = styles.removeButtonHover.backgroundColor)}
                  onMouseOut={(e) => (e.target.style.backgroundColor = styles.removeButton.backgroundColor)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div style={styles.totalAmountContainer}>
          <h3 style={styles.totalAmountTitle}>Total Amount: ${totalAmount.toFixed(2)}</h3>
          <button 
            style={styles.checkoutButton}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = styles.checkoutButtonHover.backgroundColor;
              e.target.style.transform = styles.checkoutButtonHover.transform;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = styles.checkoutButton.backgroundColor;
              e.target.style.transform = "scale(1)";
            }}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  cartContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  emptyCartMessage: {
    textAlign: "center",
    fontSize: "18px",
    color: "#004D4D",
  },
  cartItem: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #004D4D",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    marginRight: "20px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "18px",
    color: "#004D4D",
    marginBottom: "5px",
  },
  price: {
    fontSize: "16px",
    color: "#004D4D",
    marginBottom: "10px",
  },
  quantityControls: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  button: {
    backgroundColor: "#004D4D",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeButton: {
    backgroundColor: "#004D4D", 
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "20px",
    transition: "background-color 0.3s ease",
  },
  removeButtonHover: {
    backgroundColor: "#D4AF37", 
  },
  quantity: {
    fontSize: "16px",
    color: "#004D4D",
  },
  totalAmountContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
  },
  totalAmountTitle: {
    fontSize: "20px",
    color: "#004D4D",
  },
  checkoutButton: {
    backgroundColor: "#004D4D", 
    color: "#fff",
    border: "none",
    padding: "12px 24px", 
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    fontSize: "18px", 
    transition: "background-color 0.3s ease, transform 0.3s ease", 
  },
  checkoutButtonHover: {
    backgroundColor: "#D4AF37", 
    transform: "scale(1.05)", 
  }
};

export default Cart;
