
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to tackle challenging AI problems and create innovative solutions. 
            Let's discuss how we can work together to push the boundaries of what's possible.
          </p>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mb-12 animate-fade-in">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Get In Touch</CardTitle>
            <CardDescription className="text-gray-300">
              Available for full-time opportunities, consulting, and collaboration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Button 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              
              <Button 
                variant="outline" 
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline" 
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              
              <Button 
                variant="outline" 
                className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>

            <div className="pt-8 border-t border-slate-700">
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Location:</strong> San Francisco Bay Area (Open to Remote)
              </p>
              <p className="text-gray-400 mb-4">
                <strong className="text-white">Availability:</strong> Available for new opportunities
              </p>
              <p className="text-gray-400">
                <strong className="text-white">Response Time:</strong> Usually within 24 hours
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AI Engineer Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
