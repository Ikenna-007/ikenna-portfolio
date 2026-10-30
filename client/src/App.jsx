import { useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Braces, Check, Code2, ExternalLink,
  Github, GraduationCap, Mail, Menu, X, Linkedin, Layers3, Globe2, BookOpen,
  Send, Sparkles, Terminal,
} from 'lucide-react'

const projects = [
  {
    slug: 'matchmind-ai', number: '01', name: 'MatchMind AI',
    type: 'AI · Sports analytics',
    summary: 'Turning live football events into explainable match intelligence for fans, analysts and broadcast-style experiences.',
    description: 'MatchMind AI explores how structured match events can become timely, understandable football insights. The system combines an Express API, event streaming, rule-based intelligence and audience-focused presentation modes.',
    challenge: 'Raw match events are difficult to interpret quickly. The goal is to turn them into insights that explain what is happening and why it matters, without overstating what the data proves.',
    solution: 'A Node.js and TypeScript backend exposes match data and streams updates using Server-Sent Events. An insight pipeline interprets event patterns, while the React interface presents information for different audiences.',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Server-Sent Events', 'Azure AI'],
    outcomes: ['Live event-streaming architecture', 'Explainable, rule-based insights', 'Fan, analyst and broadcast-oriented experiences'],
    github: 'https://github.com/Ikenna-007/matchmind-ai', status: 'Hackathon project', icon: 'football',
    demoUrl: 'https://matchmind-ai-gamma.vercel.app/'
  },
  {
    slug: 'campusconnect-ng', number: '02', name: 'CampusConnect NG',
    type: 'EdTech · Full-stack product',
    summary: 'A platform concept connecting Nigerian students with academic resources, university information and global opportunities.',
    description: 'CampusConnect NG is an education technology initiative focused on helping Nigerian students learn, discover opportunities and compete globally. The product direction brings learning resources, school information and career opportunities into one experience.',
    challenge: 'Useful academic resources and career opportunities can be fragmented across many platforms. Students need a clearer path to discover resources and plan their next steps.',
    solution: 'The product roadmap includes student profiles, school and course comparisons, learning materials, quizzes and job or internship opportunities. The prototype uses a React-based interface and Supabase for backend services.',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'Supabase', 'Product design'],
    outcomes: ['Defined an MVP and phased roadmap', 'Designed around student needs and opportunity discovery', 'Connected product goals to SDG 4: Quality Education'],
    github: 'https://github.com/Ikenna-007/CampusConnectNG', status: 'Prototype / evolving project', icon: 'education',
    demoUrl: 'https://campus-connect-ng-three.vercel.app/'
  },
]
const navItems = [['Home','/'],['About','/about'],['Projects','/projects'],['Experience','/experience'],['Contact','/contact']]

