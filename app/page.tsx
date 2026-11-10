import Link from 'next/link'
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Database, FilePlus2, GitBranch, Network, Search } from 'lucide-react'

const projects = [
  { n: '01', type: 'Machine learning', title: 'DataLens AI', copy: 'Prepare data, train and evaluate models, and explore datasets through an interactive visualization and natural language interface.', tags: ['Python', 'Streamlit', 'Machine learning', 'NLP'] },
  { n: '02', type: 'Computer vision', title: 'Automatic Driving Test Tracker', copy: 'Evaluate driving tests in real time with YOLOv8 and OpenCV. The system reports 95% detection accuracy.', tags: ['Python', 'Flask', 'OpenCV', 'YOLOv8'] },
  { n: '03', type: 'Indoor navigation', title: 'Indoor Navigation for Museums', copy: 'Help museum visitors find routes with interactive SVG maps and graph-based pathfinding.', tags: ['JavaScript', 'SVG', 'Firebase'] },
  { n: '04', type: 'Web application', title: 'Household Services Application', copy: 'Manage service requests and approvals through separate admin and user dashboards.', tags: ['Python', 'Flask', 'SQLite', 'SQLAlchemy'] },
]

export default function Home() {
  return <>
    <section className="hero">
      <div className="hero-copy-column">
        <div className="hero-kicker"><i />Software Development Engineer <span>·</span> AI &amp; Data Science</div>
        <h1>I build AI and data systems for engineering teams</h1>
        <p className="hero-copy">At Lumen Technologies, I work on engineering knowledge search, workflow automation, analytics, and data pipelines.</p>
        <div className="hero-actions">
          <Link className="button-primary" href="/platforms">View selected work <ArrowRight size={16} /></Link>
          <a className="button-secondary" href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/Yashwanth_AI_Engineer.pdf`} download>Download résumé <ArrowDown size={16} /></a>
        </div>
        <div className="hero-proof"><span className="proof-rule" /><span>Software Development Engineer at Lumen Technologies</span></div>
      </div>

      <section className="hero-workflow" aria-label="Jira engineering knowledge workflow">
        <div className="workflow-header">
          <div className="workflow-title"><GitBranch size={18} /><span>Jira story intelligence</span></div>
          <div className="workflow-stack">Python · FastAPI · RAG</div>
        </div>
        <div className="workflow-query"><span>Engineering requirement</span><strong>Find related Jira stories</strong></div>
        <div className="workflow-route" aria-label="Search, recommend reuse, and draft a story">
          <div className="workflow-step"><span className="workflow-step-index">01</span><Search size={16} /><strong>Search</strong><small>Related stories</small></div>
          <span className="workflow-connector" aria-hidden="true" />
          <div className="workflow-step"><span className="workflow-step-index">02</span><Network size={16} /><strong>Recommend</strong><small>Reuse or create</small></div>
          <span className="workflow-connector" aria-hidden="true" />
          <div className="workflow-step"><span className="workflow-step-index">03</span><FilePlus2 size={16} /><strong>Draft</strong><small>Jira story</small></div>
        </div>
        <div className="workflow-result"><span>Outcome</span><strong>Story creation with project context</strong><p>Related work and synchronized documentation stay connected.</p></div>
      </section>
    </section>

    <div className="stats" aria-label="Selected results">
      <div className="stat"><div className="stat-value">95%</div><div className="stat-label">Detection accuracy<br />Driving test tracker</div></div>
      <div className="stat"><div className="stat-value">10+ hrs</div><div className="stat-label">Estimated time saved weekly<br />Order processing automation</div></div>
      <div className="stat"><div className="stat-value">500+</div><div className="stat-label">Problems solved<br />LeetCode</div></div>
    </div>

    <section className="section">
      <div className="section-head"><div><div className="eyebrow">Selected projects</div><h2 className="section-title">Software built to solve real tasks</h2></div><Link className="text-link" href="/open-source">All projects <ArrowUpRight size={16} /></Link></div>
      <div className="project-grid">{projects.map(p => <article className="project-card" key={p.n}>
        <div className="project-top"><span className="project-number">{p.n}</span><span>{p.type}</span></div>
        <h3>{p.title}</h3><p>{p.copy}</p>
        <div className="tags">{p.tags.map(t => <span className="tag" key={t}>{t}</span>)}</div>
      </article>)}</div>
    </section>

    <section className="section work-principles">
      <div className="split"><div><div className="eyebrow">How I work</div><h2 className="section-title">Make complex workflows easier to use</h2></div>
        <div><p className="split-copy">I build systems that help people find information, reduce repetitive work, and make better use of data. That means treating integration, validation, and reliability as part of the product.</p>
          <div className="capability-list"><div className="capability"><Network size={16} />Generative and agentic AI</div><div className="capability"><Database size={16} />Data engineering</div><div className="capability"><Braces size={16} />Backend systems</div><div className="capability"><GitBranch size={16} />Workflow automation</div></div>
        </div>
      </div>
    </section>
    <section className="section cta-section"><div className="cta-panel"><div><h2>Discuss an engineering challenge</h2><p>Get in touch about AI engineering, data platforms, or product work.</p></div><Link className="button-primary" href="/contact">Contact me <ArrowRight size={16} /></Link></div></section>
  </>
}
