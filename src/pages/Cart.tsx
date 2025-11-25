import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Cart = () => {
  // Example cart items data (replace with actual data fetching)
  const cartItems = [
    { id: 1, name: 'Product A', price: 20, quantity: 2 },
    { id: 2, name: 'Product B', price: 30, quantity: 1 },
  ];

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <Card key={item.id}>
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>Price: ${item.price}</CardDescription>
              </CardHeader>
              <CardContent>
                Quantity: {item.quantity}
              </CardContent>
              <CardFooter>
                <Button variant="outline">Update Quantity</Button>
                <Button variant="destructive">Remove</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Total: ${calculateTotal()}</h2>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default Cart;
