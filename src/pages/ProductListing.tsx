import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Pagination } from '@/components/ui/pagination';
import { cn } from '@/components/lib/utils';

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  type: string;
  size: number;
  color: string;
}

const dummyProducts: Product[] = [
  {
    id: 1,
    name: 'Adidas Ultraboost DNA',n    description: 'The ultimate running shoe.',
    imageUrl: 'https://images.unsplash.com/photo-1542296633-947138d52505?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 180,
    type: 'running',
    size: 9,
    color: 'black',
  },
  {
    id: 2,
    name: 'Adidas NMD_R1',n    description: 'A stylish and comfortable everyday shoe.',
    imageUrl: 'https://images.unsplash.com/photo-1606107557195-0a29a5b3e742?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 150,
    type: 'lifestyle',
    size: 10,
    color: 'white',
  },
  {
    id: 3,
    name: 'Adidas Stan Smith',n    description: 'A classic tennis shoe with timeless style.',
    imageUrl: 'https://images.unsplash.com/photo-1588438730441-96457b5288e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    price: 100,
    type: 'tennis',
    size: 8,
    color: 'green',
  },
  {
    id: 4,
    name: 'Adidas Forum Low',n    description: 'A basketball-inspired shoe with a retro look.',
    imageUrl: 'https://images.unsplash.com/photo-1624558472480-2e2239ay0e41?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 120,
    type: 'basketball',
    size: 11,
    color: 'blue',
  },
  {
    id: 5,
    name: 'Adidas Superstar',n    description: 'An iconic shoe with a shell toe design.',
    imageUrl: 'https://images.unsplash.com/photo-1613023667399-bb5730352151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    price: 90,
    type: 'lifestyle',
    size: 9.5,
    color: 'white/black',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <Card className="hover:scale-105 transition-all duration-300">
    <CardHeader>
      <CardTitle>{product.name}</CardTitle>
      <CardDescription>{product.description}</CardDescription>
    </CardHeader>
    <CardContent>
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-md" />
    </CardContent>
    <CardFooter className="flex justify-between">
      <span>${product.price}</span>
      <span>Size: {product.size}</span>
    </CardFooter>
  </Card>
);

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [shoeTypeFilter, setShoeTypeFilter] = useState<string>('');
  const [sizeFilter, setSizeFilter] = useState<string>('');
  const [colorFilter, setColorFilter] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 6;

  useEffect(() => {
    setProducts(dummyProducts);
  }, []);

  useEffect(() => {
    let filtered = [...products];

    if (shoeTypeFilter) {
      filtered = filtered.filter((product) => product.type === shoeTypeFilter);
    }
    if (sizeFilter) {
      filtered = filtered.filter((product) => product.size === parseInt(sizeFilter));
    }
    if (colorFilter) {
      filtered = filtered.filter((product) => product.color === colorFilter);
    }

    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page on filter change
  }, [products, shoeTypeFilter, sizeFilter, colorFilter]);

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Adidas Shoes</h1>

      <div className="flex gap-4 mb-4">
        <Select onValueChange={setShoeTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="running">Running</SelectItem>
            <SelectItem value="lifestyle">Lifestyle</SelectItem>
            <SelectItem value="tennis">Tennis</SelectItem>
            <SelectItem value="basketball">Basketball</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSizeFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="8">8</SelectItem>
            <SelectItem value="9">9</SelectItem>
            <SelectItem value="9.5">9.5</SelectItem>
            <SelectItem value="10">10</SelectItem>
            <SelectItem value="11">11</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setColorFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Color" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All</SelectItem>
            <SelectItem value="black">Black</SelectItem>
            <SelectItem value="white">White</SelectItem>
            <SelectItem value="green">Green</SelectItem>
            <SelectItem value="blue">Blue</SelectItem>
            <SelectItem value="white/black">White/Black</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </motion.div>

      {filteredProducts.length > productsPerPage && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default ProductListing;
