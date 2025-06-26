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
          <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto relative">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse opacity-20 shadow-glow"></div>
            
            {/* Main image container */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-2xl border-4 border-white transform transition-all duration-300 hover:scale-105 shadow-hover">
              <img 
                src="/lovable-uploads/9bc65c0b-24ca-4cfc-b7fc-f7cabe4def2f.png" 
                alt="Maximilian Weissenbacher" 
                className="w-full h-full object-cover"
              />
              
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            {/* Floating accent elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-70 animate-bounce shadow-modern"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-purple-500 rounded-full opacity-70 animate-bounce shadow-modern" style={{ animationDelay: '0.5s' }}></div>
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
