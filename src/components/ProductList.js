import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(10);
  const [sortOption, setSortOption] = useState("default");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((err) => console.error("Error fetching products: ", err));
  }, []);

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 10);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      switch (e.target.value) {
        case "priceLowToHigh":
          return a.price - b.price;
        case "priceHighToLow":
          return b.price - a.price;
        case "rating":
          return b.rating.rate - a.rating.rate;
        default:
          return 0;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category];

    setSelectedCategories(newSelectedCategories);
    const filtered = products.filter((product) =>
      newSelectedCategories.length > 0 ? newSelectedCategories.includes(product.category) : true
    );

    setFilteredProducts(filtered);
    setVisibleProducts(10);
  };

  return (
    <div className="container">
      <h2 className="headline">Explore Our Featured Collection</h2>

      <div className="sortAndFilterContainer">
      <div className="filterContainer">
          <h4>Filter by Category:</h4>
          {["electronics", "jewelery", "men's clothing", "women's clothing"].map((category) => (
            <label className="checkboxLabel" key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
        <div>
          <label htmlFor="sort">Sort by:</label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="sortDropdown"
          >
            <option value="default">Default</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>

        
      </div>

      <div className="productGrid">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      {visibleProducts < filteredProducts.length && (
        <button onClick={loadMoreProducts} className="showMoreButton">
          Show More
        </button>
      )}
    </div>
  );
};

export default ProductList;
