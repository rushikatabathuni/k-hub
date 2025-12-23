import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { paradigms } from "@/data/paradigms";

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 bg-card/50 backdrop-blur-sm">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="font-display font-bold text-3xl text-gradient">
                K-HUB
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The deep-tech incubator and venture studio of KMIT Group of Institutions. 
              Building the future through innovation, research, and collaboration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/khubmedialabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                @khubmedialabs
              </a>
            </div>
          </div>

          {/* Paradigms */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Paradigms
            </h3>
            <ul className="space-y-2">
              {paradigms.map((paradigm) => (
                <li key={paradigm.id}>
                  <Link
                    to={`/paradigm/${paradigm.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {paradigm.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/newsletter" 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <a 
                  href="https://k-hub.org.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                >
                  Official Website
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>
                  SY No 32/A & 32/E2, Near NGIT College, Uppal, Hyderabad, 
                  Telangana, India - 500088
                </span>
              </li>
              <li>
                <a 
                  href="tel:+919052906665"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary shrink-0" />
                  +91 9052906665
                </a>
              </li>
              <li>
                <a 
                  href="mailto:pratham@k-hub.org.in"
                  className="flex gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  pratham@k-hub.org.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} K-HUB. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              KMIT Group of Institutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
