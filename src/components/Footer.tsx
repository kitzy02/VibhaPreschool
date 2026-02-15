import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Send, Heart, Sparkles } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase"; 


export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert([{ email }]);

    if (error) {
      console.error("Subscription error:", error.message);
      alert("Something went wrong. Please try again.");
      return;
    }

    setSubscribed(true);

    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 3000);
  };


  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "#", 
      label: "Facebook",
      color: "hover:text-blue-600 hover:bg-blue-50"
    },
    { 
      icon: Instagram, 
      href: "#", 
      label: "Instagram",
      color: "hover:text-pink-600 hover:bg-pink-50"
    },
    { 
      icon: Mail, 
      href: "mailto:info@vibhainternational.com", 
      label: "Email",
      color: "hover:text-orange-600 hover:bg-orange-50"
    },
  ];

  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Decorative Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF6B9D" />
              <stop offset="25%" stopColor="#C77DFF" />
              <stop offset="50%" stopColor="#72EFDD" />
              <stop offset="75%" stopColor="#FFD93D" />
              <stop offset="100%" stopColor="#FF9A3C" />
            </linearGradient>
          </defs>
          <path
            d="M0,50 C150,80 350,0 600,50 C850,100 1050,20 1200,50 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            opacity="0.3"
          />
          <path
            d="M0,70 C200,100 400,30 600,70 C800,110 1000,40 1200,70 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
          />
          <path
            d="M0,90 C250,110 450,60 600,90 C750,120 950,70 1200,90 L1200,120 L0,120 Z"
            fill="url(#waveGradient)"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative bg-gradient-to-br from-coral-50 via-lavender-50 to-mint-50 pt-24 pb-8">
        {/* Floating Background Shapes */}
        <div className="blob-background w-64 h-64 bg-sunshine-300 -top-20 -left-20 animate-float"></div>
        <div className="blob-background w-80 h-80 bg-coral-300 top-40 -right-32 animate-float animation-delay-500"></div>
        <div className="blob-background w-72 h-72 bg-mint-300 bottom-20 left-1/3 animate-pulse-slow"></div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            
            {/* Column 1: About & Newsletter */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3 group w-fit">
                <div className="w-14 h-14 bg-gradient-rainbow rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="font-heading font-bold text-2xl gradient-text leading-none">
                    Vibha Preschool
                  </span>
                  <span className="font-body font-medium text-sm text-charcoal-400 leading-none mt-1">
                    Where Learning Blooms
                  </span>
                </div>
              </Link>

              <p className="text-charcoal-400 leading-relaxed max-w-md">
                A joyful place where little minds grow, explore, and shine bright.
                We nurture creativity, confidence, and curiosity in every child through
                play-based learning and holistic development.
              </p>

              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h3 className="font-heading font-semibold text-lg text-charcoal-600 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-coral-500" />
                  Stay Updated
                </h3>
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="input-field pr-12 transition-all duration-300"
                    required
                    disabled={subscribed}
                  />
                  <button
                    type="submit"
                    disabled={subscribed}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-gradient-sunset text-white rounded-lg hover:scale-110 transition-transform duration-300 disabled:opacity-50 active:scale-95"
                    aria-label="Subscribe"
                  >
                    {subscribed ? (
                      <Heart className="w-5 h-5 animate-bounce fill-current" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )}
                  </button>
                </form>
                {subscribed && (
                  <p className="text-sm text-green-600 font-medium animate-slide-up flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    Thank you for subscribing!
                  </p>
                )}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-charcoal-600 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-sunset rounded-full"></div>
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-charcoal-400 hover:text-coral-500 transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="w-1.5 h-1.5 bg-coral-400 rounded-full transform transition-all duration-300 group-hover:scale-150 group-hover:bg-coral-500"></span>
                      <span className="font-medium group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl text-charcoal-600 flex items-center gap-2">
                <div className="w-2 h-8 bg-gradient-ocean rounded-full"></div>
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-charcoal-400 group hover:text-skyBlue-500 transition-colors duration-300">
                  <MapPin className="w-5 h-5 mt-0.5 text-skyBlue-500 group-hover:animate-bounce" />
                  <span className="text-sm leading-relaxed">
                    Padmavathi Nilayam,Gangaram, Chandanagar,Hyderabad<br />Telangana, India - 500050
                  </span>
                </li>
                <li>
                  <a 
                    href="tel:+919951643717" 
                    className="flex items-center gap-3 text-charcoal-400 group hover:text-green-500 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5 text-green-500 group-hover:animate-wiggle" />
                    <span className="text-sm font-medium">+91 99516 43717</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:info@vibhainternational.com" 
                    className="flex items-center gap-3 text-charcoal-400 group hover:text-orange-500 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-sm font-medium break-all">info@vibhainternational.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-charcoal-400">
                  <Clock className="w-5 h-5 mt-0.5 text-lavender-500" />
                  <div className="text-sm">
                    <p className="font-medium text-charcoal-500">School Hours</p>
                    <p>Mon - Fri: 8:30 AM - 3:00 PM</p>
                  </div>
                </li>
              </ul>

              {/* Social Links */}
              <div className="pt-4">
                <p className="text-sm font-medium text-charcoal-500 mb-3">Connect With Us</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        aria-label={social.label}
                        className={`p-3 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-medium hover:-translate-y-1 ${social.color} group`}
                      >
                        <Icon className="w-5 h-5 text-charcoal-400 group-hover:scale-110 transition-transform duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t-2 border-charcoal-200/30">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-charcoal-400 text-center md:text-left">
                © {new Date().getFullYear()} Vibha Preschool. All rights reserved.
              </p>
              
              <div className="flex gap-4 text-sm">
                <Link 
                  to="/privacy" 
                  className="text-charcoal-400 hover:text-coral-500 transition-colors duration-300 font-medium"
                >
                  Privacy Policy
                </Link>
                <span className="text-charcoal-300">|</span>
                <Link 
                  to="/terms" 
                  className="text-charcoal-400 hover:text-coral-500 transition-colors duration-300 font-medium"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}