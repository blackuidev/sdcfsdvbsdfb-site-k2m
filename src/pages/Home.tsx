"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { EmblaCarousel } from '@/components/ui/carousel';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-100 to-white py-20 px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Step into Innovation with Adidas
            </motion.h1>
            <motion.p
              className="text-lg text-gray-700 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Experience the perfect blend of heritage and cutting-edge technology.
              Find your stride with Adidas - where performance meets style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              <Button size="lg">Shop Now</Button>
            </motion.div>
          </div>
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1542296635-0b34495b7b6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Adidas Shoe"
              className="max-w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            Featured Products
          </h2>
          <EmblaCarousel>
            {[
              {
                id: 1,
                imageUrl: "https://images.unsplash.com/photo-1542296635-0b34495b7b6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                name: "Adidas Ultraboost",
                price: "$180",
              },
              {
                id: 2,
                imageUrl: "https://images.unsplash.com/photo-1588949245830-8e5ef4122638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                name: "Adidas NMD",
                price: "$150",
              },
              {
                id: 3,
                imageUrl: "https://images.unsplash.com/photo-1588949245830-8e5ef4122638?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                name: "Adidas Superstar",
                price: "$100",
              },
            ].map((product) => (
              <div key={product.id} className="embla__slide">
                <Card className="">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="text-gray-700">{product.price}</p>
                    <Button className="mt-4">View Details</Button>
                  </div>
                </Card>
              </div>
            ))}
          </EmblaCarousel>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 md:px-16 lg:px-24 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                id: 1,
                quote: "Adidas shoes are the most comfortable and stylish shoes I've ever owned!",
                rating: 5,
                customer: "John Doe",
              },
              {
                id: 2,
                quote: "Great quality and excellent customer service. I highly recommend Adidas!",
                rating: 4,
                customer: "Jane Smith",
              },
              {
                id: 3,
                quote: "I love the innovative designs and superior performance of Adidas shoes.",
                rating: 5,
                customer: "Peter Jones",
              },
            ].map((testimonial) => (
              <Card key={testimonial.id} className="">
                <div className="p-4">
                  <p className="text-gray-700 italic mb-2">"{testimonial.quote}"</p>
                  <div className="flex items-center mb-2">
                    {Array(testimonial.rating)
                      .fill(null)
                      .map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                  </div>
                  <p className="text-gray-900 font-semibold">- {testimonial.customer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        className="py-24 px-8 md:px-16 lg:px-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url("https://images.unsplash.com/photo-1541698444083-023c978f33dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Stay Up-to-Date with Adidas
          </h2>
          <p className="text-lg text-gray-300 mb-6">
            Subscribe to our newsletter for the latest news, exclusive offers, and more.
          </p>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2">
              <form className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="email" className="sr-only">
                    Email
                  </Label>
                  <Input type="email" id="email" placeholder="Enter your email" />
                </div>
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