function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container nav-wrap">
    <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark">I.</span><span>IKENNA<span className="brand-muted">.DEV</span></span></Link>
    <button className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X size={21}/> : <Menu size={21}/>}</button>
    <nav className={open ? 'nav-links nav-open' : 'nav-links'}>{navItems.map(([label,path]) => <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}<a className="nav-cta" href="https://github.com/Ikenna-007" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a></nav>
  </div></header>
}
function Footer() {
  return <footer className="footer"><div className="container footer-inner"><span>© {new Date().getFullYear()} Ikenna Ilouga</span><span>Built with React, Node.js & curiosity.</span><div className="socials"><a href="https://github.com/Ikenna-007" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><Link to="/contact" aria-label="Contact"><Mail size={17}/></Link></div></div></footer>
}
function SectionLabel({children}) { return <div className="section-label"><span/>{children}</div> }
function ProjectCard({project}) {
  return <article className="project-card"><div className="project-card-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-icon">{project.icon === 'football' ? <Layers3/> : <BookOpen/>}</span></div>
    <div className="project-visual"><div className="visual-grid"/>{project.icon === 'football' ? <div className="pitch"><div className="pitch-mid"/><div className="pitch-circle"/><div className="pitch-box pitch-box-left"/><div className="pitch-box pitch-box-right"/><span className="pitch-dot dot-a"/><span className="pitch-dot dot-b"/><span className="pitch-dot dot-c"/></div> : <div className="edu-visual"><div className="edu-window"><div/><div/><div/><span>learn()</span><span>discover()</span><span>grow()</span></div><BookOpen size={44} strokeWidth={1.2}/></div>}<span className="visual-caption">{project.type}</span></div>
    <div className="project-card-body"><p className="eyebrow">{project.type}</p><h3>{project.name}</h3><p className="muted project-summary">{project.summary}</p><div className="tag-list">{project.technologies.slice(0,4).map(t => <span className="tag" key={t}>{t}</span>)}</div><div className="project-links">
  <Link className="text-link" to={`/projects/${project.slug}`}>
    Explore case study <ArrowUpRight size={16}/>
  </Link>

  {project.demoUrl && (
    <a
      className="text-link"
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      Live Demo <ExternalLink size={15}/>
    </a>
  )}
</div></div>
  </article>
}
function Home() {
  return <>
    <section className="hero container"><div className="hero-copy"><div className="availability"><span className="status-dot"/> SOFTWARE ENGINEERING GRADUATE</div><h1>Building useful<br/>things for the <span className="green-text">real world.</span></h1><p className="hero-intro">I'm Ikenna — a First-Class Software Engineering graduate who enjoys turning complex problems into thoughtful, practical software.</p><div className="hero-actions"><Link className="button button-primary" to="/projects">Explore my work <ArrowRight size={17}/></Link><Link className="button button-secondary" to="/contact">Get in touch <ArrowUpRight size={16}/></Link></div><div className="hero-meta"><span><GraduationCap size={16}/> University of Chester</span><span><Code2 size={16}/> Full-stack & AI projects</span></div></div>
      <div className="hero-art" aria-label="Decorative code illustration"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="code-window"><div className="window-bar"><div className="window-dots"><i/><i/><i/></div><span>ikenna.ts</span><span className="window-lock">●</span></div><div className="code-content">
        <p><span className="line-no">01</span><span className="code-purple">const</span> developer = {'{'}</p><p><span className="line-no">02</span>&nbsp; name: <span className="code-green">'Ikenna'</span>,</p><p><span className="line-no">03</span>&nbsp; degree: <span className="code-green">'First Class'</span>,</p><p><span className="line-no">04</span>&nbsp; focus: [</p><p><span className="line-no">05</span>&nbsp;&nbsp; <span className="code-green">'Software Engineering'</span>,</p><p><span className="line-no">06</span>&nbsp;&nbsp; <span className="code-green">'AI & Data'</span>,</p><p><span className="line-no">07</span>&nbsp;&nbsp; <span className="code-green">'Useful products'</span></p><p><span className="line-no">08</span>&nbsp; ],</p><p><span className="line-no">09</span>&nbsp; learning: <span className="code-blue">true</span></p><p><span className="line-no">10</span>{'}'};</p><p className="code-comment"><span className="line-no">11</span>// always building something</p></div></div><div className="floating-chip chip-top"><Sparkles size={15}/> Curious by default</div><div className="floating-chip chip-bottom"><span className="status-dot"/> Open to opportunities</div><div className="hero-glow"/></div><a className="scroll-cue" href="#featured"><span/> Scroll to explore</a></section>
    <section className="section container" id="featured"><div className="section-heading-row"><div><SectionLabel>SELECTED WORK</SectionLabel><h2>Projects with a <span className="green-text">purpose.</span></h2></div><Link className="text-link" to="/projects">All projects <ArrowRight size={16}/></Link></div><div className="project-grid">{projects.map(project => <ProjectCard key={project.slug} project={project}/>)}</div></section>
    <section className="principles-band"><div className="container principles-grid"><div><span className="principle-icon"><Braces/></span><h3>Thoughtful engineering</h3><p>Readable code, clear structure and solutions built around real needs.</p></div><div><span className="principle-icon"><Terminal/></span><h3>Always learning</h3><p>Exploring full-stack development, AI and the tools that make products better.</p></div><div><span className="principle-icon"><Globe2/></span><h3>Meaningful impact</h3><p>Interested in technology that improves access, understanding and opportunity.</p></div></div></section>
    <section className="container closing-cta"><div><SectionLabel>HAVE A ROLE OR IDEA?</SectionLabel><h2>Let's build something<br/><span className="green-text">worth talking about.</span></h2></div><Link to="/contact" className="button button-primary">Contact me <ArrowUpRight size={17}/></Link></section>
  </>
}
function PageIntro({label,title,description}) { return <div className="page-intro"><SectionLabel>{label}</SectionLabel><h1>{title}</h1><p>{description}</p></div> }
function About() {
  const skills = [['Frontend','React','JavaScript','TypeScript','HTML & CSS','Tailwind CSS'],['Backend','Node.js','Express','REST APIs','Server-Sent Events'],['Data & tools','Supabase','SQL fundamentals','Git & GitHub','Testing & debugging'],['AI & interests','AI integrations','Prompt design','Data-driven features','Explainable insights']]
  return <main className="container page"><PageIntro label="A LITTLE ABOUT ME" title={<>Engineer by training.<br/><span className="green-text">Builder by nature.</span></>} description="I enjoy understanding how things work, solving problems step by step, and creating software that makes a useful difference."/><div className="about-layout"><div className="about-main"><SectionLabel>MY STORY</SectionLabel><h2>From learning the fundamentals to building real projects.</h2><p>I graduated with a First-Class BSc in Software Engineering from the University of Chester. My studies helped me build a foundation in software design, programming, problem-solving and collaborative development.</p><p>Outside the classroom, I've applied what I've learned to projects such as CampusConnect NG, an education-focused platform concept, and MatchMind AI, a football intelligence project exploring live event data and explainable insights.</p><p>I'm now looking for graduate software engineering opportunities where I can contribute, learn from experienced engineers and grow into a dependable full-stack developer.</p><div className="education-card"><GraduationCap size={25}/><div><strong>BSc Software Engineering — First Class</strong><span>University of Chester</span></div><span className="education-year">Graduate</span></div></div><aside className="about-aside"><div className="aside-symbol"><Code2 size={35}/></div><p className="eyebrow">MY APPROACH</p><h3>Stay curious.<br/>Keep it clear.<br/><span className="green-text">Ship with purpose.</span></h3><div className="aside-rule"/><p className="muted">I value understandable code, thoughtful teamwork, steady improvement and being honest about what a system can and cannot do.</p></aside></div><section className="section skills-section"><SectionLabel>TOOLS OF THE TRADE</SectionLabel><h2>Skills I'm building with</h2><p className="muted">A practical snapshot of my current toolkit. I'll keep this aligned with skills I can explain and demonstrate in an interview.</p><div className="skills-grid">{skills.map(([group,...items]) => <div className="skill-card" key={group}><h3>{group}</h3><div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div></div>)}</div></section></main>
}
function Projects() { return <main className="container page"><PageIntro label="PROJECT ARCHIVE" title={<>Ideas made <span className="green-text">real.</span></>} description="A closer look at the products, experiments and engineering decisions behind my work."/><div className="project-grid project-grid-page">{projects.map(project => <ProjectCard key={project.slug} project={project}/>)}</div><p className="note-line"><Sparkles size={16}/> More projects will be added as they become ready to share.</p></main> }
function ProjectDetails() {
  const {slug} = useParams()
  const project = projects.find(item => item.slug === slug)
  if (!project) return <main className="container page"><PageIntro label="PROJECT NOT FOUND" title="Let's find that project." description="That project page doesn't exist yet."/><Link className="text-link" to="/projects"><ArrowLeft size={16}/> Back to projects</Link></main>
  return <main className="container page detail-page"><Link className="back-link" to="/projects"><ArrowLeft size={16}/> All projects</Link><div className="detail-hero"><div><SectionLabel>{project.number} / CASE STUDY</SectionLabel><p className="eyebrow">{project.type}</p><h1>{project.name}<span className="green-text">.</span></h1><p className="detail-summary">{project.summary}</p><span className="status-pill">{project.status}</span></div><div className="detail-graphic">{project.icon === 'football' ? <Layers3 size={86} strokeWidth={1}/> : <BookOpen size={86} strokeWidth={1}/>}</div></div><div className="detail-columns"><article className="detail-copy"><SectionLabel>OVERVIEW</SectionLabel><h2>The idea</h2><p>{project.description}</p><h2>The challenge</h2><p>{project.challenge}</p><h2>The approach</h2><p>{project.solution}</p><h2>Key work and outcomes</h2><ul className="outcome-list">{project.outcomes.map(item => <li key={item}><Check size={17}/>{item}</li>)}</ul></article><aside className="detail-sidebar"><div className="sidebar-card"><h3><Code2 size={18}/> Technologies</h3><div className="tag-list">{project.technologies.map(t => <span className="tag" key={t}>{t}</span>)}</div></div><div className="sidebar-card">
  <h3><Layers3 size={18}/> Project links</h3>

  {project.demoUrl && (
    <a
      className="sidebar-link"
      href={project.demoUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Globe2 size={17}/> View live demo <ExternalLink size={14}/>
    </a>
  )}

  {project.github ? (
    <a
      className="sidebar-link"
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github size={17}/> View GitHub repository <ExternalLink size={14}/>
    </a>
  ) : (
    <p className="muted small">Repository coming soon.</p>
  )}
</div><div className="sidebar-note"><Sparkles size={18}/><p>Project status and outcomes are described transparently; planned features are not presented as completed functionality.</p></div></aside></div></main>
}
function Experience() {
  return <main className="container page"><PageIntro label="THE JOURNEY SO FAR" title={<>Learning, building<br/><span className="green-text">& contributing.</span></>} description="My education and experience have helped me develop technical foundations, communication skills and a practical approach to solving problems."/><section className="timeline"><div className="timeline-item"><span className="timeline-dot"/><p className="eyebrow">EDUCATION</p><h2>BSc Software Engineering — First Class</h2><h3>University of Chester</h3><p className="muted">Built a foundation in software development, programming, systems thinking and project delivery. Completed an innovation project focused on CampusConnect NG.</p><span className="timeline-tag">Degree completed</span></div><div className="timeline-item"><span className="timeline-dot"/><p className="eyebrow">PROJECT ENGINEERING</p><h2>MatchMind AI</h2><h3>Football intelligence · Hackathon project</h3><p className="muted">Worked on backend football intelligence, structured event data, streaming updates and explainable insights for different user audiences.</p><span className="timeline-tag">React · TypeScript · Express</span></div><div className="timeline-item"><span className="timeline-dot"/><p className="eyebrow">PRODUCT DEVELOPMENT</p><h2>CampusConnect NG</h2><h3>Education technology · Innovation project</h3><p className="muted">Developed a product concept around academic resources and opportunities for Nigerian students, with an MVP roadmap and a focus on access to education.</p><span className="timeline-tag">React · Supabase · Product thinking</span></div><div className="timeline-item"><span className="timeline-dot"/><p className="eyebrow">PROFESSIONAL EXPERIENCE</p><h2>Support work & teamwork</h2><h3>People-focused professional experience</h3><p className="muted">My work outside software has helped me practise communication, responsibility, teamwork and staying calm when priorities change.</p><span className="timeline-tag">Communication · Reliability · Teamwork</span></div></section>
  <div className="resume-callout">
  <div>
    <h2>Want the full picture?</h2>
    <p className="muted">
      Explore my experience, technical skills and qualifications in my CV.
    </p>
  </div>

  <a
    href="/Black and White Simple CV Resume.pdf"
    download="Black and White Simple CV Resume.pdf"
    className="button button-primary"
  >
    Download CV <ArrowUpRight size={17}/>
  </a>
</div></main>
}
function Contact() {
  const [form,setForm] = useState({name:'',email:'',subject:'',message:'',website:''})
  const [state,setState] = useState({loading:false,kind:'',message:''})
  function update(event) { setForm({...form,[event.target.name]:event.target.value}) }
  async function submit(event) {
    event.preventDefault(); setState({loading:true,kind:'',message:''})
    try {
      const API_URL = import.meta.env.VITE_API_URL || ''

      const response = await fetch(`${API_URL}/api/contact`, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || 'Your message could not be sent. Please try again.')
      setState({loading:false,kind:'success',message:'Thanks — your message has been sent. I’ll be in touch.'})
      setForm({name:'',email:'',subject:'',message:'',website:''})
    } catch(error) { setState({loading:false,kind:'error',message:error.message || 'Could not reach the server. Please try again later.'}) }
  }
  return <main className="container page contact-page"><PageIntro label="SAY HELLO" title={<>Let's start a <span className="green-text">conversation.</span></>} description="Recruiter with a graduate opportunity, engineer with an idea, or just want to connect? Send me a message."/><div className="contact-layout"><div className="contact-copy"><h2>Good things start with a message.</h2><p className="muted">I'm interested in graduate software engineering opportunities, collaborative projects and learning from people building useful technology.</p><a className="contact-method" href="https://github.com/Ikenna-007" target="_blank" rel="noreferrer"><span><Github size={19}/></span><div><strong>GitHub</strong><small>Explore my code and projects</small></div><ArrowUpRight size={17}/></a><a className="contact-method" href="https://www.linkedin.com/in/ikenna-ilouga-1a3073270/" target="_blank" rel="noreferrer"><span><Linkedin size={19}/></span><div><strong>LinkedIn</strong><small>Connect professionally</small></div><ArrowUpRight size={17}/></a><div className="contact-response"><span className="status-dot"/> Usually happy to hear about relevant opportunities</div></div><form className="contact-form" onSubmit={submit}><div className="form-heading"><Mail size={21}/><div><h2>Send a message</h2><p className="muted small">Fields marked * are required.</p></div></div><div className="form-row"><label>Your name *<input name="name" value={form.name} onChange={update} required minLength="2" maxLength="100" autoComplete="name" placeholder="Jane Smith"/></label><label>Email address *<input name="email" type="email" value={form.email} onChange={update} required maxLength="254" autoComplete="email" placeholder="jane@company.com"/></label></div><label>Subject *<input name="subject" value={form.subject} onChange={update} required minLength="3" maxLength="150" placeholder="Graduate opportunity / Let's collaborate"/></label><label>Message *<textarea name="message" value={form.message} onChange={update} required minLength="10" maxLength="5000" rows="5" placeholder="Tell me a little about what you have in mind..."/></label><div className="honeypot" aria-hidden="true"><label>Leave this field blank<input name="website" tabIndex="-1" autoComplete="off" value={form.website} onChange={update}/></label></div>{state.message && <p role="status" className={`form-status ${state.kind}`}>{state.message}</p>}<button className="button button-primary submit-button" type="submit" disabled={state.loading}>{state.loading ? 'Sending…' : 'Send message'} <Send size={16}/></button><p className="form-privacy">Your details are used only to respond to your enquiry.</p></form></div></main>
}
function NotFound() { return <main className="container page"><PageIntro label="404" title="This page took a wrong turn." description="The page you're looking for doesn't exist."/><Link className="button button-primary" to="/">Back home <ArrowRight size={16}/></Link></main> }
export default function App() { return <><Header/><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/projects" element={<Projects/>}/><Route path="/projects/:slug" element={<ProjectDetails/>}/><Route path="/experience" element={<Experience/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes><Footer/></> }
