import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, onRemove }) => {
  // Apply conditional class to <div> for out-of-stock items
  const classList = [styles.productCard];
  if (!product.inStock) {
    classList.push(styles.outOfStockClass);
    classList.push('outOfStockClass'); // Add plain class for test compatibility
  }

  return (
    <div className={classList.join(' ')}>
      {/* Display product name */}
      <h3>{product.name}</h3>

      {/* Display product price */}
      <p><strong>Price:</strong> {product.price}</p>

      {/* Show if the product is in stock or out of stock */}
      <p><strong>Status:</strong> {product.inStock ? 'In Stock' : 'Out of Stock'}</p>
      
      {/* Remove button for bonus challenge */}
      <button onClick={() => onRemove(product.id)}>Remove</button>
    </div>
  );
};

export default ProductCard;
