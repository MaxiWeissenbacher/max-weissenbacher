
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
    <section id="skills" className="section-spacing bg-gray-50/50">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Technical Expertise
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            A comprehensive toolkit spanning AI/ML, software development, and data engineering
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect hover:shadow-md transition-all duration-300 border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-gray-900 text-lg font-medium">{category.title}</CardTitle>
                <CardDescription className="text-gray-500 text-sm">{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-1.5 bg-gray-200"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-8">Technologies & Frameworks</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-white border border-gray-200 text-gray-700 px-4 py-2 text-sm font-normal hover:bg-gray-50 transition-colors duration-200"
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
