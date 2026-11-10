const groups = [
  ['Programming', 'Python, Java, SQL, JavaScript, C++'],
  ['Generative AI & agentic AI', 'LLMs, AI agents, RAG, prompt engineering, NLP, semantic search'],
  ['Machine learning', 'Scikit-learn, TensorFlow, PyTorch, deep learning, OpenCV, YOLOv8'],
  ['Backend development', 'FastAPI, Flask, REST APIs, microservices, Node.js, React, Streamlit'],
  ['Data engineering', 'ETL pipelines, data validation, data migration, incremental loading, SQL optimization'],
  ['Databases', 'Oracle, Google BigQuery, SQL Server, MySQL, SQLite, Dataverse, Gremlin'],
  ['Cloud & tools', 'Azure, Databricks, GCP, Docker, Git, CI/CD, Power BI, Copilot Studio, Power Apps, Power Automate'],
  ['Computer science', 'Data structures & algorithms, object-oriented programming, DBMS'],
]
export default function Skills() { return <>
  <header className="page-intro"><div className="eyebrow">Technical skills</div><h1>Tools for solving problems.</h1><p>Skills and technologies from my current résumé, spanning AI, backend engineering, data systems, and cloud platforms.</p></header>
  <div className="content-grid">{groups.map(([name,skills])=><section className="skill-group" key={name}><h2>{name}</h2><div className="skill-tags">{skills.split(', ').map(skill=><span className="tag" key={skill}>{skill}</span>)}</div></section>)}</div>
</> }
