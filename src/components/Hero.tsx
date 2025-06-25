
import { Code, Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center animate-scale-in">
          <Code className="w-16 h-16 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          AI Engineer
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            & Developer
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed animate-fade-in" style={{animationDelay: '0.2s'}}>
          Crafting intelligent solutions with cutting-edge AI technologies.
          <br />
          Passionate about machine learning, neural networks, and innovative software development.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </Button>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={scrollToSection}
          className="text-white hover:text-purple-400 flex flex-col items-center"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
