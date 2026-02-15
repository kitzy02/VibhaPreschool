import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-lavender-50 to-sunshine-50 px-4 py-20">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl md:text-[12rem] font-heading font-bold gradient-text leading-none">
            404
          </h1>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-600 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-charcoal-400 mb-8 max-w-lg mx-auto">
            The page you're looking for seems to have wandered off. Let's get you back on track!
          </p>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <div className="w-48 h-48 mx-auto bg-gradient-rainbow opacity-20 rounded-full blur-3xl"></div>
          <div className="text-8xl -mt-36">🎈</div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/" className="btn-primary">
            <Home className="w-5 h-5" />
            <span>Go Home</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn-outline"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-charcoal-200"
        >
          <p className="text-sm text-charcoal-400 mb-4">Looking for something specific?</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/about"
              className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-charcoal-600 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              About Us
            </Link>
            <Link
              to="/academics"
              className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-charcoal-600 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Academics
            </Link>
            <Link
              to="/admissions"
              className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-charcoal-600 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Admissions
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-charcoal-600 hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              Contact
            </Link>
          </div>
        </motion.div>

        {/* Search Hint */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <p className="text-xs text-charcoal-400 flex items-center justify-center gap-2">
            <Search className="w-4 h-4" />
            <span>Try using the navigation menu to find what you need</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}