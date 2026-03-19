import type { Metadata } from 'next'
import { Poppins, Playfair_Display, Cinzel } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { AuthProvider } from '@/context/AuthContext'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-playfair',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Zingking Masala | Premium Indian Spices And Blended Masalas',
  description:
    'Zingking Masala offers authentic Indian spices, blended masalas, and distributor-ready FMCG packs. FSSAI certified quality for homes, restaurants, and retail.',
  keywords:
    'Zingking Masala, Indian spices, blended masala, garam masala, kitchen king, biryani masala, chhole masala, spice manufacturer India, spice distributor',
  authors: [{ name: 'Zingking Masala' }],
  creator: 'Zingking Masala',
  publisher: 'Zingking Masala',
  robots: 'index, follow',
  openGraph: {
    title: 'Zingking Masala',
    description: 'Bring home the taste of tradition with premium Indian masalas.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zingking Masala',
    description: 'Premium Indian spices',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable} ${cinzel.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#7B1E1E" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body>
        <AuthProvider>
          <Navbar />
          {children}
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
