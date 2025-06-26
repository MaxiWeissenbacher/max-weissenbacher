
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-spacing bg-gray-50/50">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed">
            I'm an AI Engineer with a passion for developing intelligent solutions that solve real-world problems. 
            My work spans across machine learning, deep learning, and software engineering, with a focus on creating 
            scalable and impactful AI systems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200"
            onClick={() => window.open('https://ollama.ai', '_blank')}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Ollama
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200"
            onClick={() => window.open('https://medium.com', '_blank')}
          >
            <Mail className="w-4 h-4 mr-2" />
            Medium
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
