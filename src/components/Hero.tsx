
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
        {/* Framed Profile Image with Cool Shadow */}
        <div className="relative mb-8 group">
          <div className="w-48 h-56 lg:w-56 lg:h-64 mx-auto relative">
            {/* Outer frame shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/30 via-gray-300/20 to-slate-500/30 rounded-3xl transform rotate-1 blur-sm scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-slate-300/20 via-gray-200/15 to-slate-400/25 rounded-3xl transform -rotate-1 blur-md scale-110"></div>
            
            {/* Main frame container */}
            <div className="relative w-full h-full p-3 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 group-hover:shadow-slate-400/50">
              {/* Inner image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner border-2 border-gray-200/80">
                <img 
                  src="/lovable-uploads/9bc65c0b-24ca-4cfc-b7fc-f7cabe4def2f.png" 
                  alt="Maximilian Weissenbacher" 
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>
              </div>
              
              {/* Frame highlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
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
