import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product, addToCart }) => {
    return (
      <div className="productCard">
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
          <img src={product.image} alt={product.title} />
        </Link>
        <h3 data-fullname={product.title}>{product.title}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    );
};

export default ProductItem;
