import React from 'react';
import { cn } from '@/components/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="group relative overflow-hidden bg-white/5 backdrop-blur-md border-white/10 hover:scale-105 transition-all duration-300">
      <CardHeader className="p-4">
        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 flex flex-col items-center">
        <div className="aspect-w-4 aspect-h-3 w-full">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover rounded-md shadow-md"
          />
        </div>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={cn(
                'h-4 w-4',
                index < product.rating ? 'text-yellow-500' : 'text-gray-400'
              )}
            />
          ))}
        </div>
        <CardDescription className="text-center text-muted-foreground">
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 flex items-center justify-between">
        <div className="text-xl font-bold">${product.price.toFixed(2)}</div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm">Add to Cart</Button>
        </div>
      </CardFooter>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>
    </Card>
  );
};

export default ProductCard;
