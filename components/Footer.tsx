import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <span>© {new Date().getFullYear()} <span>Yashwanth Bhaskaruni</span></span>
    <span>AI, data, and software engineering</span>
    <Link className="text-link" href="/contact">Get in touch <ArrowUpRight size={16} /></Link>
  </div></footer>
}
