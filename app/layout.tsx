
import '../style/globals.css';

import React from 'react';
import ProviderWrapper from '@/ui/Auth/ProviderWrapper';

export const metadata = {
  title: {
    default: 'S-market',
    template: '%s | S-market',
  },
  description: 'My ecommerce'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html>
      <head>
        <title>S-market</title>
      </head>
      <body>
        <ProviderWrapper >
            {children}
        </ProviderWrapper>
      </body>
    </html>
  );
}
