
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-spacing bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight drop-shadow-sm">
            About Me
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6 shadow-soft"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed mb-6">
            I'm an AI Engineer at PwC Germany, where I specialize in deploying secure LLM solutions 
            for government agencies and developing GenAI tools for German ministries. My work focuses 
            on creating production-ready AI applications that solve real-world problems while ensuring 
            the highest security standards.
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed">
            With a Master's in Information Science and experience across tech companies like Amazon and SAP, 
            I bring expertise in NLP, machine learning, information retrieval, and building impactful AI systems. 
            My passion lies in bridging the gap between cutting-edge AI research and practical applications 
            that make a difference.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200 shadow-modern shadow-hover"
            onClick={() => window.open('https://www.linkedin.com/in/maximilian-weissenbacher/', '_blank')}
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200 shadow-modern shadow-hover"
            onClick={() => window.open('https://github.com/MaxiWeissenbacher', '_blank')}
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200 shadow-modern shadow-hover"
            onClick={() => window.open('https://huggingface.co/mox', '_blank')}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            HuggingFace
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200 shadow-modern shadow-hover"
            onClick={() => window.open('https://medium.com/@maxiweisei/create-a-text-annotation-app-for-text-classification-using-streamlit-9577de9a42a0', '_blank')}
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
