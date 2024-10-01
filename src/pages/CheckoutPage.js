import React, { useState } from 'react';

const CheckoutPage = ({ cart }) => {
  const [shippingData, setShippingData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  const handleChangeShipping = (e) => {
    const { name, value } = e.target;
    setShippingData({ ...shippingData, [name]: value });
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Checkout</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Shipping Information</h2>
          <div style={styles.formGroup}>
            <label>Name:</label>
            <input type="text" name="name" value={shippingData.name} onChange={handleChangeShipping} required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label>Email:</label>
            <input type="email" name="email" value={shippingData.email} onChange={handleChangeShipping} required style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label>Phone:</label>
            <input type="tel" name="phone" value={shippingData.phone} onChange={handleChangeShipping} style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label>Address:</label>
            <input type="text" name="address" value={shippingData.address} onChange={handleChangeShipping} required style={styles.input} />
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.sectionTitle}>Payment Options</h2>
          <div style={styles.formGroup}>
            <label>
              <input 
                type="radio" 
                value="creditCard" 
                checked={paymentMethod === 'creditCard'} 
                onChange={handlePaymentChange} 
                style={styles.radio} 
              />
              Credit Card
            </label>
          </div>
          <div style={styles.formGroup}>
            <label>
              <input 
                type="radio" 
                value="paypal" 
                checked={paymentMethod === 'paypal'} 
                onChange={handlePaymentChange} 
                style={styles.radio} 
              />
              PayPal
            </label>
          </div>
          <div style={styles.formGroup}>
            <label>
              <input 
                type="radio" 
                value="bankTransfer" 
                checked={paymentMethod === 'bankTransfer'} 
                onChange={handlePaymentChange} 
                style={styles.radio} 
              />
              Bank Transfer
            </label>
          </div>
        </div>

        <h3 style={styles.totalAmountTitle}>Total Amount: ${totalAmount.toFixed(2)}</h3>
        <button type="submit" style={styles.submitButton}onMouseOver={(e) => {
          e.target.style.backgroundColor = '#D4AF37';
          e.target.style.transform = 'scale(1.05)';
        }}
          onMouseOut={(e) => {
          e.target.style.backgroundColor = styles.submitButton.backgroundColor;
          e.target.style.transform = 'scale(1)';
        }}>Place Order</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '60px auto',
    padding: '20px',
  },
  title: {
    textAlign: 'center',
    color: '#004D4D',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '24px',
    color: '#004D4D',
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #004D4D',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    border: '1px solid #004D4D',
    borderRadius: '5px',
    fontSize: '16px',
    color: '#004D4D',
    boxSizing: 'border-box',
  },
  radio: {
    marginRight: '10px',
  },
  submitButton: {
    backgroundColor: '#004D4D',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  totalAmountTitle: {
    textAlign: 'center',
    color: '#004D4D',
    margin: '20px 0',
  },
  submitButtonHover: {
    backgroundColor: '#D4AF37',
    transform: 'scale(1.05)',
  },
};

export default CheckoutPage;
