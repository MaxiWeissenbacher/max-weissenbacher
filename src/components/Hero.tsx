
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
        {/* Profile Image with Cool Shape */}
        <div className="w-32 h-32 lg:w-40 lg:h-40 mx-auto mb-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden shadow-xl transform rotate-3 hover:rotate-6 transition-transform duration-300"
               style={{
                 clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
               }}>
            <img 
              src="/placeholder.svg" 
              alt="Maximilian Weissenbacher" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-3 tracking-tight min-h-[1.2em]">
          {displayedName}
          <span className="animate-pulse">|</span>
        </h1>
        
        <div className="w-16 h-px bg-gray-400 mx-auto mb-8"></div>
        
        <p className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto text-balance">
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
          className="text-gray-400 hover:text-gray-600 flex flex-col items-center animate-bounce p-2"
        >
          <ChevronDown className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
