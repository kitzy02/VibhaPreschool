import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white shadow-strong py-3"
            : "bg-white/95 backdrop-blur-xl py-4"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-4 md:px-6 lg:px-8">
          
          {/* Logo - Playful with Bounce Animation */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            {/* Animated Logo Icon */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-rainbow rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              {/* Floating badge */}
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-coral-400 rounded-full border-2 border-white animate-bounce-slow flex items-center justify-center">
                <span className="text-white text-xs font-bold">✦</span>
              </div>
            </div>
            
            {/* Logo Text */}
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xl md:text-2xl gradient-text leading-none">
                Vibha
              </span>
              <span className="font-body font-medium text-xs md:text-sm text-charcoal-400 leading-none mt-0.5">
                Preschool
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative font-semibold text-base transition-colors duration-300 group"
              >
                {/* Link Text */}
                <span
                  className={`${
                    location.pathname === link.path
                      ? "text-coral-500"
                      : "text-charcoal-500 group-hover:text-coral-500"
                  }`}
                >
                  {link.name}
                </span>
                
                {/* Animated Underline - Grows from Center */}
                <span
                  className={`absolute left-1/2 -bottom-1 h-0.5 bg-gradient-sunset transition-all duration-300 transform -translate-x-1/2 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
                
                {/* Active Dot Indicator */}
                {location.pathname === link.path && (
                  <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-coral-500 rounded-full animate-pulse"></span>
                )}
              </Link>
            ))}

            {/* CTA Button with Shimmer Effect */}
            <Link
              to="/contact"
              className="relative overflow-hidden btn-primary group"
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              
              <Phone className="w-4 h-4" />
              <span className="relative z-10">Admission</span>
              
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sunshine-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sunshine-500"></span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 rounded-xl bg-gradient-sunset text-white shadow-lg hover:scale-110 transition-transform duration-300 active:scale-95"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6">
              {/* Animated Menu Icon */}
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                }`}
              >
                <Menu size={24} />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                }`}
              >
                <X size={24} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Menu - Slide Down Animation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-br from-cream-50 to-cream-100 px-4 py-6 space-y-1 shadow-inner">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-2xl font-semibold text-base transition-all duration-300 animate-slide-down ${
                  location.pathname === link.path
                    ? "bg-gradient-sunset text-white shadow-lg transform scale-105"
                    : "text-charcoal-500 hover:bg-white hover:shadow-md hover:scale-105"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {location.pathname === link.path && (
                    <span className="text-2xl">→</span>
                  )}
                </div>
              </Link>
            ))}
            
            {/* Mobile CTA Button */}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-4"
            >
              <div className="btn-primary w-full justify-center text-center shadow-glow-coral animate-slide-down animation-delay-300">
                <Phone className="w-5 h-5" />
                <span>Admission Inquiry</span>
                <Sparkles className="w-4 h-4 animate-pulse" />
              </div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20 md:h-24"></div>
    </>
  );
}