import { useState } from "react";
import { Loader2 } from "lucide-react";

interface ButtonProps {
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "success" | "warning";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button = ({
  text,
  type = "button",
  onClick,
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  loading = false,
  disabled = false,
  fullWidth = false,
  className = "",
}: ButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  // Handle ripple effect on click
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples((prev) => [...prev, { x, y, id }]);

    // Remove ripple after animation
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    // Call onClick handler
    if (onClick) {
      onClick();
    }
  };

  // Variant styles
  const variantStyles = {
    primary:
      "bg-gradient-sunset text-white shadow-lg hover:shadow-xl hover:shadow-coral-300/50 focus:ring-coral-300",
    secondary:
      "bg-gradient-ocean text-white shadow-lg hover:shadow-xl hover:shadow-skyBlue-300/50 focus:ring-skyBlue-300",
    outline:
      "bg-transparent border-3 border-charcoal-600 text-charcoal-600 hover:bg-charcoal-600 hover:text-white focus:ring-charcoal-300",
    ghost:
      "bg-transparent text-charcoal-600 hover:bg-charcoal-100 focus:ring-charcoal-200",
    success:
      "bg-gradient-to-r from-mint-400 to-mint-500 text-white shadow-lg hover:shadow-xl hover:shadow-mint-300/50 focus:ring-mint-300",
    warning:
      "bg-gradient-to-r from-sunshine-400 to-orange-400 text-white shadow-lg hover:shadow-xl hover:shadow-sunshine-300/50 focus:ring-sunshine-300",
  };

  // Size styles
  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  // Icon size based on button size
  const iconSizeClass = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      className={`
        relative overflow-hidden
        inline-flex items-center justify-center
        font-semibold font-body
        rounded-full
        transition-all duration-300
        focus:outline-none focus:ring-4 focus:ring-offset-2
        active:scale-95
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${fullWidth ? "w-full" : ""}
        ${isDisabled ? "opacity-50 cursor-not-allowed" : "hover:scale-105"}
        ${className}
      `}
      aria-busy={loading}
    >
      {/* Ripple Effect Container */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 pointer-events-none animate-[ripple_0.6s_ease-out]"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 20,
            height: 20,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/* Shimmer Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-inherit">
        {/* Loading Spinner */}
        {loading && (
          <Loader2 className={`${iconSizeClass[size]} animate-spin`} />
        )}

        {/* Icon - Left Position */}
        {!loading && icon && iconPosition === "left" && (
          <span className={iconSizeClass[size]}>{icon}</span>
        )}

        {/* Button Text */}
        <span>{text}</span>

        {/* Icon - Right Position */}
        {!loading && icon && iconPosition === "right" && (
          <span className={iconSizeClass[size]}>{icon}</span>
        )}
      </span>
    </button>
  );
};

export default Button;