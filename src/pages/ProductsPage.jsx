import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiFilter, FiX } from 'react-icons/fi';
import ProductCard from '../components/products/ProductCard';
import { products, categories } from '../data/products';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
      filtered = filtered.filter(p => 
        p.category.toLowerCase().includes(categoryParam.toLowerCase())
      );
    }

    // Filter by sale
    if (searchParams.get('sale') === 'true') {
      filtered = filtered.filter(p => p.discount);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered = filtered.filter(p => p.isNew);
        break;
      case 'popular':
        filtered.sort((a, b) => b.reviews - a.reviews);
        break;
      default:
        break;
    }

    setFilteredProducts(filtered);
  }, [searchParams, sortBy, priceRange]);

  const handleCategoryChange = (category) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
      searchParams.delete('category');
    } else {
      setSelectedCategory(category);
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container-custom">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2">Shop All Products</h1>
          <p className="text-gray-600">Showing {filteredProducts.length} products</p>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat.id} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategory === cat.slug}
                        onChange={() => handleCategoryChange(cat.slug)}
                        className="mr-2 rounded border-gray-300 text-brand-teal focus:ring-brand-teal"
                      />
                      <span className="text-sm">{cat.name}</span>
                      <span className="text-xs text-gray-500 ml-auto">({cat.count})</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Sort By</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowFilters(true)}
              className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              <FiFilter />
              Filters
            </button>

            {/* Products Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No products found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSortBy('featured');
                    setSelectedCategory('');
                    setPriceRange([0, 200]);
                    setSearchParams({});
                  }}
                  className="text-brand-teal hover:text-opacity-80 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Mobile Filters Modal */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden"
            onClick={() => setShowFilters(false)}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              className="absolute left-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              {/* Copy filter content from desktop sidebar here */}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage; 