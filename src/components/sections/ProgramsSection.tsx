import { motion } from "framer-motion";
import { programs } from "@/data/programs";
import { Card, CardContent } from "@/components/ui/card";

const ProgramsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-secondary/20" />
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
            K-HUB <span className="text-gradient-reverse">Programs</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive programs designed to nurture innovation and 
            empower the next generation of deep-tech leaders.
          </p>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Card variant="glass" className="h-full group hover:border-accent/50 transition-colors">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <Icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-base mb-1 group-hover:text-accent transition-colors">
                          {program.name}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {program.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
