
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const fullName = "Maximilian Weissenbacher";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setDisplayedName(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center container-padding relative">
      <div className="text-center max-w-4xl mx-auto">
        {/* Modern Profile Image */}
        <div className="relative mb-8 group">
          <div className="w-40 h-40 lg:w-48 lg:h-48 mx-auto relative">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl animate-pulse opacity-10 shadow-glow"></div>
            
            {/* Subtle border glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 blur-sm transform rotate-1"></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl border-2 border-white/50 transform transition-all duration-300 hover:scale-105 shadow-hover">
              <img 
                src="/lovable-uploads/9bc65c0b-24ca-4cfc-b7fc-f7cabe4def2f.png" 
                alt="Maximilian Weissenbacher" 
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
            </div>
            
            {/* Modern corner accent lines */}
            <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-blue-400/40 rounded-tl-xl transform -translate-x-1 -translate-y-1"></div>
            <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-purple-400/40 rounded-tr-xl transform translate-x-1 -translate-y-1"></div>
            <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-pink-400/40 rounded-bl-xl transform -translate-x-1 translate-y-1"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-blue-400/40 rounded-br-xl transform translate-x-1 translate-y-1"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-3 tracking-tight min-h-[1.2em] drop-shadow-sm">
          {displayedName}
          <span className="animate-pulse">|</span>
        </h1>
        
        <div className="w-16 h-px bg-gray-400 mx-auto mb-8 shadow-soft"></div>
        
        <p className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto text-balance drop-shadow-sm">
          AI Engineer & Researcher crafting intelligent solutions with cutting-edge technologies.
          Passionate about machine learning and innovative software development.
        </p>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={scrollToSection}
          className="text-gray-400 hover:text-gray-600 flex flex-col items-center animate-bounce p-2 shadow-hover"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
