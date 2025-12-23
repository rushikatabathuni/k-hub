import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { paradigms } from "@/data/paradigms";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [paradigmsOpen, setParadigmsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Newsletter", path: "/newsletter" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl border-b border-border/50" />
      
      <nav className="relative container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-lg group-hover:bg-primary/50 transition-colors" />
              <span className="relative font-display font-bold text-2xl text-gradient">
                K-HUB
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "nav-underline text-sm font-medium transition-colors",
                  isActive(link.path) 
                    ? "text-primary active" 
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}

            {/* Paradigms Dropdown */}
            <div className="relative">
              <button
                onClick={() => setParadigmsOpen(!paradigmsOpen)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors",
                  paradigmsOpen || location.pathname.includes("/paradigm")
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Paradigms
                <ChevronDown 
                  className={cn(
                    "h-4 w-4 transition-transform",
                    paradigmsOpen && "rotate-180"
                  )} 
                />
              </button>

              <AnimatePresence>
                {paradigmsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-64 glass-card p-2 rounded-xl"
                    onMouseLeave={() => setParadigmsOpen(false)}
                  >
                    {paradigms.map((paradigm) => (
                      <Link
                        key={paradigm.id}
                        to={`/paradigm/${paradigm.id}`}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-secondary transition-colors group"
                        onClick={() => setParadigmsOpen(false)}
                      >
                        <img 
                          src={paradigm.icon} 
                          alt={`${paradigm.name} logo`}
                          className={cn(
                            "h-5 w-5 object-contain transition-opacity",
                            paradigm.color === "accent" ? "opacity-90" : "opacity-90"
                          )}
                        />
                        <div>
                          <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {paradigm.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {paradigm.focusArea}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Button variant="hero" size="sm" asChild>
              <a href="mailto:pratham@k-hub.org.in">Contact Us</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                      isActive(link.path)
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-secondary"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}

                <div className="px-4 py-2">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    Paradigms
                  </p>
                  <div className="space-y-1">
                    {paradigms.map((paradigm) => (
                      <Link
                        key={paradigm.id}
                        to={`/paradigm/${paradigm.id}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <img 
                          src={paradigm.icon} 
                          alt={`${paradigm.name} logo`}
                          className="h-4 w-4 object-contain"
                        />
                        <span className="text-sm text-foreground">
                          {paradigm.shortName}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="px-4 pt-2">
                  <Button variant="hero" className="w-full" asChild>
                    <a href="mailto:pratham@k-hub.org.in">Contact Us</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
