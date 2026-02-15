import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  parentName: string;
  childName?: string;
  grade: string;
  rating: number;
  text: string;
  photo?: string;
  date: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

// Sample testimonials (can be replaced with real data)
const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    parentName: "Priya Sharma",
    childName: "Aarav",
    grade: "UKG",
    rating: 5,
    text: "Vibha Preschool has been a blessing for our family. My son Aarav loves going to school every day. The teachers are caring, the curriculum is engaging, and we've seen tremendous growth in his confidence and social skills.",
    date: "2024-01-15",
  },
  {
    id: "2",
    parentName: "Rajesh Kumar",
    childName: "Ananya",
    grade: "LKG",
    rating: 5,
    text: "The Montessori approach at Vibha has worked wonders for my daughter. She's become more independent and curious about learning. The individual attention each child receives is remarkable!",
    date: "2024-02-20",
  },
  {
    id: "3",
    parentName: "Sneha Patel",
    childName: "Ishaan",
    grade: "Nursery",
    rating: 5,
    text: "As a first-time parent, I was nervous about sending Ishaan to preschool. The warm, nurturing environment at Vibha put all my worries to rest. The regular updates and parent involvement make us feel connected.",
    date: "2024-03-10",
  },
  {
    id: "4",
    parentName: "Amit Desai",
    childName: "Diya",
    grade: "Grade 1",
    rating: 5,
    text: "Vibha's transition from preschool to primary has been seamless. My daughter loves her teachers and friends. The focus on both academics and character development is exactly what we were looking for.",
    date: "2024-04-05",
  },
];

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
  autoPlay = true,
  autoPlayInterval = 5000,
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentTestimonial = testimonials[currentIndex];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [currentIndex, autoPlay, isPaused, autoPlayInterval]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className={`relative py-16 overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavender-50 via-cream-50 to-coral-50 -z-10"></div>
      <div className="blob-background w-96 h-96 bg-sunshine-200 top-0 right-0 animate-float"></div>
      <div className="blob-background w-80 h-80 bg-mint-200 bottom-0 left-0 animate-float animation-delay-500"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 relative z-10"
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-lavender-100 rounded-2xl">
            <Quote className="w-8 h-8 text-lavender-500" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-600 mb-4">
          What Parents Say About Us
        </h2>
        <p className="text-charcoal-400 text-lg">
          Real experiences from our Vibha family
        </p>
      </motion.div>

      {/* Testimonial Container */}
      <div className="max-w-5xl mx-auto px-4 relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group hidden md:flex items-center justify-center"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 text-charcoal-600 group-hover:text-coral-500 transition-colors" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 group hidden md:flex items-center justify-center"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 text-charcoal-600 group-hover:text-coral-500 transition-colors" />
        </button>

        {/* Testimonial Card */}
        <div className="relative h-[400px] md:h-[350px]">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-lavender-300" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="flex-grow mb-6">
                  <p className="text-charcoal-600 text-lg md:text-xl leading-relaxed italic">
                    "{currentTestimonial.text}"
                  </p>
                </blockquote>

                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      <Star
                        className={`w-5 h-5 ${
                          index < currentTestimonial.rating
                            ? "text-sunshine-400 fill-sunshine-400"
                            : "text-charcoal-200"
                        }`}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-14 h-14 rounded-full bg-gradient-sunset flex items-center justify-center text-white font-heading font-bold text-xl shadow-md">
                    {currentTestimonial.parentName.charAt(0)}
                  </div>

                  {/* Details */}
                  <div>
                    <div className="font-heading font-bold text-charcoal-600">
                      {currentTestimonial.parentName}
                    </div>
                    <div className="text-sm text-charcoal-400">
                      Parent of {currentTestimonial.childName} (
                      {currentTestimonial.grade})
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={prevTestimonial}
            className="p-3 bg-white rounded-full shadow-lg active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-charcoal-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 bg-white rounded-full shadow-lg active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-charcoal-600" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className="group relative"
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-coral-500 w-8"
                    : "bg-charcoal-300 group-hover:bg-charcoal-400"
                }`}
              ></div>

              {/* Progress bar for current dot */}
              {index === currentIndex && autoPlay && !isPaused && (
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-sunset rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: autoPlayInterval / 1000, ease: "linear" }}
                ></motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-center mt-4 text-sm text-charcoal-400 font-medium">
          {currentIndex + 1} / {testimonials.length}
        </div>
      </div>
    </div>
  );
}