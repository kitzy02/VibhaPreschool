import { useState, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  variant?: "default" | "featured" | "testimonial" | "stat";
  title: string;
  description?: string;
  icon?: ReactNode;
  image?: string;
  badge?: string;
  stat?: { value: string; label: string };
  expandable?: boolean;
  glowEffect?: boolean;
  tiltEffect?: boolean;
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export default function Card({
  variant = "default",
  title,
  description,
  icon,
  image,
  badge,
  stat,
  expandable = false,
  glowEffect = false,
  tiltEffect = true,
  onClick,
  className = "",
  children,
}: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D Tilt Effect on Mouse Move
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!tiltEffect || !cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10; // Invert for natural tilt
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const handleClick = () => {
    if (expandable) {
      setIsExpanded(!isExpanded);
    }
    if (onClick) {
      onClick();
    }
  };

  // Variant-specific styles
  const variantStyles = {
    default: "bg-white border-2 border-charcoal-200",
    featured:
      "bg-gradient-to-br from-coral-50 via-lavender-50 to-sunshine-50 border-4 border-transparent bg-clip-padding",
    testimonial: "bg-white border-2 border-lavender-200",
    stat: "bg-gradient-sunset text-white border-none",
  };

  // Glow effect based on variant
  const glowStyles = glowEffect
    ? variant === "featured"
      ? "shadow-glow-coral"
      : variant === "testimonial"
      ? "shadow-glow-lavender"
      : variant === "stat"
      ? "shadow-glow-sunshine"
      : "shadow-medium"
    : "shadow-soft";

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      style={{
        transform: tiltEffect
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`
        relative overflow-hidden rounded-3xl p-6
        ${variantStyles[variant]}
        ${glowStyles}
        transition-all duration-300
        ${onClick || expandable ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {/* Gradient Border for Featured */}
      {variant === "featured" && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-rainbow opacity-50 blur-sm -z-10"></div>
      )}

      {/* Badge */}
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sunshine-400 text-white shadow-md animate-pulse">
            {badge}
          </span>
        </div>
      )}

      {/* Image */}
      {image && (
        <div className="relative mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-3xl">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
          />
          {/* Image Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-600/50 to-transparent"></div>
        </div>
      )}

      {/* Content Container */}
      <div className="relative z-10">
        {/* Icon with Animation */}
        {icon && (
          <motion.div
            className="mb-4 inline-flex"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`p-4 rounded-2xl ${
                variant === "stat"
                  ? "bg-white/20"
                  : "bg-gradient-to-br from-coral-100 to-lavender-100"
              }`}
            >
              {icon}
            </div>
          </motion.div>
        )}

        {/* Stat Display */}
        {stat && variant === "stat" && (
          <div className="mb-4">
            <motion.div
              className="text-5xl font-heading font-bold mb-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {stat.value}
            </motion.div>
            <div className="text-sm opacity-90 font-medium">{stat.label}</div>
          </div>
        )}

        {/* Title */}
        <h3
          className={`text-xl md:text-2xl font-heading font-bold mb-3 ${
            variant === "stat" ? "text-white" : "text-charcoal-600"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        {description && (
          <motion.p
            className={`leading-relaxed ${
              variant === "stat"
                ? "text-white/90"
                : variant === "testimonial"
                ? "text-charcoal-400 italic"
                : "text-charcoal-400"
            }`}
            initial={false}
            animate={{ height: isExpanded ? "auto" : "auto" }}
          >
            {expandable && !isExpanded
              ? `${description.substring(0, 100)}...`
              : description}
          </motion.p>
        )}

        {/* Children (Custom Content) */}
        {children && <div className="mt-4">{children}</div>}

        {/* Expandable Toggle */}
        {expandable && description && description.length > 100 && (
          <button
            className={`mt-4 text-sm font-semibold flex items-center gap-1 ${
              variant === "stat" ? "text-white" : "text-coral-500"
            } hover:gap-2 transition-all duration-300`}
          >
            {isExpanded ? "Show Less" : "Read More"}
            <span className="text-lg">→</span>
          </button>
        )}
      </div>

      {/* Testimonial Star Rating */}
      {variant === "testimonial" && (
        <div className="flex gap-1 mt-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.svg
              key={star}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: star * 0.1 }}
              className="w-5 h-5 text-sunshine-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </motion.svg>
          ))}
        </div>
      )}

      {/* Hover Shine Effect */}
      <div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          animation: "shine 3s infinite",
        }}
      ></div>

      {/* Bottom Accent Line */}
      {variant === "featured" && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-rainbow"></div>
      )}
    </motion.div>
  );
}