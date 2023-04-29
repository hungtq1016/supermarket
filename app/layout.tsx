"use client"

import '../style/globals.css';
import React from 'react';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';
import {SessionProvider} from 'next-auth/react';

export default function RootLayout({children,session}:{children:React.ReactNode,session:any}) {
  
  return (
    <html>
      <head>
        <title>S-market</title>
      </head>
      <body>
        <Header/>
        <main>
          <SessionProvider session={session}>
            {children}
          </SessionProvider>
          
        </main>
        <Footer/>
      </body>
    </html>
  );
}
