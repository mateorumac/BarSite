import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10); 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products: ", err));
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 10); 
  };

  return (
    <div className="container">
      <h2 className="headline">Explore Our Featured Collection</h2>
      <div className="productGrid">
        {products.slice(0, visibleProducts).map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {visibleProducts < products.length && (
        <button onClick={loadMoreProducts} className="showMoreButton">
          Show More
        </button>
      )}
    </div>
  );
};

export default ProductList;
