import { ArrowDown, ArrowRight, ArrowUpRight, Download } from "lucide-react";
import "./portfolio.css";

const base = import.meta.env.BASE_URL;
const linkedin = "https://www.linkedin.com/in/maximilian-weissenbacher/";
const github = "https://github.com/MaxiWeissenbacher";

const projects = [
  {
    organization: "PLURAGO · Co-founder & CTO",
    title: "AI for real estate operations",
    description: "I work with real estate teams to map their workflows, train staff on Claude, and build agents for selected tasks. I also build the software for our own AI-native property management business.",
    detail: "Multi-agent workflows, MCP, document extraction with page-level evidence, and a regression eval suite.",
    link: "https://plurago.ai",
    label: "Visit PLURAGO",
  },
  {
    organization: "PwC · Stadt Landshut",
    title: "A public-sector RAG chatbot",
    description: "I built and deployed a production chatbot on the city’s own infrastructure. I worked with city staff to build a reference dataset and evaluate answer quality.",
    detail: "End-to-end ownership from retrieval and model selection to GPU infrastructure and deployment.",
  },
  {
    organization: "PwC · SPARK Workflow",
    title: "AI for infrastructure approvals",
    description: "I led data extraction for an open-source multi-agent workflow for energy infrastructure approvals and built the data layer for the wider program.",
    detail: "The overall workflow reduced legal review cycles from three years to six months.",
    link: "https://opencode.de/de/software/spark-workflow-10117",
    label: "View the open-source project",
  },
];

const publications = [
  ["Corpus-based language analysis of MINI-KID interviews with adolescents", "Frontiers in Psychiatry · 2024", "https://doi.org/10.3389/fpsyt.2024.1425820"],
  ["Analyzing Offensive Language and Hate Speech in Political Discourse", "LREC-COLING · 2024", "https://aclanthology.org/2024.trac-1.8/"],
  ["Steps towards Addressing Text Classification in Low-Resource Languages", "KONVENS · 2023", "https://aclanthology.org/2023.konvens-main.7/"],
  ["Sentiment Analysis on Twitter for German Parties", "KONVENS · 2022", "https://epub.uni-regensburg.de/58241/"],
];

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
          <p className="portfolio-kicker">AI Engineer · Co-founder & CTO</p>
          <h1 id="hero-title">I build AI systems<br className="portfolio-desktop-break" /> for real <em>workflows.</em></h1>
          <p className="portfolio-lede">I lead engineering at PLURAGO in Munich. My work spans real estate operations, customer-facing AI consulting, and production LLM systems for the German public sector.</p>
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
            {projects.map(({ organization, title, description, detail, link, label }) => (
              <article className="portfolio-card" key={title}>
                <p className="portfolio-kicker">{organization}</p>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className="portfolio-detail">{detail}</p>
                {link && <a className="portfolio-text-link" href={link}>{label} <ArrowUpRight size={16} aria-hidden="true" /></a>}
              </article>
            ))}
          </div>
          <p className="portfolio-career">Previously, I was the first engineer in PwC’s German public-sector AI practice. At Amazon, I built demand forecasting models that were rolled out across the UK and EU fulfillment network.</p>
        </div>
      </section>

      <section className="portfolio-research portfolio-wrap" id="research" aria-labelledby="research-title">
        <div>
          <h2 id="research-title">Research</h2>
          <p>M.Sc. in Information Science, University of Regensburg. Published work on NLP, language models, and text classification.</p>
        </div>
        <ul>
          {publications.map(([title, venue, url]) => (
            <li key={url}>
              <a href={url}><span>{title}<small>{venue}</small></span><ArrowUpRight size={17} aria-hidden="true" /></a>
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
