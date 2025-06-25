
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to tackle challenging AI problems and create innovative solutions.
          </p>
        </div>

        <Card className="bg-white border-gray-200 shadow-sm mb-12">
          <CardHeader>
            <CardTitle className="text-gray-900 text-2xl font-light">Get In Touch</CardTitle>
            <CardDescription className="text-gray-600">
              Available for opportunities and collaboration
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none transition-all duration-200"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none transition-all duration-200"
                size="lg"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none transition-all duration-200"
                size="lg"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              
              <Button 
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none transition-all duration-200"
                size="lg"
              >
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-500 mb-4">
                <strong className="text-gray-700">Location:</strong> San Francisco Bay Area
              </p>
              <p className="text-gray-500 mb-4">
                <strong className="text-gray-700">Availability:</strong> Available for new opportunities
              </p>
              <p className="text-gray-500">
                <strong className="text-gray-700">Response Time:</strong> Usually within 24 hours
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2024 AI Engineer Portfolio. Clean, modern design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
