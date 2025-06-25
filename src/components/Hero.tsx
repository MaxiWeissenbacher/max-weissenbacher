
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center container-padding relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="w-32 h-32 lg:w-40 lg:lg:h-40 mx-auto mb-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200 shadow-sm">
          <img 
            src="/placeholder.svg" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-3 tracking-tight">
          AI Engineer
        </h1>
        
        <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
        
        <p className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto text-balance">
          Crafting intelligent solutions with cutting-edge AI technologies.
          Passionate about machine learning and innovative software development.
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200"
          >
            <Mail className="w-4 h-4 mr-2" />
            Contact
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Button>
          <Button 
            variant="outline" 
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 px-6 py-2.5 text-sm font-normal transition-all duration-200"
          >
            <Linkedin className="w-4 h-4 mr-2" />
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
          className="text-gray-400 hover:text-gray-600 flex flex-col items-center animate-bounce p-2"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
