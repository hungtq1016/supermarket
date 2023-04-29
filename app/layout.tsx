"use client"

import '../style/globals.css';
import React from 'react';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import ProviderWrapper from '@/ui/Auth/ProviderWrapper';

export default function RootLayout({children}:{children:React.ReactNode}) {
  
  return (
    <html>
      <head>
        <title>S-market</title>
      </head>
      <body>
        <Header/>
        <main>
          <ProviderWrapper >
            {children}
          </ProviderWrapper>
          
        </main>
        <Footer/>
      </body>
    </html>
  );
}
