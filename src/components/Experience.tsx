
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
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative AI solutions and leading high-impact projects across diverse industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-purple-400 font-semibold">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-300 font-medium">{exp.period}</p>
                    <p className="text-gray-400 text-sm">{exp.location}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-300 flex items-start">
                        <span className="text-purple-400 mr-2 flex-shrink-0">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="outline" 
                        className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20"
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
