'use client'
import {SessionProvider} from 'next-auth/react';
import Header from '@/ui/Header';
import Footer from '@/ui/Footer';

export default function ProviderWrapper({children}:{children:React.ReactNode}) {
    return(
        <SessionProvider refetchOnWindowFocus={false}>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </SessionProvider>
    )
}