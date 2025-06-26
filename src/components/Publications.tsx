
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Advanced Neural Networks for Real-Time Image Processing",
      authors: "M. Weissenbacher, J. Smith, A. Johnson",
      journal: "Journal of Machine Learning Research",
      year: "2024",
      citations: 45,
      abstract: "This paper presents a novel approach to real-time image processing using advanced neural network architectures..."
    },
    {
      title: "Efficient Natural Language Processing in Resource-Constrained Environments",
      authors: "M. Weissenbacher, L. Chen",
      journal: "IEEE Transactions on Neural Networks",
      year: "2023",
      citations: 78,
      abstract: "We propose a lightweight NLP framework that maintains high accuracy while reducing computational requirements..."
    },
    {
      title: "Reinforcement Learning for Autonomous Systems",
      authors: "M. Weissenbacher, R. Kumar, S. Davis",
      journal: "Nature Machine Intelligence",
      year: "2023",
      citations: 102,
      abstract: "This work explores the application of reinforcement learning techniques in autonomous decision-making systems..."
    }
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Publications
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Research contributions to the field of artificial intelligence and machine learning
          </p>
        </div>

        <div className="text-center mb-8">
          <Button 
            variant="outline"
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal"
            onClick={() => window.open('https://scholar.google.com', '_blank')}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            View on Google Scholar
          </Button>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card 
              key={index} 
              className="glass-effect border-0 hover:shadow-md transition-all duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-gray-900 text-lg font-medium mb-2">
                      {pub.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 mb-1">
                      {pub.authors}
                    </CardDescription>
                    <p className="text-sm text-gray-500">
                      {pub.journal} • {pub.year} • {pub.citations} citations
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {pub.abstract}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
