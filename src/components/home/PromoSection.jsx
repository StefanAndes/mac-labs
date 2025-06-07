import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PromoSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Research Spotlight */}
          <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-lg group">
            <div className="absolute inset-0 bg-brand-teal/10" />
            <div className="absolute inset-0 flex items-center">
              <div className="p-8 lg:p-12">
                <p className="text-sm uppercase tracking-wider mb-2 text-brand-teal font-medium">Research Spotlight</p>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">The Science of Hydration</h3>
                <p className="text-lg mb-6">
                  Discover how our innovative formula enhances cellular hydration and tissue elasticity through advanced scientific research.
                </p>
                <Link
                  to="/research"
                  className="inline-block bg-brand-teal text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Right Promos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Clinical Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-56 sm:h-auto overflow-hidden rounded-lg group"
            >
              <div className="absolute inset-0 bg-brand-teal/5" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Clinical Results</h4>
                  <p className="text-sm mb-4">See the proven effectiveness in our clinical trials</p>
                  <Link
                    to="/clinical-results"
                    className="inline-flex items-center text-sm font-medium text-brand-teal hover:gap-2 transition-all"
                  >
                    View Studies
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Professional Use */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative h-56 sm:h-auto overflow-hidden rounded-lg group"
            >
              <div className="absolute inset-0 bg-brand-teal/5" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Professional Use</h4>
                  <p className="text-sm mb-4">Trusted by healthcare professionals</p>
                  <Link
                    to="/professional"
                    className="inline-flex items-center text-sm font-medium text-brand-teal hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Research & Development */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative h-56 sm:h-auto overflow-hidden rounded-lg group sm:col-span-2"
            >
              <div className="absolute inset-0 bg-brand-teal/5" />
              <div className="absolute inset-0 flex items-center">
                <div className="p-6">
                  <p className="text-sm uppercase tracking-wider mb-2 text-brand-teal">Innovation</p>
                  <h4 className="text-2xl font-bold mb-2">Research & Development</h4>
                  <p className="text-sm mb-4">Exploring new frontiers in hydration science</p>
                  <Link
                    to="/research"
                    className="inline-flex items-center text-sm font-medium text-brand-teal hover:gap-2 transition-all"
                  >
                    Discover More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoSection; 