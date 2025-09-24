import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import React from 'react';
import './global.css';
import '@fontsource/urbanist/400.css';
import '@fontsource/urbanist/500.css';
import '@fontsource/urbanist/600.css';
import '@fontsource/urbanist/700.css';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="ltr">
      
      <body style={{ 
        fontFamily: 'Urbanist, sans-serif', 
        margin: 0, 
        padding: 0, 
        boxSizing: 'border-box',
        overflowX: 'hidden'
      }}>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
