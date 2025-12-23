import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 gradient-radial" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About K-HUB
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Where Deep-Tech
              <span className="text-gradient block">Meets Innovation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              K-Hub is the deep-tech incubator and venture studio of KMIT Group of Institutions. 
              We incubate teams working across multiple domains—drug discovery, cybersecurity, 
              robotics, materials science, and more—by providing structured access to GPU 
              infrastructure, technical mentorship, business guidance, and continuous support.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our incubated teams comprise students from KMIT, NGIT, KMEC, and KMCE, 
              working on long-term projects and research areas in these deep-tech domains.
            </p>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            {/* Mission Card */}
            <div className="glass-card p-6 lg:p-8 group hover:border-primary/50 transition-colors">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    Our Mission
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    To give students early exposure to deep-tech research and a startup-style 
                    working environment while they are still in their second and third years, 
                    preparing them better for the future.
                  </p>
                </div>
              </div>
            </div>

            {/* Approach Card */}
            <div className="glass-card p-6 lg:p-8 group hover:border-accent/50 transition-colors">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Lightbulb className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    Learning by Doing
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our objectives align with KMIT's approach of "learning by doing" and 
                    applying computer science across multiple domains. We build collaborations 
                    with industry and research partners for practical experience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
