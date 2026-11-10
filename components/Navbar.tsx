'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react'

const LINKS = [
  ['Projects', '/open-source'], ['Work', '/platforms'], ['Experience', '/experience'], ['Research', '/research'],
  ['Skills', '/skills'], ['About', '/about'], ['Notes', '/blog'], ['Milestones', '/achievements']
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    const nextTheme = savedTheme === 'light' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
  }, [])

  function toggleTheme() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    document.documentElement.dataset.theme = nextTheme
    window.localStorage.setItem('portfolio-theme', nextTheme)
  }

  return <header className="topbar">
    <nav className="container nav" aria-label="Main navigation">
      <Link href="/" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-mark">YB</span><span>Yashwanth Bhaskaruni<span style={{ color: 'var(--lime)' }}>.</span></span>
      </Link>
      <div className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map(([label, href]) => <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined} onClick={() => setOpen(false)}>Contact</Link>
      </div>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
        {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
      </button>
      <Link className="nav-cta" href="/contact">Let&apos;s talk <ArrowUpRight size={15} /></Link>
      <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
    </nav>
  </header>
}
