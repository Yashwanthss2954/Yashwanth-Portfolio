import { ChevronDown } from 'lucide-react'

const roles = [
  { date: 'Aug 2025 — Present', title: 'Software Development Engineer · AI & Data Science', points: [
    'Engineered a project intelligence agent with Python, FastAPI, and RAG to find similar Jira stories, recommend reuse or new story creation, and automate story generation. Built living project documentation from requirements and existing artifacts, synchronized with Jira throughout the project lifecycle.',
    'Built an executive project intelligence agent in Microsoft Copilot Studio to analyze fragmented Excel status trackers and provide VPs and Senior Directors with conversational insights into project progress, milestones, risks, and performance metrics.',
    'Built an AI Scrum Master platform with role-based dashboards for admins, Scrum Masters, and employees. Implemented LLM standup summaries, semantic duplicate detection, blocker identification, and sprint health insights.',
    'Developing end-to-end order processing automation for project coordinators using the existing DCOT platform. It gathers information from SWIFT, GLM, DTA, Laser, and order attachments, extracts customer and order details, and populates DCOT, saving an estimated 10+ hours per week in manual coordination.',
    'Developed incremental Jira ETL pipelines with backfilling for reliable data synchronization, analytics, and engineering knowledge retrieval.',
    'Automated Jira story creation from meeting transcripts with LLM-based summarization and information extraction, including optional assignee selection. Reduced sprint planning overhead by 2 hours per sprint.',
    'Built Power BI dashboards and workforce analytics pipelines combining project allocations, employee time logs, and sprint data to report on working hours, training effort, resource utilization, project completion, sprint velocity, and engineering productivity. Reduced manual reporting effort by 2–5 days per month.',
    'Implemented Oracle-to-Google BigQuery ETL pipelines with multi-point validation, nested JSON parsing, and query optimization, achieving 100% data parity across migrated datasets.',
    'Built an AI scheduling assistant using NLP and LLM-based reasoning over calendar data to resolve meeting conflicts and recommend uninterrupted focus time, saving 12+ hours per week per user.',
  ]},
  { date: 'Feb 2025 — Aug 2025', title: 'Software Development Engineer Intern', points: [
    'Designed Microsoft Copilot Studio agents to automate enterprise workflows, contributing to savings of more than 500 team hours annually.',
    'Developed a quote classification and promotion recommendation system using Python, FastAPI, Flask, and ServiceNow APIs to support sales decisions, improve decision accuracy, and save 8 hours per week in manual review.',
    'Collaborated with cross-functional teams to integrate AI applications and workflow automation into enterprise systems.',
  ]},
]

export default function Experience() { return <>
  <header className="page-intro"><div className="eyebrow">Experience · February 2025 — Present</div><h1>AI and data engineering at Lumen Technologies</h1><p>Software Development Engineer in AI &amp; Data Science, working on enterprise agents, workflow automation, analytics, and data infrastructure.</p></header>
  <div className="content-grid experience-grid">{roles.map(role=><details className="experience-role" key={role.date}>
    <summary className="experience-summary">
      <span className="experience-role-copy"><span className="mono">Lumen Technologies · {role.date}</span><span className="experience-title">{role.title}</span></span>
      <span className="experience-action"><span className="expand-label">View details</span><span className="collapse-label">Hide details</span><ChevronDown size={16} /></span>
    </summary>
    <div className="experience-details"><ul>{role.points.map(point=><li key={point}>{point}</li>)}</ul></div>
  </details>)}</div>
</> }
