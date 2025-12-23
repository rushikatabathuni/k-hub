import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center px-4"
        >
          <h1 className="font-display text-8xl lg:text-9xl font-bold text-gradient mb-4">
            404
          </h1>
          <h2 className="font-display text-2xl lg:text-3xl font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/" className="inline-flex items-center gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </Button>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
