
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      description: "Core AI technologies and frameworks",
      skills: [
        { name: "Python", level: 95 },
        { name: "TensorFlow", level: 90 },
        { name: "PyTorch", level: 88 },
        { name: "Scikit-learn", level: 92 },
        { name: "OpenAI API", level: 85 },
        { name: "Hugging Face", level: 87 }
      ]
    },
    {
      title: "Development & Tools",
      description: "Software development and deployment",
      skills: [
        { name: "JavaScript/TypeScript", level: 90 },
        { name: "React", level: 88 },
        { name: "Node.js", level: 85 },
        { name: "Docker", level: 82 },
        { name: "AWS/GCP", level: 80 },
        { name: "Git", level: 95 }
      ]
    },
    {
      title: "Data & Analytics",
      description: "Data processing and visualization",
      skills: [
        { name: "Pandas", level: 93 },
        { name: "NumPy", level: 90 },
        { name: "SQL", level: 88 },
        { name: "Matplotlib/Seaborn", level: 85 },
        { name: "Apache Spark", level: 75 },
        { name: "Tableau", level: 80 }
      ]
    }
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "React", "TypeScript", "AWS", 
    "Docker", "Kubernetes", "OpenAI", "LangChain", "Vector Databases",
    "Neural Networks", "NLP", "Computer Vision", "MLOps", "CI/CD"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical Arsenal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning AI/ML, software development, and data engineering
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <CardTitle className="text-white text-xl">{category.title}</CardTitle>
                <CardDescription className="text-gray-400">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-slate-700"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-white mb-8">Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-300 border-purple-500/30 px-4 py-2 text-sm hover:scale-105 transition-transform duration-200 animate-fade-in"
                style={{animationDelay: `${index * 0.05}s`}}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
