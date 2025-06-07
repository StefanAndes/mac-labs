import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProductDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="/product picture.png"
              alt="HydroElastic"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl font-bold text-brand-teal">HydroElastic</h1>
              <img src="/icon-hydro.svg" alt="Hydro Icon" className="w-8 h-8" />
            </div>

            <p className="text-gray-600 text-lg mb-8">
              Supports hydration<br />
              and tissue elasticity
            </p>

            <div className="flex items-center gap-6 mb-12">
              <span className="text-4xl font-bold text-brand-teal">$25</span>
              <button
                className="bg-brand-teal text-white px-8 py-3 rounded-md font-medium hover:bg-opacity-90 transition-colors"
              >
                ADD TO CART
              </button>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <h2 className="text-2xl font-semibold text-brand-teal">Benefits</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                    <img src="/icon-droplet.svg" alt="Hydration" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Optimal hydration</h3>
                    <p className="text-gray-600">Enhances cellular water retention</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                    <img src="/icon-molecular.svg" alt="Fascial" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Fascial support</h3>
                    <p className="text-gray-600">Improves tissue elasticity and flexibility</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center">
                    <img src="/icon-lab.svg" alt="Clinical" className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Clinically tested</h3>
                    <p className="text-gray-600">Proven results through scientific research</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-12 pt-12 border-t">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-lg mb-2">Usage</h3>
                  <p className="text-gray-600">Take 1-2 capsules daily with water</p>
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-2">Contents</h3>
                  <p className="text-gray-600">60 capsules per bottle</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage; 