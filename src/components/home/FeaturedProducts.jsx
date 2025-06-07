import React from 'react';
import ProductCard from '../products/ProductCard';
import { products } from '../../data/products';

const FeaturedProducts = () => {
  // Get first 8 products as featured
  const featuredProducts = products.slice(0, 8);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FeaturedProducts; 