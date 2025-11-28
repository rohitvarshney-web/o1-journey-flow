import { Mail, Phone, MapPin } from "lucide-react";
import teleportLogo from "@/assets/teleport-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <img src={teleportLogo} alt="Teleport Logo" className="h-10 w-28 md:w-36 object-contain" />
              </a>
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
                <a href="#" className="hover:text-primary transition-colors">
                  O-1A Visa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  O-1B Visa
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Green Card
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Premium Processing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Eligibility Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>o1@useteleport.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-8 h-8 mt-0.5" />
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
