import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Database, Network, Sparkles } from 'lucide-react'

const projects = [
  { n: '01', type: 'AI · MACHINE LEARNING', title: 'DataLens AI', copy: 'Automates data preparation, model training, evaluation, and visualization, with a chatbot for natural-language dataset exploration.', tags: ['Python', 'Streamlit', 'Machine Learning', 'NLP'] },
  { n: '02', type: 'COMPUTER VISION', title: 'Automatic Driving Test Tracker', copy: 'A real-time driving test evaluation system using YOLOv8 and OpenCV, achieving 95% detection accuracy.', tags: ['Python', 'Flask', 'OpenCV', 'YOLOv8'] },
  { n: '03', type: 'INDOOR NAVIGATION', title: 'Indoor Navigation for Museums', copy: 'Interactive SVG maps and graph-based pathfinding help visitors find efficient routes through museums.', tags: ['JavaScript', 'SVG', 'Firebase', 'Data Structures'] },
  { n: '04', type: 'WEB APPLICATION', title: 'Household Services Application', copy: 'A role-based services platform with separate admin and user dashboards for requests, approvals, and search.', tags: ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'Bootstrap'] },
]

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy-column">
        <div className="hero-kicker"><i/>SOFTWARE DEVELOPMENT ENGINEER <span>·</span> AI &amp; DATA SCIENCE</div>
        <h1>I build AI systems that make <span>work move.</span></h1>
        <p className="hero-copy">I&apos;m Yashwanth Tirumala Sai Akhil Bhaskaruni, a Software Development Engineer focused on Generative AI, agentic systems, backend services, and data engineering.</p>
        <div className="hero-actions">
          <Link className="button-primary" href="/platforms">Explore selected work <ArrowRight size={16} /></Link>
          <a className="button-secondary" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Yashwanth_AI_Engineer.pdf`} download>Download résumé <ArrowDown size={15}/></a>
        </div>
        <div className="hero-proof"><span className="proof-mark">✳</span><span>From useful prototypes<br/>to production-minded systems</span></div>
      </div>
      <div className="hero-art" aria-label="A diagram showing signals becoming intelligence and then useful action">
        <div className="art-grid"/>
        <div className="art-index">FIELD NOTES <span>01—03</span></div>
        <div className="signal-ring ring-a"/><div className="signal-ring ring-b"/><div className="signal-ring ring-c"/>
        <div className="signal-core"><span>AI</span><i>+</i></div>
        <div className="signal-node node-data"><Database size={15}/><span>DATA</span></div>
        <div className="signal-node node-context"><Network size={15}/><span>CONTEXT</span></div>
        <div className="signal-node node-action"><Braces size={15}/><span>ACTION</span></div>
        <div className="flow-card flow-top"><span className="flow-icon"><Sparkles size={13}/></span><span><b>Make complexity useful</b><small>THE WORK, IN ONE LINE</small></span><ArrowUpRight size={15}/></div>
        <div className="flow-card flow-bottom"><span className="live-dot"/><span><b>Systems thinking</b><small>AI · DATA · ENGINEERING</small></span><span className="flow-state">IN PRACTICE</span></div>
        <span className="art-caption">SIGNAL <i/> UNDERSTANDING <i/> OUTCOME</span>
      </div>
    </section>

    <div className="stats" aria-label="Areas of focus">
      <div className="stat"><div className="stat-value">95<span>%</span></div><div className="stat-label">Detection accuracy<br/>Driving test tracker</div></div>
      <div className="stat"><div className="stat-value">10<span>+</span></div><div className="stat-label">Hours saved weekly<br/>Order automation</div></div>
      <div className="stat"><div className="stat-value">500<span>+</span></div><div className="stat-label">Problems solved<br/>LeetCode</div></div>
    </div>

    <section className="section">
      <div className="section-head"><div><div className="eyebrow">Selected work</div><h2 className="section-title">Problems worth solving.</h2></div><Link className="text-link" href="/platforms">All platform work <ArrowUpRight size={15}/></Link></div>
      <div className="project-grid">{projects.map(p => <article className={`project-card project-${p.n}`} key={p.n}>
        <div className="project-top"><span className="project-number">{p.n}</span><span>{p.type}</span></div><div className="project-emblem" aria-hidden="true"><span>{p.n === '01' ? '↗' : p.n === '02' ? '◎' : p.n === '03' ? '✳' : '⌘'}</span></div><h3>{p.title}</h3><p>{p.copy}</p>
        <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
      </article>)}</div>
    </section>

    <section className="section" style={{ borderTop: '1px solid var(--line)' }}>
      <div className="split"><div><div className="eyebrow">How I work</div><h2 className="section-title">From signal to shipped software.</h2></div>
        <div><p className="split-copy">I like working on the seams between systems: where messy data becomes a clear signal, where a promising model meets production constraints, and where thoughtful engineering makes a workflow simpler for the people using it.</p>
          <div className="capability-list"><div className="capability"><span><Sparkles size={15}/></span>Generative &amp; agentic AI</div><div className="capability"><span><Database size={15}/></span>Data engineering</div><div className="capability"><span><Braces size={15}/></span>Backend systems</div><div className="capability"><span><Network size={15}/></span>Workflow automation</div></div>
        </div>
      </div>
    </section>
    <section className="section" style={{ paddingTop: 0 }}><div className="cta-panel"><div><h2>Have a worthwhile problem?</h2><p>I&apos;m always glad to talk engineering, AI, and thoughtful product work.</p></div><Link className="button-primary" href="/contact">Start a conversation <ArrowDown size={15}/></Link></div></section>
  </>
}
