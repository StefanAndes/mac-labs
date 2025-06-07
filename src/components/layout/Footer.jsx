import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const footerLinks = {
    Products: [
      { label: 'HydroElastic', path: '/products' },
      { label: 'Coming Soon', path: '/products?category=coming-soon' },
    ],
    Company: [
      { label: 'About Us', path: '/about' },
      { label: 'Contact', path: '/contact' },
      { label: 'Research', path: '/research' },
      { label: 'Careers', path: '/careers' },
    ],
    Support: [
      { label: 'FAQ', path: '/faq' },
      { label: 'Shipping', path: '/shipping' },
      { label: 'Returns', path: '/returns' },
      { label: 'Privacy Policy', path: '/privacy' },
    ],
  };

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src="/logo main.png" alt="MAC Labs" className="h-16 mb-6" />
            <p className="mb-4 text-sm">
              Advancing wellness through science-backed formulas.
              Our innovative solutions support optimal hydration and tissue health.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="mb-4 lg:mb-0">
              <h4 className="text-white font-semibold mb-2">Stay Updated</h4>
              <p className="text-sm">Get the latest updates on our research and products</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-2 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-teal focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-brand-teal text-white rounded-lg hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2024 MAC Labs. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 