import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { stats, campuses } from "@/data/stats";

const StatsSection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      
      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block">
                <div className="stat-glow">
                  <span className="font-display text-5xl lg:text-6xl font-bold text-gradient">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Campus Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-6 uppercase tracking-wider">
            Campus Partners
          </p>
          <div className="flex flex-wrap justify-center gap-4 lg:gap-8">
            {campuses.map((campus, index) => (
              <motion.div
                key={campus}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="px-6 py-3 rounded-xl glass-card"
              >
                <span className="font-display font-semibold text-lg text-foreground">
                  {campus}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
