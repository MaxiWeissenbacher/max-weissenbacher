import { ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [displayedName, setDisplayedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Maximilian Weissenbacher";
  
  useEffect(() => {
    let index = displayedName.length;
    
    const timer = setInterval(() => {
      if (!isDeleting) {
        // Typing forward
        if (index < fullName.length) {
          setDisplayedName(fullName.slice(0, index + 1));
          index++;
        } else {
          // Wait a bit then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting backward
        if (index > 0) {
          setDisplayedName(fullName.slice(0, index - 1));
          index--;
        } else {
          // Start typing again
          setIsDeleting(false);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearInterval(timer);
  }, [isDeleting, displayedName.length]);

  const scrollToSection = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    // Create a temporary link to download the resume
    const link = document.createElement('a');
    link.href = '/cv_weissenbacher.pdf'; // You'll need to add your resume PDF to the public folder
    link.download = 'Maximilian_Weissenbacher_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center container-padding relative pt-24">
      <div className="text-center max-w-4xl mx-auto">
        {/* Framed Profile Image with Cool Shadow */}
        <div className="relative mb-12 group">
          <div className="w-48 h-56 lg:w-56 lg:h-64 mx-auto relative">
            {/* Outer frame shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400/20 via-gray-300/15 to-slate-500/20 rounded-3xl transform rotate-1 blur-sm scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-slate-300/15 via-gray-200/10 to-slate-400/15 rounded-3xl transform -rotate-1 blur-md scale-110"></div>
            
            {/* Main frame container - made thinner */}
            <div className="relative w-full h-full p-0.5 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:rotate-1 group-hover:shadow-slate-400/40">
              {/* Inner image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner border border-gray-200/30">
                <img 
                  src="/lovable-uploads/455c2fe9-cb04-43bd-895f-6f7e60766cfc.png"
                  alt="Maximilian Weissenbacher" 
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/3 to-transparent"></div>
              </div>
              
              {/* Frame highlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-gray-900 mb-6 tracking-tight min-h-[1.2em] drop-shadow-sm">
          {displayedName}
          <span className="animate-pulse">|</span>
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-600 mb-8 font-light">
          Welcome to my portfolio
        </p>
        
        <div className="w-16 h-px bg-gray-400 mx-auto mb-8 shadow-soft"></div>
        
        <div className="flex justify-center mb-12">
          <Button 
            onClick={downloadResume}
            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 text-sm font-normal transition-all duration-200 shadow-modern shadow-hover"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
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
