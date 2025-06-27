
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Book } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Information Science",
      school: "University of Regensburg",
      period: "2021 - 2023",
      location: "Regensburg, Germany",
      gpa: "1.2 (GPA 3.8)",
      relevant: [
        "Data Science (Top 5%)",
        "Natural Language Engineering",
        "Machine Learning",
        "Deep Learning",
        "Research Methods",
        "Advanced Statistics"
      ],
      achievements: [
        "Graduated with distinction (Grade 1.2)",
        "Top 5% in Data Science specialization",
        "Focus on NLP and Machine Learning research",
        "Published multiple research papers during studies"
      ]
    },
    {
      degree: "Bachelor of Arts in Media and Information Science",
      school: "University of Regensburg",
      period: "2018 - 2021",
      location: "Regensburg, Germany",
      gpa: "2.3",
      relevant: [
        "NLP with Python",
        "Object-Oriented Programming in Java",
        "Algorithms & Data Structures",
        "Information Retrieval",
        "Database Systems",
        "Web Technologies"
      ],
      achievements: [
        "Strong foundation in programming and data science",
        "Completed multiple practical projects",
        "Developed expertise in information systems",
        "Active participation in research projects"
      ]
    },
    {
      degree: "Abitur",
      school: "Gymnasium LSH-Marquartstein",
      period: "2016",
      location: "Marquartstein, Germany",
      gpa: "2.7",
      relevant: [
        "Mathematics",
        "Computer Science",
        "Physics",
        "English",
        "German",
        "Economics"
      ],
      achievements: [
        "Successfully completed German Abitur",
        "Strong performance in STEM subjects",
        "Prepared for university-level studies",
        "Developed analytical and problem-solving skills"
      ]
    }
  ];

  const certifications = [
    { name: "IT Advanced Training Certificate", issuer: "University of Regensburg", year: "2021" },
    { name: "Data Science Specialization", issuer: "University Coursework", year: "2023" },
    { name: "Machine Learning Research", issuer: "Academic Research", year: "2023" },
    { name: "NLP with Python", issuer: "University Coursework", year: "2020" },
    { name: "Advanced Analytics", issuer: "Professional Development", year: "2023" }
  ];

  return (
    <section className="section-spacing bg-gray-50/50">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Education & Credentials
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Strong academic foundation combined with continuous learning and professional development
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-xl font-medium text-gray-900 mb-8 text-center">Academic Background</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="glass-effect border-0 hover:shadow-md transition-all duration-300"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 bg-gray-100 rounded-lg">
                        <Book className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <CardTitle className="text-gray-900 text-xl font-medium">{edu.degree}</CardTitle>
                        <CardDescription className="text-gray-700 font-medium text-base">
                          {edu.school}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-700 font-medium">{edu.period}</p>
                      <p className="text-gray-500 text-sm">{edu.location}</p>
                      <Badge variant="secondary" className="bg-gray-100 text-gray-700 mt-1">
                        GPA: {edu.gpa}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-gray-900 font-medium mb-3">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.relevant.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex}
                          variant="outline" 
                          className="border-gray-200 text-gray-600 text-xs font-normal"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-gray-900 font-medium mb-3">Achievements</h4>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-600 flex items-start">
                          <span className="text-gray-400 mr-3 flex-shrink-0 mt-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-xl font-medium text-gray-900 mb-8 text-center">Additional Qualifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index} 
                className="glass-effect border-0 hover:shadow-md transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <h4 className="text-gray-900 font-medium mb-2">{cert.name}</h4>
                  <p className="text-gray-600 text-sm mb-2">{cert.issuer}</p>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                    {cert.year}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
