import Link from 'next/link'
import { ArrowUpRight, Mail } from 'lucide-react'

export default function Contact() {
  return <>
    <header className="page-intro"><div className="eyebrow">Contact</div><h1>Let&apos;s make something useful.</h1><p>Have a project, an interesting engineering challenge, or an idea you&apos;d like to explore? I&apos;d be happy to hear about it.</p></header>
    <section className="contact-panel">
      <div className="mono">START A CONVERSATION</div>
      <h2 style={{fontFamily:'Manrope',fontSize:26,letterSpacing:'-.05em',margin:'12px 0'}}>Get in touch</h2>
      <p>For conversations about AI engineering, data platforms, or interesting product challenges, reach out through any of these channels.</p>
      <div className="contact-options">
        <a className="button-primary" href="mailto:yashwanthss2954@gmail.com"><Mail size={15}/> Email me <ArrowUpRight size={15}/></a>
        <a className="button-secondary" href="https://www.linkedin.com/in/yashwanth-bhaskaruni" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={15}/></a>
        <a className="button-secondary" href="https://github.com/Yashwanthss2954" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a>
      </div>
      <p style={{margin:'22px 0 0',fontSize:13}}><a href="tel:+917013567903">+91 70135 67903</a></p>
    </section>
  </>
}
