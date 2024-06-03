import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import ModalProvider from '@/providers/modal-provider'
import { ToasterProvider } from '@/providers/toast-provider'
import { Suspense } from 'react';
import './globals.css'

const font = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Suspense>


          <ModalProvider />
          <ToasterProvider />
          <Navbar />
          {children}
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}