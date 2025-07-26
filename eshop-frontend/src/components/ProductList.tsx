import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  name: string;
  price: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_API_BASE_URL;

    axios.get(`${baseUrl}/api/products`)
      .then(res => setProducts(res.data))
      .catch(err => console.error('Failed to fetch products:', err));
  }, []);

  return (
    <ul className="space-y-2">
      {products.map(product => (
        <li key={product.id} className="border p-2 rounded">
          <div className="font-semibold">{product.name}</div>
          <div className="text-gray-600">${product.price.toFixed(2)}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
