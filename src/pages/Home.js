import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products: ", err));
  }, []);

  return (
    <div>
      
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
