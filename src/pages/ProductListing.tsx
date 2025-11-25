import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const ProductListing = () => {
  // Dummy product data
  const products = [
    {
      id: 1,
      name: 'Awesome Product 1',
      description: 'This is a fantastic product that will change your life.',
      imageUrl: 'https://images.unsplash.com/photo-1605296867304-46d324a3d669?w=300',
      price: 29.99,
    },
    {
      id: 2,
      name: 'Another Great Product',
      description: 'You will love this product. It is simply amazing.',
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560ba40e5c?w=300',
      price: 39.99,
    },
    {
      id: 3,
      name: 'Incredible Item',
      description: 'An incredible item that you absolutely need!',
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
      price: 49.99,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black min-h-screen text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:scale-105 transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <img src={product.imageUrl} alt={product.name} className="rounded-md mb-4 w-full h-48 object-cover" />
                <CardDescription className="text-gray-400">{product.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold text-green-500">${product.price.toFixed(2)}</span>
                <Button variant="primary">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
