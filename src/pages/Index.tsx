import { ArrowDown, ArrowRight, ArrowUpRight, Download, ChevronDown } from "lucide-react";
import { useState } from "react";
import "./portfolio.css";

const base = import.meta.env.BASE_URL;
const linkedin = "https://www.linkedin.com/in/maximilian-weissenbacher/";
const github = "https://github.com/MaxiWeissenbacher";

const scholar = "https://scholar.google.com/citations?user=jb_UqygAAAAJ&hl=en";

const projects = [
  {
    organization: "PLURAGO · Co-Founder & CTO",
    title: "AI-native property management",
    description: "Software for our own AI-native property management operations.",
    detail: "As Co-Founder & CTO, I build the workflows that make company knowledge usable across daily operations. Our initial multi-agent platform included an MCP server, document extraction with page-level evidence, and regression evaluations.",
    link: "https://plurago.ai/hausverwaltung",
    label: "View PLURAGO property management",
  },
  {
    organization: "PLURAGO · AI Consulting",
    title: "AI adoption for real estate teams",
    description: "Hands-on AI consulting and agent development for real estate teams.",
    detail: "I map workflows with customer teams, train staff on Claude, and build and deploy agents for selected tasks. PLURAGO offers both team enablement and custom agents built in the client’s existing AI tools.",
    link: "https://plurago.ai/en/ai-consulting",
    label: "View PLURAGO AI Consulting",
  },
  {
    organization: "PwC · Stadt Landshut",
    title: "KI-lian",
    description: "A production RAG chatbot for the City of Landshut.",
    detail: "I independently built and deployed KI-lian on the city’s own infrastructure. I worked with city staff to create a reference dataset and evaluate answer quality.",
    link: "https://app.landshut.de/embedded/kilian_website.html",
    label: "Try KI-lian",
  },
  {
    organization: "PwC · Public Sector",
    title: "SPARK Workflow",
    result: { value: "3 years → 6 months", context: "Legal review cycle for the overall workflow" },
    description: "Open-source multi-agent workflow for energy infrastructure approvals.",
    detail: "I led data extraction and built the data layer for the wider program. The overall workflow cut legal review cycles from three years to six months.",
    link: "https://opencode.de/de/software/spark-workflow-10117",
    label: "View open-source project",
  },
  {
    organization: "Amazon · London",
    title: "Fulfillment demand forecasting",
    result: { value: "UK and EU", context: "Rollout across the fulfillment network" },
    description: "Carrier-level demand forecasting rolled out across the UK and EU.",
    detail: "I built multivariate time-series models on AWS for two UK fulfillment centers. The models were rolled out across the UK and EU network. Backtesting projected seven-figure annual savings in GBP.",
  },
  {
    organization: "PwC · Public Sector",
    title: "Legal impact assessment",
    result: { value: "−60%", context: "Decision latency" },
    description: "Generative AI for public-sector legal analysis.",
    detail: "I led development of the legal impact assessment tool. It reduced decision latency by 60%.",
  },
  {
    organization: "PwC",
    title: "Multimodal RAG chatbot",
    result: { value: "+25%", context: "Team productivity" },
    description: "Multimodal search and question answering for internal knowledge.",
    detail: "I led development of the multimodal RAG chatbot, which increased team productivity by 25%. The project received a WirtschaftsWoche Best of Consulting award.",
  },
  {
    organization: "PwC",
    title: "GraphRAG for legal entities",
    description: "Knowledge graph retrieval for legal entity disambiguation.",
    detail: "I led development of a GraphRAG system that combined retrieval with a knowledge graph to distinguish legal entities in documents.",
  },
];

const publications = [
  ["Corpus-based language analysis of MINI-KID interviews with adolescents", "Frontiers in Psychiatry · 2024", "https://doi.org/10.3389/fpsyt.2024.1425820", 8],
  ["Analyzing Offensive Language and Hate Speech in Political Discourse", "LREC-COLING · 2024", "https://aclanthology.org/2024.trac-1.8/", 5],
  ["Steps towards Addressing Text Classification in Low-Resource Languages", "KONVENS · 2023", "https://aclanthology.org/2023.konvens-main.7/", 3],
  ["Sentiment Analysis on Twitter for German Parties", "KONVENS · 2022", "https://epub.uni-regensburg.de/58241/", 38],
] as const;

const projectFilters = ["All projects", "PLURAGO", "PwC", "Amazon"] as const;

