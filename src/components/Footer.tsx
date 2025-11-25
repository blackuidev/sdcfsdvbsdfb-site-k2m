import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About adidas</h3>
            <p className="text-gray-400">We are committed to providing high-quality athletic footwear and apparel. Explore our latest collections and innovations.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-2">Subscribe to our newsletter for exclusive offers and updates.</p>
            <div className="flex">
              <Input type="email" placeholder="Enter your email" className="rounded-none bg-gray-800 text-white border-gray-700 focus:ring-blue-500 focus:border-blue-500" />
              <Button className="rounded-none bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaFacebook size={24} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaTwitter size={24} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaInstagram size={24} /></a>
              <a href="#" className="hover:text-blue-500 transition-colors duration-300"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} adidas. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
