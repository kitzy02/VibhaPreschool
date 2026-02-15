import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, X } from "lucide-react";

interface CTAAction {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  color: string;
  bgColor: string;
}

interface FloatingCTAProps {
  phoneNumber?: string;
  whatsappNumber?: string;
  email?: string;
  mapsUrl?: string;
  className?: string;
}

export default function FloatingCTA({
  phoneNumber = "+919951643717",
  whatsappNumber = "+919951643717",
  email = "info@vibhainternational.com",
  mapsUrl = "https://www.google.com/maps/place/Padmavathi+Nilayam/@17.4930924,78.3278894,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb928c4a0eb85f:0x3104aed8b291c811!8m2!3d17.4930873!4d78.3304643!16s%2Fg%2F11fz9wypzj?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
  className = "",
}: FloatingCTAProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsVisible(false);
        setIsExpanded(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const actions: CTAAction[] = [
    {
      id: "call",
      label: "Call Us",
      icon: <Phone className="w-5 h-5" />,
      action: () => (window.location.href = `tel:${phoneNumber}`),
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      icon: <MessageCircle className="w-5 h-5" />,
      action: () =>
        window.open(`https://wa.me/${whatsappNumber.replace(/\D/g, "")}`, "_blank"),
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      id: "email",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
      action: () => (window.location.href = `mailto:${email}`),
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      id: "directions",
      label: "Directions",
      icon: <MapPin className="w-5 h-5" />,
      action: () => window.open(mapsUrl, "_blank"),
      color: "text-coral-600",
      bgColor: "bg-coral-100",
    },
  ];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`fixed bottom-6 right-6 z-50 ${className}`}
        >
          {/* Action Buttons (Expanded State) */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute bottom-20 right-0 flex flex-col gap-3"
              >
                {actions.map((action, index) => (
                  <motion.button
                    key={action.id}
                    initial={{ opacity: 0, x: 50, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.8 }}
                    transition={{
                      delay: index * 0.05,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className="group flex items-center gap-3 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 pr-5 pl-3 py-3"
                  >
                    {/* Icon */}
                    <div
                      className={`p-3 rounded-full ${action.bgColor} ${action.color} transition-transform duration-300 group-hover:rotate-12`}
                    >
                      {action.icon}
                    </div>

                    {/* Label */}
                    <span className="font-semibold text-charcoal-600 whitespace-nowrap">
                      {action.label}
                    </span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleExpanded}
            className="relative w-16 h-16 bg-gradient-sunset rounded-full shadow-2xl flex items-center justify-center text-white overflow-hidden group"
            aria-label={isExpanded ? "Close menu" : "Open contact menu"}
          >
            {/* Pulsing Ring Effect */}
            {!isExpanded && (
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-coral-400 rounded-full"
              ></motion.div>
            )}

            {/* Icon with Rotation */}
            <motion.div
              animate={{ rotate: isExpanded ? 90 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative z-10"
            >
              {isExpanded ? (
                <X className="w-7 h-7" />
              ) : (
                <Phone className="w-7 h-7" />
              )}
            </motion.div>

            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

            {/* Badge for New Messages (Optional) */}
            {!isExpanded && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-sunshine-400 rounded-full border-2 border-white flex items-center justify-center"
              >
                <span className="text-[10px] font-bold text-white">!</span>
              </motion.div>
            )}
          </motion.button>

          {/* Tooltip (when not expanded) */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="absolute right-20 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none"
            >
              <div className="bg-charcoal-600 text-white px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
                Contact Us
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-8 border-transparent border-l-charcoal-600"></div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}