import React, { useState } from 'react';
import { Button, Box } from '@mui/material';
import ProductList from './components/ProductList';

const App = () => {
  // Define initial product data
  const initialProducts = [
    { id: 1, name: 'Gameboy Color', price: '$119.95', inStock: true },
    { id: 2, name: 'Nintendo 3DS', price: '$699.95', inStock: false },
    { id: 3, name: 'Super Ninitendo Entertainment System', price: '$249.95', inStock: true },
  ];

  // Implement state to manage filtering and products
  const [products, setProducts] = useState(initialProducts);
  const [filter, setFilter] = useState('all'); // 'all', 'inStock', 'outOfStock'

  // Implement logic to filter products based on availability
  const filteredProducts = products.filter(product => {
    if (filter === 'inStock') return product.inStock;
    if (filter === 'outOfStock') return !product.inStock;
    return true; // 'all'
  });

  // Remove product function
  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      
      <Box sx={{ marginBottom: 2 }}>
        <Button 
          variant={filter === 'all' ? 'contained' : 'outlined'} 
          onClick={() => setFilter('all')}
          sx={{ marginRight: 1 }}
        >
          All
        </Button>
        <Button 
          variant={filter === 'inStock' ? 'contained' : 'outlined'} 
          onClick={() => setFilter('inStock')}
          sx={{ marginRight: 1 }}
        >
          In Stock
        </Button>
        <Button 
          variant={filter === 'outOfStock' ? 'contained' : 'outlined'} 
          onClick={() => setFilter('outOfStock')}
        >
          Out of Stock
        </Button>
      </Box>

      <ProductList products={filteredProducts} onRemove={removeProduct} />
    </div>
  );
};

export default App;
