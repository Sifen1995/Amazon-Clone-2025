import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; 
import axios from 'axios'; 
import Class from './product.module.css'

export default function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);   
  useEffect(() => {
    
    setLoading(true); 
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setError(error); 
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); 

    if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error.message || 'An unexpected error occurred.'}</div>;
  }

  return (
    <div className={Class.product__list} >
     {products.length > 0 ? (
        products.map((product) => (
          <div  >
            <ProductCard item={product} key={product.id}/>
          </div>
        ))
      ) : (
        <div>No products found.</div> 
      )}
    </div>
  );
}
