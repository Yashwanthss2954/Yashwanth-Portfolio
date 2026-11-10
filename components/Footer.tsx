import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return <footer className="footer"><div className="container footer-inner">
    <span>© {new Date().getFullYear()} <span>Yashwanth Bhaskaruni</span></span>
    <span>Building thoughtful software, one system at a time.</span>
    <Link className="text-link" href="/contact">Get in touch ↗</Link>
  </div></footer>
}
