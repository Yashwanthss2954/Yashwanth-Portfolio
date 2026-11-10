const work: [string, string, string, string[]][] = [
  ['AI ENGINEERING', 'Jira engineering knowledge platform', 'Search related Jira stories with RAG-based semantic retrieval, analyze sprint metrics, and create new stories through voice and text interactions.', ['Python', 'FastAPI', 'RAG', 'Jira APIs']],
  ['INTELLIGENT DELIVERY', 'AI Scrum Master', 'Role-based dashboards with AI features to summarize standups, detect duplicate updates, identify blockers, and surface sprint health insights.', ['AI Agents', 'Semantic similarity', 'Analytics']],
  ['WORKFLOW AUTOMATION', 'Requirements to Jira workflow', 'Automates requirement intake, validation, and Jira story creation by connecting Power Apps, Dataverse, Python, SQL, and Jira REST APIs.', ['Power Apps', 'Dataverse', 'Python', 'Jira']],
  ['DATA & ANALYTICS', 'Incremental Jira analytics pipelines', 'Daily Jira synchronization with incremental loading and automated backfills, supporting dependable reporting and AI search.', ['ETL', 'Incremental loading', 'Power BI']],
  ['CLOUD DATA', 'Oracle to BigQuery migration', 'Enterprise migration pipelines with data validation, nested JSON parsing, and optimized SQL.', ['Oracle', 'BigQuery', 'SQL']],
  ['OPERATIONS INTELLIGENCE', 'Dependency analysis & incident investigation', 'Pipelines connecting Oracle, BigQuery, Gremlin, and SQLite to improve dependency analysis and production incident root-cause investigation.', ['Gremlin', 'Data pipelines', 'Incident analysis']],
  ['GENERATIVE AI', 'AI scheduling assistant', 'An LLM and NLP assistant that resolves meeting conflicts, optimizes calendars, and recommends uninterrupted focus time.', ['LLMs', 'NLP', 'Calendar optimization']],
]
export default function Platforms() { return <>
  <header className="page-intro"><div className="eyebrow">Lumen Technologies · AI &amp; Data Science</div><h1>Platforms &amp; systems</h1><p>Enterprise work across AI-powered engineering productivity, workflow automation, data migration, analytics, and operations. Descriptions are based on my experience and omit internal implementation details.</p></header>
  <div className="content-grid">{work.map(([type,title,copy,tags]) => <article className="content-card" key={title}><div className="mono">{type}</div><h2>{title}</h2><p>{copy}</p><div className="tags" style={{marginTop:18}}>{tags.map(tag=><span key={tag} className="tag">{tag}</span>)}</div></article>)}</div>
</> }
