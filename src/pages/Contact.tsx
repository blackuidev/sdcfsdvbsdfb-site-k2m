import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  message: yup.string().required('Message is required'),
}).required();

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      // Simulate form submission (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log('Form data:', data);
      toast.success('Message sent successfully!', { position: "top-center", autoClose: 3000 });
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast.error('Failed to send message. Please try again.', { position: "top-center", autoClose: 3000 });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black min-h-screen text-white py-20">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542298477-0640381976de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-30"
      />
      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="p-8 backdrop-blur-md bg-white/10 border-white/20 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
                <Input type="text" id="name" {...register('name')} className="mt-1 block w-full bg-white/5 border-white/10 text-white" />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
                <Input type="email" id="email" {...register('email')} className="mt-1 block w-full bg-white/5 border-white/10 text-white" />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email?.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</Label>
                <Textarea id="message" rows={5} {...register('message')} className="mt-1 block w-full bg-white/5 border-white/10 text-white" />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message?.message}</p>}
              </div>
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300">Send Message</Button>
            </form>
          </motion.div>

          <div className="p-8 backdrop-blur-md bg-white/10 border-white/20 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <address className="text-gray-400">
              <p>123 Adidas Street, Shoe City</p>
              <p>Phone: +1 555-123-4567</p>
              <p>Email: info@adidasshoes.com</p>
            </address>
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24214.578929844933!2d-73.99040514760575!3d40.75676150594483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258e4a1cda3d1%3A0xc249ba3f9267f444!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701897987009!" // Replace with your actual Google Maps embed URL
                width="100%"
                height="300"
                style={{ border: 0 }} // Added style prop to remove the border
                allowFullScreen={false} // Changed to false for better security (sandbox attribute is deprecated)
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
