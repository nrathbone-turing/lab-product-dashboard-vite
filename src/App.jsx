import React, { useState } from 'react';
import ProductList from './components/ProductList';

const App = () => {
  //Define initial product data
  const initialProducts = [
    { id: 1, name: 'Laptop', price: '$999', inStock: true },
    { id: 2, name: 'Phone', price: '$699', inStock: false },
    { id: 3, name: 'Tablet', price: '$499', inStock: true },
  ];

  // Implement state to manage filtering
  const [products, setProducts] = useState(initialProducts);
  const [filterInStock, setFilterInStock] = useState(false);

  // Implement logic to filter products based on availability
  const filteredProducts = filterInStock
    ? products.filter(product => product.inStock)
    : products;

  const handleRemoveProduct = (idToRemove) => {
    setProducts(products.filter(product => product.id !== idToRemove));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      {/* Add buttons to allow filtering by availability */}
      <button onClick={() => setFilterInStock(false)}>All</button>
      <button onClick={() => setFilterInStock(true)}>In Stock Only</button>

      {/* TODO: Render the ProductList component and pass filtered products */}
      <ProductList products={filteredProducts} onRemove={handleRemoveProduct} />
      
    </div>
  );
};

export default App;
