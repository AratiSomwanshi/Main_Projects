// src/components/ProductDetail.js
import React, { useEffect, useState } from 'react';
import { getProductById, addToCart } from '../services/api';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(id).then(response => setProduct(response.data)).catch(error => console.error(error));
  }, [id]);

  const handleAddToCart = () => {
    const userId = 1; // Replace with actual user ID
    addToCart(userId, product.id, 1)
      .then(() => alert('Product added to cart'))
      .catch(error => console.error(error));
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetail;
