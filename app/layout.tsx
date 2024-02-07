import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PupProvider } from './context/pupContext';
import { Toaster } from 'react-hot-toast';
import Nav from './component/ nav';
import Footer from './component/footer';

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'SWFLFrenchies',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position='top-right' toastOptions={{duration: 3000}} />
        <Nav />
        <PupProvider>
          {children}
        </PupProvider>
      </body>
    </html>
  )
}
