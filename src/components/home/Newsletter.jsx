import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-16 bg-brand-light">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay in Style</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter and get 10% off your first order. Plus, be the first to know about new arrivals, exclusive offers, and style tips.
          </p>
          
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-6 py-4 pr-32 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </div>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-0 right-0 text-green-600 text-sm"
              >
                Thank you for subscribing! Check your email for a welcome gift.
              </motion.div>
            )}
          </form>
          
          <p className="text-xs text-gray-500 mt-4">
            By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter; 