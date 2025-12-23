import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { getParadigmById, paradigms } from "@/data/paradigms";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, ExternalLink, Mail, Globe, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";



const ParadigmPage = () => {
  const { id } = useParams<{ id: string }>();
  const paradigm = getParadigmById(id || "");

  if (!paradigm) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = paradigms.findIndex(p => p.id === paradigm.id);
  const prevParadigm = currentIndex > 0 ? paradigms[currentIndex - 1] : null;
  const nextParadigm = currentIndex < paradigms.length - 1 ? paradigms[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        <div className="relative container mx-auto px-4 lg:px-8">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link 
              to="/#paradigms" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Paradigms
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Icon & Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className={cn(
                  "w-16 h-16 rounded-2xl flex items-center justify-center",
                  paradigm.color === "accent" ? "bg-accent/20" : "bg-primary/20"
                )}>
                  <img 
                    src={paradigm.icon} 
                    alt={`${paradigm.name} logo`}
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{paradigm.domain}</p>
                  <p className={cn(
                    "text-sm font-medium",
                    paradigm.color === "accent" ? "text-accent" : "text-primary"
                  )}>
                    {paradigm.focusArea}
                  </p>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl lg:text-5xl font-bold mb-4">
                {paradigm.name}
              </h1>
              <p className={cn(
                "text-xl font-medium mb-6",
                paradigm.color === "accent" ? "text-accent" : "text-primary"
              )}>
                {paradigm.tagline}
              </p>

              {/* Description */}
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {paradigm.description}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{paradigm.homebase}</span>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Technologies */}
              <Card variant="glass">
                <CardContent className="p-6">
                  <h3 className="font-display font-semibold text-lg mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {paradigm.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-sm text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact */}
              {paradigm.contact && Object.keys(paradigm.contact).length > 0 && (
                <Card variant="glass">
                  <CardContent className="p-6">
                    <h3 className="font-display font-semibold text-lg mb-4">
                      Connect
                    </h3>
                    <div className="space-y-3">
                      {paradigm.contact.website && (
                        <a
                          href={`https://${paradigm.contact.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <Globe className="h-4 w-4" />
                          <span className="flex-1">Website</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {paradigm.contact.email && (
                        <a
                          href={`mailto:${paradigm.contact.email}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <Mail className="h-4 w-4" />
                          <span className="flex-1">Email</span>
                        </a>
                      )}
                      {paradigm.contact.instagram && (
                        <a
                          href={paradigm.contact.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <FaInstagram className="h-4 w-4" />
                          <span className="flex-1">Instagram</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {paradigm.contact.linkedin && (
                        <a
                          href={paradigm.contact.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <FaLinkedin className="h-4 w-4" />
                          <span className="flex-1">LinkedIn</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {paradigm.contact.discord && (
                        <a
                          href={paradigm.contact.discord}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <FaDiscord className="h-4 w-4" />
                          <span className="flex-1">Discord</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {paradigm.contact.youtube && (
                        <a
                          href={paradigm.contact.youtube}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <FaYoutube className="h-4 w-4" />
                          <span className="flex-1">YouTube</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                      {paradigm.contact.twitter && (
                        <a
                          href={paradigm.contact.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                        >
                          <FaTwitter className="h-4 w-4" />
                          <span className="flex-1">Twitter</span>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )}

            </motion.div>
          </div>
        </div>
      </section>

      {/* Features & Highlights */}
      <section className="py-20 lg:py-28 bg-secondary/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">
                Key Features
              </h2>
              <div className="space-y-4">
                {paradigm.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={cn(
                      "w-2 h-2 rounded-full mt-2",
                      paradigm.color === "accent" ? "bg-accent" : "bg-primary"
                    )} />
                    <p className="text-foreground">{feature}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold mb-6">
                Highlights
              </h2>
              <div className="space-y-4">
                {paradigm.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-4"
                  >
                    <p className="text-foreground text-sm">{highlight}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            {prevParadigm ? (
              <Button variant="outline" asChild>
                <Link to={`/paradigm/${prevParadigm.id}`} className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {prevParadigm.shortName}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            {nextParadigm && (
              <Button variant="outline" asChild>
                <Link to={`/paradigm/${nextParadigm.id}`} className="flex items-center gap-2">
                  {nextParadigm.shortName}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ParadigmPage;
