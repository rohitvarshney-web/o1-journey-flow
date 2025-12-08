import { Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import teleportLogo from "@/assets/teleport-logo.png";

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-o1-visa";

  // Helper to create proper links based on current page
  const getLink = (hash: string, targetPage: "home" | "about") => {
    if (targetPage === "home") {
      return isAboutPage ? `/${hash}` : hash;
    } else {
      return isAboutPage ? hash : `/about-o1-visa${hash}`;
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img src={teleportLogo} alt="Teleport Logo" className="h-10 w-28 md:w-36 object-contain" />
              </Link>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Expert immigration lawyers specializing in O-1 extraordinary ability visas for professionals in tech,
              arts, business, and beyond.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about-o1-visa#understanding" className="hover:text-primary transition-colors">
                  O-1A Visa
                </Link>
              </li>
              <li>
                <Link to="/about-o1-visa#understanding" className="hover:text-primary transition-colors">
                  O-1B Visa
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about-o1-visa#who-qualifies" className="hover:text-primary transition-colors">
                  Eligibility Guide
                </Link>
              </li>
              <li>
                <Link to="/about-o1-visa#benefits" className="hover:text-primary transition-colors">
                  Visa Benefits
                </Link>
              </li>
              <li>
                <Link to="/#process" className="hover:text-primary transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link to="/#timeline" className="hover:text-primary transition-colors">
                  Application Timeline
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="hover:text-primary transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link to="/about-o1-visa#faq" className="hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 90047 02232</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>o1@useteleport.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-12 h-12 mt-0.5" />
                <span>
                  Bengaluru
                  <br />
                  3rd floor, Star Blue Building, Plot no 1215, 22nd Cross Rd, Sector 3, HSR Layout, Bengaluru, Karnataka
                  560102
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            ©2025 Intelliglobe Travel Tech Private Limited. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
