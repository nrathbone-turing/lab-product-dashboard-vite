import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product,onRemove }) => {
  // Apply conditional class to <div> for out-of-stock items
  const cardClass = product.inStock
  ? styles.productCard
  : `${styles.productCard} ${styles.outOfStockClass}`;

  return (
    <div className={cardClass} data-testid={`product-card-${product.name.toLowerCase()}`}>
      <h3>{product.name}</h3> {/* Display product name */}
      <p>{product.price}</p> {/* Display product price */}
      {/* Show if the product is in stock or out of stock */}
      <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      {/* Add an image tag with placeholder image for products */}
      <img
        src={`https://via.placeholder.com/150?text=${product.name}`}
        alt={product.name}
      />
      {/* Button that removes a product from the dashboard */}
      <button onClick={() => onRemove(product.id)}>Remove</button>

    </div>
  );
};

export default ProductCard;
