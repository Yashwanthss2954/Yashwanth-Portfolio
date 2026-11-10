const work: [string, string, string, string[]][] = [
  ['AI engineering', 'Jira engineering knowledge platform', 'Find related Jira stories with semantic retrieval, review sprint metrics, and create stories through voice or text.', ['Python', 'FastAPI', 'RAG', 'Jira APIs']],
  ['Team delivery', 'AI Scrum Master', 'Role-based dashboards summarize standups, detect duplicate updates, identify blockers, and surface sprint health.', ['AI agents', 'Semantic similarity', 'Analytics']],
  ['Workflow automation', 'Requirements to Jira workflow', 'Connects requirement intake and validation to Jira story creation using Power Apps, Dataverse, Python, SQL, and Jira REST APIs.', ['Power Apps', 'Dataverse', 'Python', 'Jira']],
  ['Data and analytics', 'Incremental Jira analytics pipelines', 'Daily Jira synchronization with incremental loading and backfills supports reporting and AI search.', ['ETL', 'Incremental loading', 'Power BI']],
  ['Cloud data', 'Oracle to BigQuery migration', 'Migration pipelines with data validation, nested JSON parsing, and optimized SQL.', ['Oracle', 'BigQuery', 'SQL']],
  ['Operations', 'Dependency analysis and incident investigation', 'Pipelines connecting Oracle, BigQuery, Gremlin, and SQLite support dependency analysis and production incident investigations.', ['Gremlin', 'Data pipelines', 'Incident analysis']],
  ['Generative AI', 'AI scheduling assistant', 'An LLM and NLP assistant resolves meeting conflicts, optimizes calendars, and recommends uninterrupted focus time.', ['LLMs', 'NLP', 'Calendar optimization']],
]
export default function Platforms() { return <>
  <header className="page-intro"><div className="eyebrow">Lumen Technologies · AI &amp; Data Science</div><h1>Systems I work on</h1><p>Enterprise work across engineering productivity, workflow automation, data migration, analytics, and operations. Descriptions omit internal implementation details.</p></header>
  <div className="content-grid varied-grid platform-list">{work.map(([type,title,copy,tags]) => <article className="content-card" key={title}><div className="mono">{type}</div><h2>{title}</h2><p>{copy}</p><div className="tags">{tags.map(tag=><span key={tag} className="tag">{tag}</span>)}</div></article>)}</div>
</> }
