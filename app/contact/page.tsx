import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function Contact() {
  return <>
    <header className="page-intro"><div className="eyebrow">Contact</div><h1>Talk about AI and data engineering</h1><p>For conversations about AI engineering, data platforms, or product work, reach out by email or connect on LinkedIn.</p></header>
    <section className="contact-panel">
      <div className="mono">Contact details</div>
      <h2>Get in touch</h2>
      <p>For conversations about AI engineering, data platforms, or interesting product challenges, reach out through any of these channels.</p>
      <div className="contact-options">
        <a className="button-primary" href="mailto:yashwanthss2954@gmail.com"><Mail size={16}/> Email me <ArrowUpRight size={16}/></a>
        <a className="button-secondary" href="https://www.linkedin.com/in/yashwanth-bhaskaruni" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={16}/></a>
        <a className="button-secondary" href="https://github.com/Yashwanthss2954" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a>
      </div>
      <p className="contact-phone"><a href="tel:+917013567903">+91 70135 67903</a></p>
    </section>
  </>
}
