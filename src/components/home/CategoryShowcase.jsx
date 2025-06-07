import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CategoryShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const categories = [
    {
      name: "Women's Collection",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=women",
      itemCount: "245 Items"
    },
    {
      name: "Men's Collection",
      image: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=men",
      itemCount: "189 Items"
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=accessories",
      itemCount: "127 Items"
    },
    {
      name: "Footwear",
      image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      link: "/products?category=shoes",
      itemCount: "93 Items"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our carefully curated collections for every style and occasion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={category.link}
                  className="group block relative h-80 overflow-hidden rounded-lg"
                >
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.itemCount}</p>
                    <div className="mt-4 flex items-center text-sm font-medium group-hover:gap-2 transition-all">
                      Shop Now
                      <svg 
                        className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CategoryShowcase; 