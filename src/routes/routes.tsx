import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Import page components
import Index from '../pages/Index';
import NotFound from '../pages/NotFound';

// Placeholder components for new pages
const Home = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Home Page</h1>
  </div>
);

const ProductListing = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Product Listing</h1>
  </div>
);

const ProductDetail = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Product Detail</h1>
  </div>
);

const Cart = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Cart</h1>
  </div>
);

const Checkout = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Checkout</h1>
  </div>
);

const Contact = () => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <h1 className="text-4xl font-bold text-gray-800">Contact</h1>
  </div>
);

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductListing />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
