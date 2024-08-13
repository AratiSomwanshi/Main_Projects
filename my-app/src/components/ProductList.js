// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import { Link } from 'react-router-dom';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(response => setProducts(response.data)).catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
