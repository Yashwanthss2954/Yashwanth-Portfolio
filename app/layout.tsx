import './globals.css'
import React from 'react'
import Script from 'next/script'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MotionLayout from '../components/MotionLayout'

export const metadata = {
  title: 'Yashwanth Bhaskaruni — Software Development Engineer',
  description: 'Software Development Engineer at Lumen Technologies building generative AI applications, backend systems, and data pipelines.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" suppressHydrationWarning><body><Script id="theme-preference" strategy="beforeInteractive">{`try { document.documentElement.dataset.theme = localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark' } catch { document.documentElement.dataset.theme = 'dark' }`}</Script><div className="site-shell">
    <Navbar />
    <main className="container"><MotionLayout>{children}</MotionLayout></main>
    <Footer />
  </div></body></html>
}
