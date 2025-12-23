import { motion } from "framer-motion";
import { Calendar, FileText, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import { newsletters } from "@/data/newsletters";
import { paradigms } from "@/data/paradigms";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NewsletterPage = () => {
  const latestNewsletter = newsletters[0];

  // Determine what to show in highlights
  const getHighlightsData = () => {
    // If custom highlights exist, use them
    if (latestNewsletter.highlights && latestNewsletter.highlights.length > 0) {
      return latestNewsletter.highlights.map(highlight => {
        const paradigm = paradigms.find(p => p.id === highlight.paradigmId);
        return paradigm ? { ...highlight, paradigm } : null;
      }).filter(Boolean);
    }
    
    // Otherwise, generate from featured paradigms
    if (latestNewsletter.featuredParadigms && latestNewsletter.featuredParadigms.length > 0) {
      return latestNewsletter.featuredParadigms.slice(0, 3).map(id => {
        const paradigm = paradigms.find(p => p.id === id);
        if (!paradigm) return null;
        
        return {
          paradigmId: id,
          title: paradigm.name,
          description: paradigm.description,
          points: paradigm.highlights?.slice(0, 3) || paradigm.features?.slice(0, 3) || [],
          paradigm
        };
      }).filter(Boolean);
    }
    
    return [];
  };

  const highlightsData = getHighlightsData();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              K-HUB Media Labs
            </span>
            <h1 className="font-display text-4xl lg:text-6xl font-bold mt-4 mb-6">
              Paradigm <span className="text-gradient">Chronicles</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Your fortnightly digest of deep-tech innovation from K-HUB. 
              Each issue features progress updates, technical explanations, 
              and spotlight sections on significant developments across our paradigms.
            </p>
          </motion.div>

          {/* Featured Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card variant="glass" className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  {latestNewsletter.coverImage && (
                    <div className="relative aspect-[4/3] lg:aspect-auto">
                      <img
                        src={latestNewsletter.coverImage}
                        alt={latestNewsletter.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1.5">
                        <FileText className="h-4 w-4 text-primary" />
                        Issue #{latestNewsletter.issueNumber}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 text-primary" />
                        {latestNewsletter.publishDate}
                      </span>
                    </div>

                    <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4">
                      {latestNewsletter.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {latestNewsletter.summary}
                    </p>

                    {/* Featured Paradigms */}
                    {latestNewsletter.featuredParadigms && latestNewsletter.featuredParadigms.length > 0 && (
                      <div className="mb-8">
                        <p className="text-sm text-muted-foreground mb-3">Featured Paradigms:</p>
                        <div className="flex flex-wrap gap-2">
                          {latestNewsletter.featuredParadigms.map(id => {
                            const paradigm = paradigms.find(p => p.id === id);
                            if (!paradigm) return null;
                            return (
                              <div
                                key={id}
                                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-sm text-primary"
                              >
                                <img 
                                  src={paradigm.icon} 
                                  alt={`${paradigm.name} logo`}
                                  className="h-3.5 w-3.5 object-contain"
                                />
                                {paradigm.shortName}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Button or Coming Soon */}
                    {latestNewsletter.pdfUrl ? (
                      <Button variant="hero" size="lg" asChild>
                        <a 
                          href={latestNewsletter.pdfUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          Read Full Newsletter
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    ) : (
                      <div className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                        <FileText className="h-4 w-4" />
                        Full newsletter coming soon
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section - DYNAMIC & OPTIONAL */}
      {highlightsData.length > 0 && (
        <section className="py-20 lg:py-28 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-bold text-center mb-12"
            >
              Issue Highlights
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {highlightsData.map((highlight, index) => {
                if (!highlight) return null;
                const paradigm = highlight.paradigm;

                return (
                  <motion.div
                    key={highlight.paradigmId}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card variant="interactive" className="h-full">
                      <CardContent className="p-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                          paradigm.color === "accent" ? "bg-accent/10" : "bg-primary/10"
                        }`}>
                          <img 
                            src={paradigm.icon} 
                            alt={`${paradigm.name} logo`} 
                            className="h-6 w-6 object-contain" 
                          />
                        </div>
                        <h3 className="font-display font-semibold text-xl mb-3">
                          {highlight.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                          {highlight.description}
                        </p>
                        {highlight.points && highlight.points.length > 0 && (
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {highlight.points.map((point, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className={`w-1.5 h-1.5 rounded-full mt-2 ${
                                  paradigm.color === "accent" ? "bg-accent" : "bg-primary"
                                }`} />
                                {point}
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

      {/* Previous Issues Archive */}
      {newsletters.length > 1 && (
        <section className="py-20 lg:py-28 border-t border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl font-bold text-center mb-12"
            >
              Previous Issues
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsletters.slice(1).map((newsletter, index) => (
                <motion.div
                  key={newsletter.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card variant="interactive" className="h-full">
                    <CardContent className="p-0">
                      {newsletter.coverImage && (
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={newsletter.coverImage}
                            alt={newsletter.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                          <FileText className="h-3 w-3" />
                          Issue #{newsletter.issueNumber}
                          <span>•</span>
                          <Calendar className="h-3 w-3" />
                          {newsletter.publishDate}
                        </div>
                        <h3 className="font-display font-semibold text-lg mb-2">
                          {newsletter.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {newsletter.summary}
                        </p>
                        {newsletter.pdfUrl && (
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <a 
                              href={newsletter.pdfUrl} 
                              target="_blank" 
                              rel="noopener noreferrer"
                            >
                              Read Issue
                              <ExternalLink className="h-3 w-3 ml-2" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming Soon Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Coming Soon
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-bold mt-4 mb-6">
              Future <span className="text-gradient-reverse">Newsletters</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Each fortnight, expect updates from new deep-tech verticals including 
              materials science, mental health tech, nutraceuticals, agritech, 
              synthetic data generation, and more.
            </p>
            <Button variant="accent" size="lg" asChild>
              <a href="mailto:pratham@k-hub.org.in">
                Subscribe for Updates
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsletterPage;
