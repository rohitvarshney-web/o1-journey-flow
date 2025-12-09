import { Mail, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import teleportLogo from "@/assets/teleport-logo.png";

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-o1-visa";

  return (
    <footer className="bg-card border-t border-border" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info - Full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-3" aria-label="Go to homepage">
              <img 
                src={teleportLogo} 
                alt="Teleport - O-1 Visa Immigration Services" 
                className="h-8 sm:h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Expert immigration lawyers specializing in O-1 extraordinary ability visas for professionals in tech,
              arts, business, and beyond.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link 
                  to="/about-o1-visa#understanding" 
                  className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                >
                  O-1A Visa
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-o1-visa#understanding" 
                  className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                >
                  O-1B Visa
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources navigation">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Resources</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>
                <Link 
                  to="/about-o1-visa#who-qualifies" 
                  className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                >
                  Eligibility Guide
                </Link>
              </li>
              <li>
                <Link 
                  to="/about-o1-visa#benefits" 
                  className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                >
                  Visa Benefits
                </Link>
              </li>
              <li>
                <Link 
                  to="/#process" 
                  className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link 
                  to="/#timeline" 
                  className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                >
                  Application Timeline
                </Link>
              </li>
              <li>
                <Link 
                  to="/#testimonials" 
                  className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                {isAboutPage ? (
                  <a 
                    href="#faq" 
                    className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                  >
                    FAQ
                  </a>
                ) : (
                  <Link 
                    to="/#faq" 
                    className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
                  >
                    FAQ
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li>
                <a 
                  href="tel:+919004702232" 
                  className="flex items-center gap-2 hover:text-primary focus:text-primary focus:outline-none transition-colors"
                  aria-label="Call us at +91 90047 02232"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>+91 90047 02232</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:o1@useteleport.com" 
                  className="flex items-center gap-2 hover:text-primary focus:text-primary focus:outline-none transition-colors"
                  aria-label="Email us at o1@useteleport.com"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span className="break-all">o1@useteleport.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.google.com/?q=3rd+floor,+Star+Blue+Building,+Plot+no+1215,+22nd+Cross+Rd,+Sector+3,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-primary focus:text-primary focus:outline-none transition-colors"
                  aria-label="View our office location on Google Maps"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-xs sm:text-sm">
                    3rd floor, Star Blue Building, HSR Layout, Bengaluru, Karnataka 560102
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
            ©2025 Intelliglobe Travel Tech Private Limited. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
            <a 
              href="#" 
              className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="hover:text-primary focus:text-primary focus:outline-none focus:underline transition-colors"
            >
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
