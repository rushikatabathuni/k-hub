import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { paradigms } from "@/data/paradigms";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ParadigmsSection = () => {
  return (
    <section id="paradigms" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Verticals
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Deep-Tech <span className="text-gradient">Paradigms</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our specialized research verticals pushing the boundaries 
            of innovation across multiple domains.
          </p>
        </motion.div>

        {/* Paradigms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paradigms.map((paradigm, index) => (
            <motion.div
              key={paradigm.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/paradigm/${paradigm.id}`}>
                <Card variant="interactive" className="h-full group">
                  <CardContent className="p-6 lg:p-8">
                    {/* Icon */}
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
                        paradigm.color === "accent"
                          ? "bg-accent/10 group-hover:bg-accent/20"
                          : "bg-primary/10 group-hover:bg-primary/20"
                      )}
                    >
                      <img
                        src={paradigm.icon}
                        alt={`${paradigm.name} logo`}
                        className="h-7 w-7 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                      {paradigm.name}
                    </h3>
                    <p className="text-sm text-primary/80 font-medium mb-3">
                      {paradigm.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                      {paradigm.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParadigmsSection;
