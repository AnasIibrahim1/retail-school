"use client"
import React, { useState, useEffect } from 'react';
import './global.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import Header from '@/components/Header/Header';
import Loading from '@/components/Loading/Loading';
import { AnimatePresence, motion } from 'motion/react';
import dynamic from 'next/dynamic';
const CustomCursor = dynamic(() => import('@/components/CustomCursor/CustomCursor'), { ssr: false });

export default function RootLayout({children}: {children: React.ReactNode}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for 2 seconds on initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" dir="ltr">
      
      <body style={{ 
        fontFamily: 'Jost, sans-serif', 
        margin: 0, 
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}>
        <AnimatePresence mode="wait">
          {isLoading ? (
            <Loading key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Header/>
              <CustomCursor />
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </body>
    </html>
  );
}
