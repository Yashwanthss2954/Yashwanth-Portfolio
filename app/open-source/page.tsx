import { ArrowUpRight } from 'lucide-react'

const projects: [string, string, string, string[]][] = [
  ['AI · MACHINE LEARNING', 'DataLens AI', 'Automates data preparation, model training, evaluation, and interactive visualization. An integrated AI chatbot supports natural language dataset exploration and helps simplify model prototyping.', ['Python', 'Streamlit', 'Machine Learning', 'NLP']],
  ['COMPUTER VISION', 'Automatic Driving Test Tracker', 'Uses YOLOv8 and OpenCV for real-time driving test evaluation, achieving 95% detection accuracy. A Flask application analyzes candidate performance and automates assessment.', ['Python', 'Flask', 'OpenCV', 'YOLOv8']],
  ['INDOOR NAVIGATION', 'Indoor Navigation for Museums', 'An interactive SVG-based navigation system that optimizes visitor routes through museums. Graph-based pathfinding and Firebase authentication support efficient, secure navigation.', ['JavaScript', 'SVG', 'Firebase', 'Data Structures']],
  ['WEB APPLICATION', 'Household Services Application', 'A role-based household services platform with separate admin and user dashboards for service requests, approvals, and search. Flask and SQLAlchemy power the backend, with SQLite, Jinja2, and responsive Bootstrap interfaces.', ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'Bootstrap']],
]

export default function Projects() { return <>
  <header className="page-intro"><div className="eyebrow">Selected projects</div><h1>Building useful things.</h1><p>Projects in applied machine learning, computer vision, indoor navigation, and web application development.</p></header>
  <div className="content-grid">{projects.map(([topic,title,copy,tags])=><article className="content-card" key={title}><div className="mono">{topic}</div><h2>{title}</h2><p>{copy}</p><div className="tags" style={{marginTop:18}}>{tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div>
  <div className="contact-panel"><div className="mono">MORE PROJECTS</div><h2 style={{fontFamily:'Manrope',fontSize:26,letterSpacing:'-.05em',margin:'12px 0'}}>Explore my GitHub</h2><p>See more projects and code on my GitHub profile.</p><a className="text-link" href="https://github.com/Yashwanthss2954" target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={15}/></a></div>
</> }
