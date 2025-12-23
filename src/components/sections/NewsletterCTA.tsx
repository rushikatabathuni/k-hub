import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import { newsletters } from "@/data/newsletters";
import { paradigms } from "@/data/paradigms";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import newsletterCover from "@/assets/newsletter/page1.jpg";

const NewsletterCTA = () => {
  const latestNewsletter = newsletters[0];
  const featuredParadigms = latestNewsletter.featuredParadigms
    .map(id => paradigms.find(p => p.id === id))
    .filter(Boolean);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Latest Newsletter
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Paradigm <span className="text-gradient">Chronicles</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Stay updated with the latest developments from our deep-tech verticals. 
              Each issue features progress updates, technical explanations, and 
              spotlight sections on significant developments.
            </p>

            {/* Latest Issue Info */}
            <Card variant="glass" className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <FileText className="h-4 w-4 text-primary" />
                  Issue #{latestNewsletter.issueNumber}
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 text-primary" />
                  {latestNewsletter.publishDate}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {latestNewsletter.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {featuredParadigms.map(paradigm => {
                    if (!paradigm) return null;
                    return (
                      <div
                        key={paradigm.id}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-xs font-medium text-primary"
                      >
                        <img 
                          src={paradigm.icon} 
                          alt={`${paradigm.name} logo`}
                          className="h-3 w-3 object-contain"
                        />
                        {paradigm.shortName}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            <Button variant="hero" size="lg" asChild>
              <Link to="/newsletter">
                Read Newsletter
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-primary">
              <img
                src={newsletterCover}
                alt="Paradigm Chronicles Newsletter"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display text-2xl font-bold text-foreground">
                  Paradigm Chronicles
                </p>
                <p className="text-primary font-medium">
                  Issue {latestNewsletter.issueNumber}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
