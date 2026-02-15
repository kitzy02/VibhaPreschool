export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream-50">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="relative mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-rainbow rounded-2xl flex items-center justify-center animate-bounce shadow-2xl">
            <span className="text-4xl">✨</span>
          </div>
          {/* Spinning Ring */}
          <div className="absolute inset-0 -m-2">
            <div className="w-24 h-24 border-4 border-coral-200 border-t-coral-500 rounded-full animate-spin"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <h2 className="text-2xl font-heading font-bold text-charcoal-600 mb-2">
          Loading...
        </h2>
        <p className="text-charcoal-400">
          Preparing your experience
        </p>
        
        {/* Progress Dots */}
        <div className="flex gap-2 justify-center mt-6">
          <div className="w-3 h-3 bg-coral-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
          <div className="w-3 h-3 bg-sunshine-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
          <div className="w-3 h-3 bg-lavender-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
      </div>
    </div>
  );
}