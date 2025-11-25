import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const shoeImages = [
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1856e2e11c7c4b449e86af6001bb7b37_9366/Superstar_Shoes_White_ID7624_01_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/01b09f592e034791a99aaf6001c1f351_9366/Superstar_Shoes_White_ID7624_02_standard_hover.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9c192b7e10a4782b43aaf6001c2004f_9366/Superstar_Shoes_White_ID7624_03_standard.jpg",
    "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/390249320f814111848aaf6001c20c3a_9366/Superstar_Shoes_White_ID7624_04_standard.jpg"
];

const ProductDetail = () => {
    const { productId } = useParams<{ productId: string }>();
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const handleImageHover = () => {
        setIsZoomed(true);
    };

    const handleImageLeave = () => {
        setIsZoomed(false);
    };

    const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSize(e.target.value);
    };

    const handleColorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColor(e.target.value);
    };

    const handleAddToCart = () => {
        // Implement add to cart logic here
        alert("Added to cart!");
    };

    return (
        <div className="container mx-auto p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                    <motion.img
                        src={shoeImages[selectedImageIndex]}
                        alt="Adidas Shoe"
                        className={`w-full h-auto object-cover rounded-lg transition-transform duration-300 ${isZoomed ? 'scale-110' : ''}`}
                        style={{ cursor: 'zoom-in' }}
                        onMouseEnter={handleImageHover}
                        onMouseLeave={handleImageLeave}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className="flex mt-4 space-x-2">
                        {shoeImages.map((image, index) => (
                            <motion.img
                                key={index}
                                src={image}
                                alt={`Adidas Shoe ${index + 1}`}
                                className={`w-20 h-20 object-cover rounded-md cursor-pointer ${selectedImageIndex === index ? 'ring-2 ring-primary' : ''}`}
                                onClick={() => setSelectedImageIndex(index)}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.2 }}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <h1 className="text-2xl font-semibold mb-2">Adidas Superstar</h1>
                    <p className="text-gray-600 mb-4">The Adidas Superstar is a classic sneaker loved for its timeless design and comfort.</p>

                    <div className="flex items-center mb-4">
                        <span className="text-xl font-bold mr-2">$99.99</span>
                        <span className="text-gray-500 line-through">$120.00</span>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="size" className="block text-sm font-medium text-gray-700">Size</label>
                        <Select id="size" onChange={handleSizeChange} value={selectedSize}>
                            <option value="">Select Size</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </Select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="color" className="block text-sm font-medium text-gray-700">Color</label>
                        <Select id="color" onChange={handleColorChange} value={selectedColor}>
                            <option value="">Select Color</option>
                            <option value="white">White</option>
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                        </Select>
                    </div>

                    <div className="mb-4">
                        <Button onClick={handleAddToCart}>Add to Cart</Button>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Open Size Chart</Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>Size Chart</DialogTitle>
                                </DialogHeader>
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left">US Size</th>
                                            <th className="text-left">UK Size</th>
                                            <th className="text-left">EU Size</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>7</td>
                                            <td>6</td>
                                            <td>40</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>7</td>
                                            <td>41</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>8</td>
                                            <td>42</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td>9</td>
                                            <td>43</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </DialogContent>
                        </Dialog>
                    </div>

                    <div>
                        <h2 className="text-xl font-semibold mt-8 mb-2">Customer Reviews</h2>
                        {/* Implement customer reviews component here */}
                        <p className="text-gray-500">No reviews yet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
