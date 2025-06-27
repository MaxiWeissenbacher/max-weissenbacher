
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Legal Impact Assessment Tool",
      description: "GenAI tool for German government agencies (BMF, ITZBund) that analyzes legal documents and provides impact assessments, achieving 60% time savings in legal analysis workflows.",
      technologies: ["Python", "LLMs", "FastAPI", "Docker", "Legal NLP"],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Multimodal Confluence Chatbot",
      description: "AI-powered chatbot for document search and knowledge management, increasing team productivity by 25%. Awarded 2nd place at PwC Best of Consulting competition.",
      technologies: ["Python", "LangChain", "RAG", "Confluence API", "React"],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "GraphRAG Legal Modularization",
      description: "Advanced application combining semantic knowledge graphs with Retrieval-Augmented Generation for legal document modularization and analysis.",
      technologies: ["GraphRAG", "Neo4j", "Python", "Transformers", "Legal Tech"],
      github: "#",
      demo: "#",
      status: "Active Development"
    },
    {
      title: "Hate Speech Detection System",
      description: "Ensemble model achieving 0.94 F1-Macro score for hate speech detection in political discourse. Processed 2.7M tweets with custom annotation tools.",
      technologies: ["BERT", "Ensemble Methods", "Streamlit", "AWS", "Python"],
      github: "#",
      demo: "https://medium.com",
      status: "Published"
    },
    {
      title: "Car Price Prediction",
      description: "Machine learning project combining web scraping and predictive modeling to forecast car prices using comprehensive market data analysis.",
      technologies: ["R", "Web Scraping", "Machine Learning", "Data Analysis"],
      github: "#",
      demo: "#",
      status: "Completed"
    },
    {
      title: "Fake Trump Tweet Generator",
      description: "NLP project using clustering and word embeddings to generate realistic social media content, deployed on AWS infrastructure.",
      technologies: ["Python", "AWS", "KMeans", "GloVe", "PCA", "NLP"],
      github: "#",
      demo: "#",
      status: "Completed"
    }
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight drop-shadow-sm">
            Featured Projects
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6 shadow-soft"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            AI solutions spanning government tech, research, and practical applications
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-effect border-0 hover:shadow-lg transition-all duration-300 shadow-modern shadow-hover"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-gray-900 text-xl font-medium mb-2">
                      {project.title}
                    </CardTitle>
                    <Badge 
                      variant="secondary"
                      className={`text-xs font-normal shadow-soft ${
                        project.status === 'Production' 
                          ? 'bg-green-50 text-green-700 border-green-200' 
                          : project.status === 'Beta'
                          ? 'bg-blue-50 text-blue-700 border-blue-200'
                          : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal shadow-modern shadow-hover"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal shadow-modern shadow-hover"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div>
                  <h4 className="text-gray-700 font-medium mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="border-gray-200 text-gray-600 text-xs font-normal shadow-soft"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
