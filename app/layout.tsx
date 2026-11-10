import './globals.css'
import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import MotionLayout from '../components/MotionLayout'

export const metadata = {
  title: 'Yashwanth Bhaskaruni — Software Development Engineer',
  description: 'Software Development Engineer at Lumen Technologies building generative AI applications, backend systems, and data pipelines.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><div className="site-shell">
    <Navbar />
    <main className="container"><MotionLayout>{children}</MotionLayout></main>
    <Footer />
  </div></body></html>
}
