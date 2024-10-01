import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="productCard">
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <img src={product.image} alt={product.title} style={styles.image} />
            </Link>
            <h3 data-fullname={product.title} style={styles.title}>{product.title}</h3>
            <p style={styles.price}>${product.price.toFixed(2)}</p>
            <button 
                onClick={() => addToCart(product)} 
                style={styles.addToCartButton}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#D4AF37';
                    e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#004D4D';
                    e.target.style.transform = 'scale(1)';
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

const styles = {
    image: {
        width: '100%',
        height: '150px', // Set a fixed height for consistency
        objectFit: 'contain',
        marginBottom: '10px',
        borderRadius: '5px',
    },
    title: {
        color: '#004D4D',
        fontSize: '16px',
        marginBottom: '10px',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    price: {
        color: '#004D4D',
        fontSize: '16px',
        marginBottom: '10px',
    },
    addToCartButton: {
        backgroundColor: '#004D4D',
        color: '#fff',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.3s ease',
    },
};

export default ProductItem;
