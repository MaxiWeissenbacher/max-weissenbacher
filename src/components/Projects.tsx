
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Code } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Code Review Assistant",
      description: "An intelligent system that automatically reviews code, suggests improvements, and detects potential bugs using advanced NLP and static analysis.",
      image: "🤖",
      technologies: ["Python", "OpenAI GPT-4", "FastAPI", "React", "Docker"],
      features: [
        "Natural language code explanations",
        "Automated bug detection with 94% accuracy",
        "Integration with GitHub/GitLab",
        "Custom rule engine for team standards"
      ],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Neural Style Transfer Platform",
      description: "A web application that applies artistic styles to images using convolutional neural networks, with real-time processing and custom style training.",
      image: "🎨",
      technologies: ["PyTorch", "Flask", "JavaScript", "AWS S3", "Redis"],
      features: [
        "Real-time style transfer processing",
        "Custom style model training",
        "Batch processing capabilities",
        "RESTful API for third-party integration"
      ],
      github: "#",
      demo: "#",
      status: "Active Development"
    },
    {
      title: "Predictive Maintenance System",
      description: "IoT-based machine learning system that predicts equipment failures before they occur, reducing downtime by 45% for manufacturing clients.",
      image: "⚙️",
      technologies: ["Python", "TensorFlow", "Time Series Analysis", "Apache Kafka", "PostgreSQL"],
      features: [
        "Real-time sensor data processing",
        "Anomaly detection algorithms",
        "Predictive failure modeling",
        "Interactive monitoring dashboard"
      ],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Multi-Language Document Chat",
      description: "RAG-based chatbot that can understand and answer questions about documents in multiple languages using vector embeddings and LLMs.",
      image: "💬",
      technologies: ["LangChain", "Pinecone", "OpenAI", "Streamlit", "PDF Processing"],
      features: [
        "Multi-language document support",
        "Vector similarity search",
        "Context-aware responses",
        "Document summarization"
      ],
      github: "#",
      demo: "#",
      status: "Beta"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative AI solutions that solve real-world problems and push the boundaries of technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-4xl">{project.image}</div>
                    <div>
                      <CardTitle className="text-white text-xl group-hover:text-purple-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          variant={project.status === 'Production' ? 'default' : 'secondary'}
                          className={project.status === 'Production' 
                            ? 'bg-green-600 text-white' 
                            : 'bg-yellow-600 text-white'
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-gray-300 leading-relaxed">
                  {project.description}
                </CardDescription>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 flex items-start text-sm">
                        <span className="text-purple-400 mr-2 flex-shrink-0">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="border-purple-500/50 text-purple-300 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
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
