import './App.css'

const skills = [
  'Spring Boot',
  'Dropwizard',
  'Kafka',
  'Workflow Engines',
  'AWS',
  'Docker',
  'Kubernetes',
  'CI/CD',
  'MySQL',
  'ELK',
  'RAG',
  'Multi-Agent Systems',
  'Milvus',
  'Claude Code',
  'Cursor',
  'Windsurf',
]

const experience = [
  {
    company: 'Walmart',
    role: 'Software Engineer 3',
    dates: 'May 2024 – Present',
    bullets: [
      'Led performance optimization of core Start and Update Workflow APIs, reducing P95 latency from 200ms to 130ms and scaling the platform to 1500 synchronous workflow executions per second.',
      'Designed multi-tenant onboarding architecture supporting multiple teams and workflow engines per tenant in a shared cluster.',
      'Owned end-to-end integration of Orkes Workflow Engine across backend and AI-powered systems.',
      'Built a production-grade AI platform with RAG pipelines, hybrid retrieval, re-ranking, evaluation, and observability.',
      'Designed a stateful multi-agent orchestration system for deterministic pause/resume and human-in-the-loop code generation.',
      'Introduced spec-driven development workflows using LLMs and mentored a junior engineer.',
    ],
  },
  {
    company: 'Rakuten',
    role: 'Software Engineer 2',
    dates: 'May 2023 – May 2024',
    bullets: [
      'Designed high-volume payment batch processing systems and APIs for third-party integrations across multiple Rakuten brands.',
      'Built a Java-based mock server framework to simulate external payment providers and improve integration coverage.',
    ],
  },
  {
    company: 'Podeum',
    role: 'Founding Engineer',
    dates: 'July 2022 – May 2023',
    bullets: [
      'Built and scaled backend services from scratch, growing the platform from 0 to 10,000 daily active users.',
      'Designed authentication, virtual economy, in-app purchases, and real-time live score feeds.',
    ],
  },
  {
    company: 'Morgan Stanley, Bangalore',
    role: 'Software Developer',
    dates: 'Oct 2020 – June 2022',
    bullets: [
      'Developed and maintained Big Data applications and set up CI/CD pipelines with Jenkins and Sonar.',
    ],
  },
]

function App() {
  return (
    <main className="page">
      <section className="hero card">
        <p className="eyebrow">Software Engineer · Backend · AI Systems</p>
        <h1>Abhigyan</h1>
        <p className="lead">
          Backend and distributed systems engineer building workflow platforms,
          AI products, and developer tooling. Currently at Walmart, exploring
          Hermes and OpenClaw agents as a hands-on capabilities test.
        </p>
        <div className="hero-links">
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
        </div>
      </section>

      <section className="grid">
        <div className="card" id="skills">
          <h2>Skills</h2>
          <div className="chips">
            {skills.map((skill) => (
              <span key={skill} className="chip">{skill}</span>
            ))}
          </div>
        </div>

        <div className="card" id="education">
          <h2>Education</h2>
          <p className="item-title">Indian Institute of Technology (B.H.U), Varanasi</p>
          <p>Bachelor of Technology, July 2016 – July 2020</p>
        </div>
      </section>

      <section className="card" id="experience">
        <h2>Experience</h2>
        <div className="timeline">
          {experience.map((job) => (
            <article key={`${job.company}-${job.role}`} className="job">
              <div className="job-head">
                <div>
                  <h3>{job.company}</h3>
                  <p className="item-title">{job.role}</p>
                </div>
                <span>{job.dates}</span>
              </div>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
