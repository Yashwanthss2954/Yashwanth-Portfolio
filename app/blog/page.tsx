const notes = [
  ['AI IN PRACTICE', 'Useful AI starts with a useful workflow', 'The best place to add AI is often where a person already loses time to repetitive work. Start with the workflow, define what better looks like, then choose the smallest AI capability that helps.'],
  ['DATA ENGINEERING', 'A pipeline is a product too', 'Reliability, observability, and clear ownership are part of the user experience of a data platform. A pipeline that quietly fails is a product that lets its users down.'],
  ['SYSTEM DESIGN', 'Design for the handoffs', 'Complex platforms spend much of their life connecting teams and systems. Make those boundaries visible, give failures a clear path, and keep interfaces easy to reason about.'],
]
export default function Blog() { return <>
  <header className="page-intro"><div className="eyebrow">Notes &amp; ideas</div><h1>Thinking out loud.</h1><p>Short notes on engineering, data, and applying AI to real workflows.</p></header>
  <div className="content-grid">{notes.map(([topic,title,copy])=><article className="content-card" key={title}><div className="mono">{topic}</div><h2>{title}</h2><p>{copy}</p></article>)}</div>
</> }
