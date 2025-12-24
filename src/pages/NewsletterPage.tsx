import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, FileText, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { fetchNewsletters, type Newsletter } from "@/data/newsletters";
import { paradigms } from "@/data/paradigms";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import newsletterCover from "@/assets/newsletter/page1.jpg";

const NewsletterPage = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNewsletters = async () => {
      try {
        const data = await fetchNewsletters();
        setNewsletters(data.sort((a, b) => b.issueNumber - a.issueNumber));
      } catch (error) {
        console.error("Failed to load newsletters:", error);
      } finally {
        setLoading(false);
      }
    };
    
    loadNewsletters();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading newsletters...</p>
          </div>
        </div>
      </Layout>
    );
  }

  const latestNewsletter = newsletters[0];

  // Show message if no newsletters
  if (!latestNewsletter) {
    return (
      <Layout>
        <div className="min-h-screen bg-background">
          <div className="container mx-auto px-4 lg:px-8 py-24">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <div className="text-center py-24">
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
                Paradigm <span className="text-gradient">Chronicles</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                No newsletters available yet. Check back soon!
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const getHighlightsData = (newsletter: Newsletter) => {
    if (!newsletter.highlights || newsletter.highlights.length === 0) {
      return [];
    }
    
    return newsletter.highlights.map(highlight => ({
      ...highlight,
      paradigm: paradigms.find(p => p.id === highlight.paradigmId)
    }));
  };

  const highlightsData = getHighlightsData(latestNewsletter);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          <div className="absolute inset-0 gradient-radial opacity-50" />
          
          <div className="relative container mx-auto px-4 lg:px-8">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-display text-5xl lg:text-6xl font-bold mb-6">
                Paradigm <span className="text-gradient">Chronicles</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Your fortnightly digest of deep-tech innovation from K-HUB. Each issue features 
                progress updates, technical explanations, and spotlight sections on significant 
                developments across our paradigms.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Latest Issue */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card variant="glass" className="overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Cover Image */}
                  <div className="relative h-full min-h-[400px]">
                    <img
                      src={newsletterCover}
                      alt={latestNewsletter.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <FileText className="h-4 w-4 text-primary" />
                      Issue #{latestNewsletter.issueNumber}
                      <span className="mx-2">•</span>
                      <Calendar className="h-4 w-4 text-primary" />
                      {latestNewsletter.publishDate}
                    </div>

                    <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                      {latestNewsletter.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {latestNewsletter.summary}
                    </p>

                    {/* Featured Paradigms */}
                    {latestNewsletter.featuredParadigms && latestNewsletter.featuredParadigms.length > 0 && (
                      <div className="mb-6">
                        <p className="text-sm font-medium text-muted-foreground mb-3">
                          Featured Paradigms:
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {latestNewsletter.featuredParadigms.map(id => {
                            const paradigm = paradigms.find(p => p.id === id);
                            if (!paradigm) return null;
                            return (
                              <Link
                                key={paradigm.id}
                                to={`/paradigm/${paradigm.id}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 text-xs font-medium text-primary transition-colors"
                              >
                                <img 
                                  src={paradigm.icon} 
                                  alt={`${paradigm.name} logo`}
                                  className="h-3 w-3 object-contain"
                                />
                                {paradigm.shortName}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {latestNewsletter.pdfUrl && (
                      <Button variant="hero" size="lg" asChild>
                        <a href={latestNewsletter.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <Download className="h-5 w-5 mr-2" />
                          Read Full Issue
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Highlights */}
        {highlightsData.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                  Issue <span className="text-gradient">Highlights</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {highlightsData.map((highlight, index) => {
                  const paradigm = highlight.paradigm;
                  if (!paradigm) return null;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card variant="glass" className="h-full hover:glow-primary transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <img 
                              src={paradigm.icon} 
                              alt={`${paradigm.name} logo`}
                              className="h-8 w-8 object-contain"
                            />
                            <CardTitle className="text-xl">{highlight.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {highlight.description}
                          </p>
                          {highlight.points && highlight.points.length > 0 && (
                            <ul className="space-y-2">
                              {highlight.points.map((point, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Past Issues */}
        {newsletters.length > 1 && (
          <section className="py-16">
            <div className="container mx-auto px-4 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                  Past <span className="text-gradient">Issues</span>
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsletters.slice(1).map((newsletter, index) => (
                  <motion.div
                    key={newsletter.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card variant="glass" className="h-full hover:glow-primary transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <FileText className="h-4 w-4 text-primary" />
                          Issue #{newsletter.issueNumber}
                          <span className="mx-1">•</span>
                          <Calendar className="h-4 w-4 text-primary" />
                          {newsletter.publishDate}
                        </div>
                        <CardTitle className="text-xl">{newsletter.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {newsletter.summary}
                        </p>
                        {newsletter.pdfUrl && (
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a href={newsletter.pdfUrl} target="_blank" rel="noopener noreferrer">
                              <Download className="h-4 w-4 mr-2" />
                              Read Issue
                            </a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Coming Soon */}
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <Card variant="glass" className="text-center p-12">
              <h3 className="font-display text-2xl font-bold mb-4">
                More Issues <span className="text-gradient">Coming Soon</span>
              </h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each fortnight, expect updates from new deep-tech verticals including materials 
                science, mental health tech, nutraceuticals, agritech, synthetic data generation, 
                and more.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default NewsletterPage;
