import { Mail, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import teleportLogo from "@/assets/teleport-logo.png";

const Footer = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-o1-visa";

  return (
    <footer id="footer" className="bg-foreground text-background" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block mb-4" aria-label="Go to homepage">
              <img
                src={teleportLogo}
                alt="Teleport - O-1 Visa Immigration Services"
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed max-w-xs">
              Expert immigration lawyers specializing in O-1 extraordinary ability visas for professionals in tech,
              arts, business, and beyond.
            </p>
          </div>

          {/* Services */}
          <nav aria-label="Services navigation">
            <h4 className="font-serif font-semibold text-base mb-5 text-background">Services</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link
                  to="/about-o1-visa#o1a-criteria"
                  className="hover:text-background transition-colors"
                >
                  O-1A Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/about-o1-visa#o1b-criteria"
                  className="hover:text-background transition-colors"
                >
                  O-1B Visa
                </Link>
              </li>
            </ul>
          </nav>

          {/* Resources */}
          <nav aria-label="Resources navigation">
            <h4 className="font-serif font-semibold text-base mb-5 text-background">Resources</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <Link
                  to="/about-o1-visa#who-qualifies"
                  className="hover:text-background transition-colors"
                >
                  Eligibility Guide
                </Link>
              </li>
              <li>
                <Link
                  to="/about-o1-visa#benefits"
                  className="hover:text-background transition-colors"
                >
                  Visa Benefits
                </Link>
              </li>
              <li>
                <Link
                  to="/#process"
                  className="hover:text-background transition-colors"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link
                  to="/#timeline"
                  className="hover:text-background transition-colors"
                >
                  Application Timeline
                </Link>
              </li>
              <li>
                <Link
                  to="/#testimonials"
                  className="hover:text-background transition-colors"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                {isAboutPage ? (
                  <a
                    href="#faq"
                    className="hover:text-background transition-colors"
                  >
                    FAQ
                  </a>
                ) : (
                  <Link
                    to="/#faq"
                    className="hover:text-background transition-colors"
                  >
                    FAQ
                  </Link>
                )}
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-serif font-semibold text-base mb-5 text-background">Contact</h4>
            <ul className="space-y-4 text-sm text-background/70">
              <li>
                <a
                  href="mailto:o1@useteleport.com"
                  className="flex items-center gap-3 hover:text-background transition-colors"
                  aria-label="Email us at o1@useteleport.com"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>o1@useteleport.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=3rd+floor,+Star+Blue+Building,+Plot+no+1215,+22nd+Cross+Rd,+Sector+3,+HSR+Layout,+Bengaluru,+Karnataka+560102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-background transition-colors"
                  aria-label="View our office location on Google Maps"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm leading-relaxed">
                    3rd floor, Star Blue Building, HSR Layout, Bengaluru, Karnataka 560102
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50 text-center sm:text-left">
            ©2025 Intelliglobe Travel Tech Private Limited. All rights reserved.
          </p>
          <nav
            aria-label="Legal links"
            className="flex flex-wrap justify-center gap-6 text-sm text-background/50"
          >
            <a
              href="#"
              className="hover:text-background/80 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-background/80 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-background/80 transition-colors"
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
