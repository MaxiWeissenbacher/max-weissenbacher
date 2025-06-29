
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen } from "lucide-react";

const Publications = () => {
  const publications = [
    {
      title: "MINI-KID interviews with adolescents: a corpus-based language analysis of adolescents with depressive disorders and the possibilities of continuation using Chat GPT",
      authors: "I. Jarvers, A. Ecker, P. Donabauer, K. Kampa, M. Weißenbacher, D. Schleicher, S. Kandsperger, R. Brunner, B. Ludwig",
      journal: "Frontiers in Psychiatry",
      year: "2024",
      abstract: "Background: Up to 13% of adolescents suffer from depressive disorders. Despite the high psychological burden, adolescents rarely decide to contact child and adolescent psychiatric services. To provide a low-barrier alternative, our long-term goal is to develop a chatbot for early identification of depressive symptoms using BERT-based language analysis of psychiatric interviews.",
      link: "https://scholar.google.de/citations?view_op=view_citation&hl=de&user=jb_UqygAAAAJ&citation_for_view=jb_UqygAAAAJ:2osOgNQ5qMEC"
    },
    {
      title: "Analyzing Offensive Language and Hate Speech in Political Discourse: A Case Study of German Politicians",
      authors: "M. Weissenbacher, U. Kruschwitz",
      journal: "LREC-COLING 2024 (TRAC Workshop)",
      year: "2024",
      abstract: "Ensemble models achieving 0.94 F1-Macro score for hate speech detection. Analysis of 2.7 million tweets with custom annotation tools built in Streamlit and AWS. First systematic study of hate speech in German political discourse.",
      link: "https://aclanthology.org/2024.trac-1.8.pdf"
    },
    {
      title: "Steps towards Addressing Text Classification in Low-Resource Languages",
      authors: "M. Weissenbacher, U. Kruschwitz",
      journal: "KONVENS 2023",
      year: "2023",
      abstract: "Fine-tuning BERT and XLM-RoBERTa models with data augmentation using Large Language Models for improved performance in resource-constrained language settings. Explores multilingual approaches and translation techniques.",
      link: "https://aclanthology.org/2023.konvens-main.7.pdf"
    },
    {
      title: "Sentiment Analysis on Twitter for the Major German Parties during the 2021 German Federal Election",
      authors: "T. Schmidt, J. Fehle, M. Weissenbacher, J. Richter, P. Gottschalk, C. Wolff",
      journal: "KONVENS 2022",
      year: "2022",
      citations: 23,
      abstract: "BERT-based sentiment analysis of 60,000 annotated tweets related to the German federal election, providing insights into public opinion dynamics. Achieved 93.3% accuracy with transformer models outperforming traditional approaches.",
      link: "https://epub.uni-regensburg.de/58241/1/Schmidt-2022-Sentiment%20Analysis%20on%20Twitter%20for.pdf"
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
                      {pub.journal} • {pub.year}{pub.citations && pub.citations > 0 ? ` • ${pub.citations} citations` : ''}
                    </p>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-normal"
                    onClick={() => window.open(pub.link, '_blank')}
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
