'use client'
import {SessionProvider} from 'next-auth/react';
import Header from '@/ui/Include/Header';
import Footer from '@/ui/Include/Footer';

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