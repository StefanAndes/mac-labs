import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Summer Collection 2024",
      subtitle: "Discover the latest trends",
      description: "Elevate your style with our exclusive summer collection featuring vibrant colors and comfortable fabrics",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Shop Now",
      link: "/products?season=summer"
    },
    {
      title: "Premium Accessories",
      subtitle: "Complete your look",
      description: "From elegant jewelry to stylish bags, find the perfect accessories to complement any outfit",
      image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "Explore",
      link: "/products?category=accessories"
    },
    {
      title: "Limited Edition",
      subtitle: "Exclusive designs",
      description: "Shop our limited edition pieces before they're gone. Unique styles for the fashion-forward",
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      cta: "View Collection",
      link: "/products?collection=limited"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[500px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentSlide === index ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container-custom">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: currentSlide === index ? 0 : -50, opacity: currentSlide === index ? 1 : 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <p className="text-lg mb-2">{slide.subtitle}</p>
                  <h1 className="text-4xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg mb-8 text-gray-200">{slide.description}</p>
                  <Link
                    to={slide.link}
                    className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {slide.cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection; 