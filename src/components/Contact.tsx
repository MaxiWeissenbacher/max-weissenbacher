
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  const sendEmail = () => {
    window.location.href = 'mailto:maxweissenbacher98@gmail.com?subject=Portfolio Contact&body=Hello Maximilian,';
  };

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto container-padding text-center">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Let's Connect
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Ready to tackle challenging AI problems and create innovative solutions
          </p>
        </div>

        <Card className="glass-effect border-0 mb-12">
          <CardHeader className="pb-6">
            <CardTitle className="text-gray-900 text-xl font-medium">Get In Touch</CardTitle>
            <CardDescription className="text-gray-600">
            If you have questions or would like to collaborate? I'd be happy to connect.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-center gap-3">
              <Button 
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal"
                size="lg"
                onClick={sendEmail}
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
                            
              <Button 
                variant="outline"
                className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal"
                size="lg"
                onClick={() => window.open('https://www.linkedin.com/in/maximilian-weissenbacher/', '_blank')}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-gray-700 font-medium mb-1">Location</p>
                  <p className="text-gray-500">München, Germany</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Phone</p>
                  <p className="text-gray-500">+49(0)17656955718</p>
                </div>
                <div>
                  <p className="text-gray-700 font-medium mb-1">Response Time</p>
                  <p className="text-gray-500">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Maximilian Weissenbacher - AI Engineer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
