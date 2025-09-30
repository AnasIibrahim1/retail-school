"use client"
import React from 'react';
import './global.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import Header from '@/components/Header/Header';
import dynamic from 'next/dynamic';
const CustomCursor = dynamic(() => import('@/components/CustomCursor/CustomCursor'), { ssr: false });

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="ltr">
      
      <body style={{ 
        fontFamily: 'Jost, sans-serif', 
        margin: 0, 
        boxSizing: 'border-box',
        overflowX: 'hidden',
      }}>
<Header/>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
