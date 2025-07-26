import React from 'react';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">E-Shop Product List</h1>
      <ProductList />
    </div>
  );
};

export default App;