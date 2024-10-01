import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} style={i < rating ? styles.star : styles.emptyStar}>★</span>
      );
    }
    return stars;
  };

  return (
    <div style={styles.container}>
      <button onClick={() => navigate(-1)} style={styles.backButton}>
        ←
      </button>
      <div style={styles.card}>
        <h1 style={styles.title}>{product.title}</h1>
        <img src={product.image} alt={product.title} style={styles.image} />
        <p style={styles.price}>Price: ${product.price.toFixed(2)}</p>
        <p style={styles.description}>{product.description}</p>
        <div style={styles.rating}>
          {renderStars(Math.round(product.rating.rate))} 
          <span style={styles.ratingCount}> ({product.rating.count} reviews)</span>
        </div>
        <button 
          style={styles.addToCartButton}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = styles.addToCartButtonHover.backgroundColor;
            e.target.style.transform = styles.addToCartButtonHover.transform;
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = styles.addToCartButton.backgroundColor;
            e.target.style.transform = "scale(1)";
          }}
          onClick={() => addToCart(product)} 
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '60px auto',
    padding: '20px',
    display: 'flex',
    alignItems: 'flex-start', 
  },
  card: {
    backgroundColor: '#fff',
    border: '1px solid #004D4D',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    marginLeft: '10px', 
    flex: 1, 
  },
  backButton: {
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '36px', 
    cursor: 'pointer',
    color: '#004D4D',
    marginRight: '10px',
    marginLeft: '-50px',
  },
  title: {
    color: '#004D4D',
    marginBottom: '10px',
    lineHeight: '1.2',
    fontSize: '28px',
  },
  image: {
    width: '100%',
    maxHeight: '300px',
    objectFit: 'contain',
    borderRadius: '5px',
    marginBottom: '15px',
  },
  price: {
    fontSize: '20px',
    color: '#004D4D',
    margin: '10px 0',
    paddingBottom: '5px',
  },
  description: {
    lineHeight: '1.5',
    color: '#333',
    marginBottom: '15px',
  },
  rating: {
    color: '#FFD700',
    margin: '10px 0',
  },
  ratingCount: {
    color: '#004D4D', 
    marginLeft: '5px', 
  },
  star: {
    color: '#FFD700',
    fontSize: '18px',
  },
  emptyStar: {
    color: '#ccc',
    fontSize: '18px',
  },
  addToCartButton: {
    display: 'block',
    margin: '20px auto 0', 
    backgroundColor: '#004D4D',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  },
  addToCartButtonHover: {
    backgroundColor: '#D4AF37',
    transform: 'scale(1.05)',
  },
};

export default ProductDetail;
