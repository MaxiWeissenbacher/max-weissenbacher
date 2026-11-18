import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import "./portfolio.css";

const base = import.meta.env.BASE_URL;
const linkedin = "https://www.linkedin.com/in/maximilian-weissenbacher/";
const github = "https://github.com/MaxiWeissenbacher";

const scholar = "https://scholar.google.com/citations?user=jb_UqygAAAAJ&hl=en";

const projects = [
  {
    organization: "PLURAGO · Co-Founder & CTO",
    title: "AI-native property management",
    description: "We’re building an AI-native property manager. I build the software that helps our team use company knowledge and automate operational workflows.",
    link: "https://plurago.ai",
    label: "Visit PLURAGO",
  },
  {
    organization: "PLURAGO · AI Consulting",
    title: "AI adoption for real estate teams",
    description: "I map workflows with customer teams, train staff on Claude, and build and deploy agents for selected tasks. Our initial platform included MCP, document extraction with page-level evidence, and regression evals.",
  },
  {
    organization: "PwC · Stadt Landshut",
    title: "KI-lian",
    description: "I independently built and deployed the city’s RAG chatbot on its own infrastructure and worked with city staff to evaluate answer quality.",
    link: "https://app.landshut.de/embedded/kilian_website.html",
    label: "Try KI-lian",
  },
  {
    organization: "PwC · Public Sector",
    title: "SPARK Workflow",
    description: "I led data extraction for an open-source multi-agent system for energy approvals. The overall workflow cut legal review cycles from three years to six months.",
    link: "https://opencode.de/de/software/spark-workflow-10117",
    label: "View open-source project",
  },
  {
    organization: "Amazon · London",
    title: "Fulfillment demand forecasting",
    description: "I built carrier-level forecasting models on AWS. They were rolled out across the UK and EU fulfillment network, with backtesting projecting seven-figure annual savings in GBP.",
  },
  {
    organization: "PwC · Public Sector",
    title: "Legal impact assessment",
    description: "I led development of a generative AI tool for legal analysis that reduced decision latency by 60%.",
  },
  {
    organization: "PwC",
    title: "Multimodal RAG chatbot",
    description: "I led development of a chatbot that increased team productivity by 25% and received a WirtschaftsWoche Best of Consulting award.",
  },
  {
    organization: "PwC",
    title: "GraphRAG for legal entities",
    description: "I led development of a GraphRAG system that used a knowledge graph to disambiguate legal entities.",
  },
];

const publications = [
  ["Corpus-based language analysis of MINI-KID interviews with adolescents", "Frontiers in Psychiatry · 2024", "https://doi.org/10.3389/fpsyt.2024.1425820", 8],
  ["Analyzing Offensive Language and Hate Speech in Political Discourse", "LREC-COLING · 2024", "https://aclanthology.org/2024.trac-1.8/", 5],
  ["Steps towards Addressing Text Classification in Low-Resource Languages", "KONVENS · 2023", "https://aclanthology.org/2023.konvens-main.7/", 3],
  ["Sentiment Analysis on Twitter for German Parties", "KONVENS · 2022", "https://epub.uni-regensburg.de/58241/", 38],
] as const;

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
          <div className="portfolio-projects">
            {projects.map(({ organization, title, description, link, label }) => (
              <article className="portfolio-card" key={title}>
                <p className="portfolio-kicker">{organization}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                {link && <a className="portfolio-text-link" href={link}>{label} <ArrowUpRight size={16} aria-hidden="true" /></a>}
              </article>
            ))}
          </div>
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
