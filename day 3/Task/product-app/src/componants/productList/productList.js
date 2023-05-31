import React, { useState, useEffect } from 'react';
import './productList.css';
import axios from 'axios';
import Card from './Card';
import Nav from './../Nav/Nav';
import Footer from '../Footer/Footer';
const ProductList = () => {
  // State variables
  const [products, setProducts] = useState([]); // Holds the list of all products
  const [filteredProducts, setFilteredProducts] = useState([]); // Holds the filtered list of products
  const [searchTerm, setSearchTerm] = useState(''); // Holds the search term entered by the user
  const [categoryFilter, setCategoryFilter] = useState('all'); // Holds the selected category filter

  // Fetch products data from an API using Axios
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/products');
        const data = response.data.products;
        setProducts(data); // Set the products state with the fetched data
        setFilteredProducts(data); // Set the filtered products state with the fetched data initially
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Update the category filter based on the selected category
  const filter = (category) => {
    setCategoryFilter(category);
  };

  // Update the search term based on the user input
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter the products based on the search term and category filter
  useEffect(() => {
    const filteredData = products.filter((product) => {
      const nameMatches = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const categoryMatches = categoryFilter === 'all' || product.category === categoryFilter;
      return nameMatches && categoryMatches;
    });
    setFilteredProducts(filteredData); // Update the filtered products state with the filtered data
  }, [searchTerm, categoryFilter, products]);

  return (
    <>
    <Nav></Nav>
      {/* Search input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      {/* Category filter buttons */}
      <div className="filter-container">
        <button onClick={() => filter('all')} className="btn btn-danger">All</button>
        <button onClick={() => filter('smartphones')} className="btn btn-danger">Smartphones</button>
        <button onClick={() => filter('fragrances')} className="btn btn-danger">Fragrances</button>
        <button onClick={() => filter('laptops')} className="btn btn-danger">Laptops</button>
      </div>
      {/* Display the list of filtered products */}
      
      <div className='allproduct row'>
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default ProductList;
