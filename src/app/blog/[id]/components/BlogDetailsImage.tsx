"use client"
import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import './BlogDetailsImage.css';

interface BlogPost {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
  href: string;
}

interface BlogDetailsImageProps {
  blogPost: BlogPost;
}

export default function BlogDetailsImage({ blogPost }: BlogDetailsImageProps) {
  return (
    <section className="blog-details-image">
      <motion.div
        className="image-container"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Image
          src={blogPost.image}
          alt={blogPost.title}
          width={1200}
          height={600}
          className="blog-image"
          priority
        />
        <div className="image-overlay" />
      </motion.div>
    </section>
  );
}
