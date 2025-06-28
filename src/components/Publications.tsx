
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "Depression Analysis with MINI-KID Interviews",
      authors: "M. Weissenbacher, et al.",
      journal: "Frontiers in Psychiatry",
      year: "2024",
      abstract: "Language-based analysis using ChatGPT, BERT, and GPT-3 for early detection of depression in adolescents through clinical interview analysis."
    },
    {
      title: "Hate Speech Analysis in Political Discourse",
      authors: "M. Weissenbacher, et al.",
      journal: "LREC-COLING 2024 (TRAC Workshop)",
      year: "2024",
      abstract: "Ensemble models achieving 0.94 F1-Macro score for hate speech detection. Analysis of 2.7 million tweets with custom annotation tools built in Streamlit and AWS."
    },
    {
      title: "Text Classification in Low-Resource Languages",
      authors: "M. Weissenbacher, et al.",
      journal: "KONVENS 2023",
      year: "2023",
      citations: 1,
      abstract: "Fine-tuning BERT and XLM-RoBERTa models with data augmentation using Large Language Models for improved performance in resource-constrained language settings."
    },
    {
      title: "Sentiment Analysis for German Federal Election",
      authors: "M. Weissenbacher, et al.",
      journal: "KONVENS 2022",
      year: "2022",
      citations: 23,
      abstract: "BERT-based sentiment analysis of 60,000 annotated tweets related to the German federal election, providing insights into public opinion dynamics."
    }
  ];

  return (
    <section className="section-spacing">
      <div className="max-w-4xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4 tracking-tight">
            Publications & Research
          </h2>
          <div className="w-16 h-px bg-gray-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
            Research contributions to NLP, machine learning, and computational linguistics
          </p>
        </div>

        <div className="text-center mb-8">
          <Button 
            variant="outline"
            className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal"
            onClick={() => window.open('https://scholar.google.de/citations?user=jb_UqygAAAAJ&hl=de&oi=ao&gmla=ABEO0YoluFz7DkMdJzQT_oHY0pXAIzR-Hpf8IxeVjPKH1MAgxPAOQCBwg6cE3VR-y8_ChitU6lmkCXaEbqD2yJA5IIh51x9Sz3WLKEUiuXkenGJ4WFHb1LzzyBzrNw&sciund=10376037668772683050', '_blank')}
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
