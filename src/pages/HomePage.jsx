import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import CategoryShowcase from '../components/home/CategoryShowcase';
import PromoSection from '../components/home/PromoSection';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-teal mb-6">
              Enhance<br />
              Hydration &<br />
              Elasticity
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              Cutly, science backed formulas<br />
              for daily wellness.
            </p>
            <Link
              to="/products"
              className="inline-block bg-brand-teal text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
            >
              SHOP NOW
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/product picture.png"
              alt="HydroElastic Product"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="bg-brand-light py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-brand-teal mb-12">Featured Product</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <img
                src="/product picture.png"
                alt="HydroElastic"
                className="w-full max-w-sm mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold text-brand-teal">HydroElastic</h3>
                <img src="/icon-hydro.svg" alt="Hydro Icon" className="w-8 h-8" />
              </div>
              
              <p className="text-gray-600 mb-6">
                Supports hydration<br />
                and tissue elasticity
              </p>

              <div className="flex items-center gap-4 mb-8">
                <span className="text-3xl font-bold text-brand-teal">$25</span>
                <Link
                  to="/product/hydroelastic"
                  className="bg-brand-teal text-white px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors"
                >
                  ADD TO CART
                </Link>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-brand-teal mb-4">Benefits</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                      <img src="/icon-droplet.svg" alt="Hydration" className="w-6 h-6" />
                    </div>
                    <span>Optimal hydration</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                      <img src="/icon-molecular.svg" alt="Fascial" className="w-6 h-6" />
                    </div>
                    <span>Fascial support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                      <img src="/icon-lab.svg" alt="Clinical" className="w-6 h-6" />
                    </div>
                    <span>Clinically tested</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="py-16"
      >
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of trending styles and timeless classics
            </p>
          </div>
          <FeaturedProducts />
        </div>
      </motion.section>

      <CategoryShowcase />
      
      <PromoSection />
      
      <section className="py-16 bg-gray-100">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected materials and expert craftsmanship</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4v16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On all orders over $50 with fast delivery options</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-brand-light rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
              <p className="text-gray-600">30-day return policy for your peace of mind</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
};

export default HomePage; 