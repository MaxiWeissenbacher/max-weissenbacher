
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Legal Impact Assessment Tool",
      description: "GenAI tool for German government agencies achieving 60% time savings in legal analysis workflows.",
      technologies: ["Python", "LLMs", "FastAPI", "Neo4J"],
    },
    {
      title: "Multimodal Confluence Chatbot",
      description: "AI-powered chatbot increasing team productivity by 25%. Awarded 2nd place at PwC Best of Consulting.",
      technologies: ["Python", "LangChain", "RAG", "React"],
    },
    {
      title: "GraphRAG Legal Modularization",
      description: "Combining semantic knowledge graphs with RAG for legal document analysis.",
      technologies: ["GraphRAG", "Neo4j", "Transformers"],
    },
    {
      title: "Hate Speech Detection System",
      description: "Ensemble model achieving 0.94 F1-Macro score processing 2.7M tweets.",
      technologies: ["BERT", "Ensemble Methods", "AWS"],
    }
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight drop-shadow-sm">
            Featured Projects
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6 shadow-soft"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-effect border-0 hover:shadow-lg transition-all duration-300 shadow-modern"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-gray-900 text-lg font-medium">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <CardDescription className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="border-gray-200 text-gray-600 text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
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
