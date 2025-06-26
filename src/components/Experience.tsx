
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior AI Engineer",
      company: "TechCorp Innovation Labs",
      period: "2023 - Present",
      location: "San Francisco, CA",
      description: "Leading AI initiatives and developing next-generation machine learning solutions for enterprise clients.",
      achievements: [
        "Developed and deployed 5+ production ML models serving 1M+ users daily",
        "Led a team of 4 engineers in building an AI-powered recommendation system",
        "Improved model performance by 40% through advanced optimization techniques",
        "Implemented MLOps pipeline reducing deployment time by 60%"
      ],
      technologies: ["Python", "TensorFlow", "AWS", "Docker", "Kubernetes", "MLflow"]
    },
    {
      title: "Machine Learning Engineer",
      company: "DataDriven Solutions",
      period: "2021 - 2023",
      location: "New York, NY",
      description: "Built and maintained ML infrastructure and developed predictive models for various business applications.",
      achievements: [
        "Created automated data pipeline processing 10TB+ daily",
        "Developed NLP models for sentiment analysis with 95% accuracy",
        "Reduced model training time by 50% through distributed computing",
        "Mentored 3 junior developers in ML best practices"
      ],
      technologies: ["PyTorch", "Apache Spark", "PostgreSQL", "Redis", "FastAPI"]
    },
    {
      title: "Data Scientist",
      company: "Analytics Pro",
      period: "2019 - 2021",
      location: "Boston, MA",
      description: "Analyzed complex datasets and built predictive models to drive business intelligence and decision-making.",
      achievements: [
        "Built customer churn prediction model saving $2M annually",
        "Designed A/B testing framework used across 20+ experiments",
        "Created interactive dashboards for C-level executives",
        "Published 3 research papers on applied machine learning"
      ],
      technologies: ["R", "Python", "Tableau", "SQL", "Scikit-learn", "Jupyter"]
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
