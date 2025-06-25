
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-xl">
          <img 
            src="/placeholder.svg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">
          AI Engineer
        </h1>
        
        <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
        
        <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
          Crafting intelligent solutions with cutting-edge AI technologies.
          Passionate about machine learning and innovative software development.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-none transition-all duration-200"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-none transition-all duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-none transition-all duration-200"
          >
            <Linkedin className="w-5 h-5 mr-2" />
            LinkedIn
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={scrollToSection}
          className="text-gray-400 hover:text-gray-600 flex flex-col items-center animate-bounce"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
