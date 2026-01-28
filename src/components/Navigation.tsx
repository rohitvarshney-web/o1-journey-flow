import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ApplicationForm from "@/components/ApplicationForm";
import teleportLogo from "@/assets/teleport-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isAboutPage = location.pathname === "/about-o1-visa";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About O1 Visa", href: "/about-o1-visa" },
    { name: "FAQ", href: isAboutPage ? "#faq" : "/#faq" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background border-b border-border shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={teleportLogo} alt="Teleport Logo" className="h-8 w-24 md:w-32 object-contain" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => 
              item.href.startsWith("/") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.name}
                </a>
              )
            )}
            <Button 
              size="sm" 
              className="ml-2 rounded-sm bg-primary hover:bg-primary/90 text-sm font-medium px-5"
              onClick={() => setIsFormOpen(true)}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-foreground/70 hover:text-foreground" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-background"
          >
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => 
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )
              )}
              <Button 
                size="sm" 
                className="w-full rounded-sm bg-primary hover:bg-primary/90" 
                onClick={() => setIsFormOpen(true)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ApplicationForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </nav>
  );
};

export default Navigation;