function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All projects");
  const visibleProjects = projects.filter(({ organization }) =>
    filter === "All projects" || organization.split(" · ")[0] === filter,
  );

  return (
    <>
      <div className="portfolio-project-filters" role="group" aria-label="Filter projects by company">
        {projectFilters.map(company => (
          <button key={company} type="button" aria-pressed={filter === company}
            onClick={() => setFilter(company)}>{company}</button>
        ))}
      </div>
      <div className="portfolio-projects">
        {visibleProjects.map(({ organization, title, description, detail, link, label, result }) => (
          <details className="portfolio-gallery-card" key={title}>
            <summary>
              <span className="portfolio-gallery-copy">
                <span className="portfolio-gallery-company">{organization}</span>
                <span className="portfolio-gallery-title">{title}</span>
                <span className="portfolio-gallery-summary">{description}</span>
              </span>
              <span className="portfolio-gallery-arrow" aria-hidden="true"><ChevronDown size={17} /></span>
            </summary>
            <div className="portfolio-gallery-detail">
              <p>{detail}</p>
              {result && <p className="portfolio-gallery-result">
                <strong>{result.value}</strong><span>{result.context}</span>
              </p>}
              {link && <a className="portfolio-text-link" href={link}>{label} <ArrowUpRight size={16} aria-hidden="true" /></a>}
            </div>
          </details>
        ))}
      </div>
    </>
  );
}

const Index = () => (
  <div className="portfolio">
    <a className="portfolio-skip" href="#main">Skip to content</a>
    <header className="portfolio-header portfolio-wrap">
      <a className="portfolio-mark" href="#top">Maximilian <span>Weissenbacher</span></a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#research">Research</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main id="main">
      <section className="portfolio-hero portfolio-wrap" id="top" aria-labelledby="hero-title">
        <div>
          <h1 id="hero-title">Maximilian Weissenbacher</h1>
          <p className="portfolio-role">Senior AI Engineer · Co-Founder & CTO</p>
          <p className="portfolio-lede">I’m co-founder and CTO of PLURAGO in Munich, where we’re building an AI-native property manager and helping real estate teams adopt AI. At PwC, I built and deployed LLM applications with German public-sector customers.</p>
          <div className="portfolio-actions">
            <a className="portfolio-primary" href="#work">View selected work <ArrowDown size={17} aria-hidden="true" /></a>
            <a className="portfolio-text-link" href={`${base}cv_weissenbacher.pdf`} download="Maximilian_Weissenbacher_CV.pdf">Download CV <Download size={16} aria-hidden="true" /></a>
          </div>
        </div>
        <figure className="portfolio-portrait">
          <img src={`${base}portrait.jpg`} alt="Maximilian Weissenbacher" width="640" height="960" fetchPriority="high" />
        </figure>
      </section>

      <section className="portfolio-work" id="work" aria-labelledby="work-title">
        <div className="portfolio-wrap">
          <h2 id="work-title">Selected work</h2>
          <ProjectGallery />
          <p className="portfolio-career">I was the first engineer in PwC’s German public-sector AI practice and helped grow the team to 10+ engineers.</p>
        </div>
      </section>

      <section className="portfolio-research portfolio-wrap" id="research" aria-labelledby="research-title">
        <div>
          <h2 id="research-title">Research</h2>
          <p>M.Sc. in Information Science, University of Regensburg. Published work on NLP, language models, and text classification.</p>
          <a className="portfolio-text-link portfolio-scholar" href={scholar}>Google Scholar <ArrowUpRight size={16} aria-hidden="true" /></a>
          <p className="portfolio-citation-date">Citation counts as of <time dateTime="2026-11-18">18 November 2026</time>.</p>
        </div>
        <ul>
          {publications.map(([title, venue, url, citations]) => (
            <li key={url}>
              <a href={url}><span>{title}<small>{venue} · {citations} citations</small></span><ArrowUpRight size={17} aria-hidden="true" /></a>
            </li>
          ))}
        </ul>
      </section>
    </main>

    <footer id="contact" className="portfolio-footer">
      <div className="portfolio-wrap">
        <h2>Get in touch</h2>
        <div className="portfolio-actions">
          <a className="portfolio-primary" href="mailto:maxweissenbacher98@gmail.com">Email <ArrowRight size={17} aria-hidden="true" /></a>
          <a className="portfolio-text-link" href={linkedin}>LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
          <a className="portfolio-text-link" href={github}>GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  </div>
);

export default Index;
