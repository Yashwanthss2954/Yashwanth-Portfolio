const roles = [
  { date: 'AUG 2025 — PRESENT', title: 'Software Development Engineer · AI & Data Science', points: [
    'Engineered a Python, FastAPI, and RAG project intelligence agent that finds similar Jira stories, recommends reuse or new creation, automates story generation, and keeps project documentation synchronized.',
    'Built an executive project intelligence agent in Microsoft Copilot Studio that turns fragmented Excel status trackers into conversational insights about progress, milestones, and risks.',
    'Created an AI Scrum Master platform with role-based dashboards, standup summaries, duplicate detection, blocker identification, and sprint health insights.',
    'Developing order processing automation that extracts details from SWIFT, GLM, DTA, Laser, and attachments, saving an estimated 10+ hours per week.',
    'Automated Jira story creation from meeting transcripts, reducing sprint planning overhead by 2 hours per sprint; built Power BI reporting that saves 2–5 days of manual reporting monthly.',
    'Developed incremental Jira ETL and Oracle-to-BigQuery pipelines with validation, nested JSON parsing, and query optimization; achieved 100% data parity.',
    'Built data pipelines for dependency analysis and outage investigations, plus an AI scheduling assistant that saves users 12+ hours per week.',
  ]},
  { date: 'FEB 2025 — AUG 2025', title: 'Software Development Engineer Intern', points: [
    'Designed Microsoft Copilot Studio agents to automate enterprise workflows, saving over 500 team hours annually.',
    'Developed a Python, FastAPI, and Flask quote classification and promotion recommendation system using ServiceNow APIs, saving 8 hours per week in manual review.',
  ]},
]

export default function Experience() { return <>
  <header className="page-intro"><div className="eyebrow">Experience · February 2025 — Present</div><h1>Building AI and data systems at Lumen Technologies.</h1><p>Software Development Engineer in AI &amp; Data Science, working on enterprise AI agents, workflow automation, analytics, and data infrastructure.</p></header>
  <div className="content-grid">{roles.map(role=><article className="content-card" key={role.date}><div className="mono">LUMEN TECHNOLOGIES · {role.date}</div><h2>{role.title}</h2><ul>{role.points.map(point=><li key={point}>{point}</li>)}</ul></article>)}</div>
</> }
