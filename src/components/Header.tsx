import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          <span className="text-adidas-red">Adidas</span> Shoe Store
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">Home</Link>
          <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300">Product Listing</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">Contact</Link>
          <Link to="/cart" className="text-gray-300 hover:text-white transition-colors duration-300">Cart</Link>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-adidas-blue"
          />
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMobileMenu} className="md:hidden text-gray-300 hover:text-white focus:outline-none">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-gray-900/90 backdrop-blur-md p-4 rounded-b-md shadow-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300 block">Home</Link>
              <Link to="/products" className="text-gray-300 hover:text-white transition-colors duration-300 block">Product Listing</Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 block">Contact</Link>
              <Link to="/cart" className="text-gray-300 hover:text-white transition-colors duration-300 block">Cart</Link>
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-adidas-blue"
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
