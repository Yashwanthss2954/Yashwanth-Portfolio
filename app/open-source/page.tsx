import { ArrowUpRight } from 'lucide-react'

const projects: [string, string, string, string[]][] = [
  ['AI and machine learning', 'DataLens AI', 'Automates data preparation, model training, evaluation, and interactive visualization. An integrated AI chatbot supports natural language dataset exploration and helps simplify model prototyping.', ['Python', 'Streamlit', 'Machine learning', 'NLP']],
  ['Computer vision', 'Automatic Driving Test Tracker', 'Uses YOLOv8 and OpenCV for real-time driving test evaluation, achieving 95% detection accuracy. A Flask application analyzes candidate performance and automates assessment.', ['Python', 'Flask', 'OpenCV', 'YOLOv8']],
  ['Indoor navigation', 'Indoor Navigation for Museums', 'A mobile navigation app with interactive SVG maps, graph-based routes, and Firebase authentication.', ['React Native', 'SVG', 'Firebase', 'Figma']],
  ['Web application', 'Household Services Application', 'A role-based household services platform with separate admin and user dashboards for service requests, approvals, and search. Flask and SQLAlchemy power the backend, with SQLite, Jinja2, and responsive Bootstrap interfaces.', ['Python', 'Flask', 'SQLite', 'SQLAlchemy', 'Bootstrap']],
  ['Game development', 'Basic Survival Game', 'A survival game where players collect bottles and fruit while managing their health.', ['Unreal Engine']],
  ['Game development', 'Shooter Game', 'A C++ and Unreal Engine game in which the player character fights vampires.', ['C++', 'Unreal Engine']],
  ['VR and AR', 'Medical Training Simulation', 'An ongoing VR/AR training experience designed to introduce nurses to basic nursing procedures.', ['Unreal Engine', 'MERN', 'Blender']],
]

export default function Projects() { return <>
  <header className="page-intro"><div className="eyebrow">Projects</div><h1>Independent and academic projects</h1><p>Work across machine learning, computer vision, indoor navigation, game development, and web applications.</p></header>
  <div className="content-grid varied-grid project-list">{projects.map(([topic,title,copy,tags])=><article className="content-card" key={title}><div className="mono">{topic}</div><h2>{title}</h2><p>{copy}</p><div className="tags">{tags.map(tag=><span className="tag" key={tag}>{tag}</span>)}</div></article>)}</div>
  <div className="contact-panel"><div className="mono">More projects</div><h2>Explore my GitHub</h2><p>See more projects and code on my GitHub profile.</p><a className="text-link" href="https://github.com/Yashwanthss2954" target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={16}/></a></div>
</> }
