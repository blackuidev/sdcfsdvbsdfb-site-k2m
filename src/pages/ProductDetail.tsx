import React from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

const ProductDetail = () => {
  const { productId } = useParams();

  // Placeholder product data
  const product = {
    id: productId,
    name: `Product ${productId}`,
    description: `This is the description for Product ${productId}.`,
    imageUrl: `https://images.unsplash.com/photo-1606787366850-de6330128ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`,
    price: 99.99,
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">{product.name}</CardTitle>
          <CardDescription>Learn more about our awesome product.</CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-gray-700">{product.description}</p>
          <p className="text-xl font-bold mt-2">${product.price}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-4">
          <Button variant="primary">Add to Cart</Button>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">View Details</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{product.name} Details</DialogTitle>
                <DialogDescription>
                  More information about {product.name}.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="name" className="text-right">Name</label>
                  <input type="text" id="name" value={product.name} disabled className="col-span-3 rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:bg-gray-100" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label htmlFor="description" className="text-right">Description</label>
                  <textarea id="description" value={product.description} disabled className="col-span-3 rounded-md border border-gray-200 px-3 py-2 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:bg-gray-100"></textarea>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetail;