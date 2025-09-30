import React from 'react';
import './global.css';
import '@fontsource/jost/400.css';
import '@fontsource/jost/500.css';
import '@fontsource/jost/600.css';
import '@fontsource/jost/700.css';
import Header from '@/components/Header/Header';

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" dir="ltr">
      
      <body style={{ 
        fontFamily: 'Jost, sans-serif', 
        margin: 0, 
        padding: '0 100px', 
        boxSizing: 'border-box',
        overflowX: 'hidden',
        minHeight: '150vh'
      }}>
<Header/>
        {children}
      </body>
    </html>
  );
}
