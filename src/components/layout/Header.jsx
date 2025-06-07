import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo main.png" alt="MAC Labs" className="h-20" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/products"
              className="text-gray-700 hover:text-brand-teal font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-brand-teal font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-brand-teal font-medium transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute top-24 left-0 right-0 bg-white shadow-lg lg:hidden">
              <nav className="container mx-auto px-4 py-4">
                <Link
                  to="/products"
                  className="block py-2 text-brand-teal hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Products
                </Link>
                <Link
                  to="/about"
                  className="block py-2 text-brand-teal hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 text-brand-teal hover:opacity-80"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 