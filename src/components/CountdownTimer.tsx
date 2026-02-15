import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, AlertCircle } from "lucide-react";

interface TimeUnit {
  value: number;
  label: string;
}

interface CountdownTimerProps {
  targetDate: Date;
  title?: string;
  description?: string;
  onComplete?: () => void;
  className?: string;
}

export default function CountdownTimer({
  targetDate,
  title = "Admissions Closing In",
  description = "Don't miss out! Apply before the deadline.",
  onComplete,
  className = "",
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>([]);
  const [urgencyLevel, setUrgencyLevel] = useState<"normal" | "warning" | "urgent">("normal");

  const calculateTimeLeft = (): TimeUnit[] => {
    const difference = targetDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      if (onComplete) onComplete();
      return [
        { value: 0, label: "Days" },
        { value: 0, label: "Hours" },
        { value: 0, label: "Minutes" },
        { value: 0, label: "Seconds" },
      ];
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    // Determine urgency level
    if (days < 3) {
      setUrgencyLevel("urgent");
    } else if (days < 7) {
      setUrgencyLevel("warning");
    } else {
      setUrgencyLevel("normal");
    }

    return [
      { value: days, label: "Days" },
      { value: hours, label: "Hours" },
      { value: minutes, label: "Minutes" },
      { value: seconds, label: "Seconds" },
    ];
  };

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Gradient colors based on urgency
  const gradientColors = {
    normal: "from-skyBlue-400 to-mint-400",
    warning: "from-sunshine-400 to-orange-400",
    urgent: "from-coral-400 to-rose-500",
  };

  const iconColors = {
    normal: "text-skyBlue-500",
    warning: "text-orange-500",
    urgent: "text-coral-500",
  };

  return (
    <div className={`relative py-12 overflow-hidden ${className}`}>
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradientColors[urgencyLevel]} opacity-10 -z-10`}
      ></div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex justify-center mb-4">
            <motion.div
              animate={
                urgencyLevel === "urgent"
                  ? { scale: [1, 1.1, 1] }
                  : {}
              }
              transition={{
                duration: 1,
                repeat: urgencyLevel === "urgent" ? Infinity : 0,
              }}
              className={`p-4 bg-white rounded-2xl shadow-lg ${
                urgencyLevel === "urgent" ? "animate-pulse" : ""
              }`}
            >
              {urgencyLevel === "urgent" ? (
                <AlertCircle className={`w-8 h-8 ${iconColors[urgencyLevel]}`} />
              ) : (
                <Clock className={`w-8 h-8 ${iconColors[urgencyLevel]}`} />
              )}
            </motion.div>
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-600 mb-2">
            {title}
          </h2>
          <p className="text-charcoal-400 text-lg">{description}</p>
        </motion.div>

        {/* Timer Display */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {timeLeft.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Time Unit Card */}
              <div
                className={`
                bg-white rounded-3xl shadow-xl p-6 md:p-8
                border-4 border-transparent
                ${urgencyLevel === "urgent" ? "animate-pulse" : ""}
              `}
                style={{
                  borderImage:
                    urgencyLevel === "urgent"
                      ? "linear-gradient(135deg, #FF6B9D, #FF4081) 1"
                      : undefined,
                }}
              >
                {/* Number Display with Flip Animation */}
                <div className="relative h-16 md:h-20 mb-3 overflow-hidden">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={unit.value}
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 100, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className={`
                        absolute inset-0 flex items-center justify-center
                        text-5xl md:text-6xl font-heading font-bold
                        bg-gradient-to-br ${gradientColors[urgencyLevel]}
                        bg-clip-text text-transparent
                      `}
                    >
                      {String(unit.value).padStart(2, "0")}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Label */}
                <div className="text-center text-charcoal-400 font-semibold text-sm md:text-base">
                  {unit.label}
                </div>

                {/* Glow Effect */}
                <motion.div
                  animate={
                    urgencyLevel === "urgent"
                      ? {
                          opacity: [0, 0.5, 0],
                          scale: [0.8, 1.2, 0.8],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: urgencyLevel === "urgent" ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className={`
                    absolute inset-0 rounded-3xl
                    bg-gradient-to-br ${gradientColors[urgencyLevel]}
                    opacity-0 blur-xl -z-10
                  `}
                ></motion.div>
              </div>

              {/* Separator Colon (except last one) */}
              {index < timeLeft.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-3xl font-bold text-charcoal-300">
                  :
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Urgency Message */}
        {urgencyLevel === "urgent" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-4 bg-coral-50 border-2 border-coral-200 rounded-2xl text-center"
          >
            <p className="text-coral-600 font-semibold flex items-center justify-center gap-2">
              <AlertCircle className="w-5 h-5" />
              <span>Hurry! Limited time remaining to secure your spot!</span>
            </p>
          </motion.div>
        )}

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <button
            className={`
              btn-primary px-8 py-4 text-lg
              ${urgencyLevel === "urgent" ? "animate-bounce" : ""}
            `}
            style={{
              background: `linear-gradient(135deg, ${
                urgencyLevel === "urgent"
                  ? "#FF6B9D, #FF4081"
                  : urgencyLevel === "warning"
                  ? "#FFD93D, #FF9A3C"
                  : "#72EFDD, #2196F3"
              })`,
            }}
          >
            <span>Apply Now</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              →
            </motion.span>
          </button>
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div
        className={`blob-background w-64 h-64 ${
          urgencyLevel === "urgent"
            ? "bg-coral-200"
            : urgencyLevel === "warning"
            ? "bg-sunshine-200"
            : "bg-skyBlue-200"
        } top-10 right-10 animate-float`}
      ></div>
      <div
        className={`blob-background w-80 h-80 ${
          urgencyLevel === "urgent"
            ? "bg-rose-200"
            : urgencyLevel === "warning"
            ? "bg-orange-200"
            : "bg-mint-200"
        } bottom-10 left-10 animate-float animation-delay-500`}
      ></div>
    </div>
  );
}