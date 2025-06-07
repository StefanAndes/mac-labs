import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/product/${product.id}`} className="product-card group block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {product.isNew && (
            <span className="absolute top-2 left-2 badge bg-green-500 text-white">
              New
            </span>
          )}
          {product.discount && (
            <span className="absolute top-2 right-2 badge bg-red-500 text-white">
              -{product.discount}%
            </span>
          )}
          
          {/* Quick Actions */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute top-4 right-4 space-y-2">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  // Add wishlist functionality
                }}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <FiHeart className="w-5 h-5" />
              </button>
              <button
                onClick={handleAddToCart}
                className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
              >
                <FiShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-lg">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {product.rating && (
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current'
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard; 