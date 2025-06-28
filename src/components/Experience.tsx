
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer",
      company: "PwC Germany",
      period: "2023 - Present",
      location: "München, Germany",
      description: "Leading LLM deployments and developing GenAI tools for German government agencies on secure infrastructure.",
      achievements: [
        "Deployed secure LLM models (Mistral, Gemma) on government infrastructure",
        "Developed Legal Impact Assessment Tool achieving 60% time savings in legal analysis",
        "Built multimodal Confluence chatbot increasing productivity by 25% (2nd place Best of Consulting Award)",
        "Created GraphRAG application for legal modularization using semantic knowledge graphs",
        "Implemented time series forecasting (XGBoost) for Munich public transport passenger predictions"
      ],
      technologies: ["Python", "MCP", "LLMs", "Langgraph", "Ollama", "GraphRAG", "Langfuse", "FastAPI", "Docker", "Azure", "GCP"]
    },
    {
      title: "Research Assistant (ML)",
      company: "University of Regensburg",
      period: "2023",
      location: "Regensburg, Germany",
      description: "Conducted ML research on early detection of depression in adolescents using advanced NLP techniques.",
      achievements: [
        "Developed depression detection models using BERT, GPT-3, and ChatGPT",
        "Applied text classification and data augmentation techniques",
        "Implemented prompt engineering strategies for improved model performance",
        "Published research findings in Frontiers in Psychiatry"
      ],
      technologies: ["BERT", "GPT-3", "ChatGPT", "Python", "NLP", "PyTorch", "Transformers"]
    },
    {
      title: "Data Science Intern",
      company: "Amazon UK",
      period: "2022",
      location: "London, UK",
      description: "Developed forecasting models for inventory management at carrier level using multivariate time series analysis.",
      achievements: [
        "Built predictive models for goods receipt forecasting at carrier level",
        "Achieved +6.6% accuracy improvement for WK+1 forecasts and +7.73% for intraweek predictions",
        "Implemented models using LightGBM, FbProphet, and DeepAR",
        "Generated potential savings in seven-figure GBP range"
      ],
      technologies: ["Python", "LightGBM", "FbProphet", "DeepAR", "Time Series Analysis", "AWS", "Sagemaker"]
    },
    {
      title: "Working Student Data Analytics",
      company: "SAP",
      period: "2021 - 2022",
      location: "München, Germany",
      description: "Analyzed performance of SAP Learning Platform and developed automated forecasting solutions.",
      achievements: [
        "Performed comprehensive performance analysis of SAP Learning Platform",
        "Developed forecasting and automation solutions using Python",
        "Created data-driven insights for platform optimization",
        "Contributed to openSAP video content"
      ],
      technologies: ["Python", "Data Analytics", "Forecasting", "SAP", "Automation"]
    },
    {
      title: "Oracle APEX Intern",
      company: "BMW",
      period: "2019 - 2020",
      location: "Regensburg, Germany",
      description: "Developed and enhanced Oracle APEX system for order management with rollout to BMW plants in the UK.",
      achievements: [
        "Enhanced Oracle APEX system for order management",
        "Developed features using SQL, PL/SQL, and JavaScript",
        "Successfully rolled out system to BMW plants in the UK",
        "Improved order processing efficiency through system optimization"
      ],
      technologies: ["Oracle APEX", "SQL", "PL/SQL", "JavaScript", "Database Design"]
    }
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight drop-shadow-sm">
            Professional Experience
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6 shadow-soft"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Building innovative AI solutions and leading high-impact projects across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="glass-effect hover:shadow-lg transition-all duration-300 border-0 shadow-modern shadow-hover"
            >
              <CardHeader className="pb-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-gray-100 rounded-lg shadow-modern">
                      <Briefcase className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <CardTitle className="text-gray-900 text-xl font-medium">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-700 font-medium text-base">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-700 font-medium">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="text-gray-900 font-medium mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 flex items-start">
                        <span className="text-gray-400 mr-3 flex-shrink-0 mt-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-gray-900 font-medium mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="border-gray-200 text-gray-600 bg-white hover:bg-gray-50 font-normal shadow-soft"
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

export default Experience;
