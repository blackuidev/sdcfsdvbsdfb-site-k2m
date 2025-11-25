import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-br from-gray-100 to-white min-h-screen text-gray-800 font-sans">
        <header className="bg-white shadow-md py-4 px-6">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-gray-900">Adidas Shoe Store</h1>
            <nav className="mt-2">
              <ul className="flex space-x-4">
                <li><a href="/" className="hover:text-blue-500">Home</a></li>
                <li><a href="#" className="hover:text-blue-500">New Arrivals</a></li>
                <li><a href="#" className="hover:text-blue-500">Sale</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white py-4 mt-8">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Adidas Shoe Store. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
