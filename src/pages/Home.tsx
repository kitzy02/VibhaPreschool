import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Feature imports
import AdmissionForm from "../features/Admissions/AdmissionForm";
import CurriculumSection from "../features/Curriculum/CurriculumSection";
import GalleryGrid from "../features/Gallery/GalleryGrid";

// Component imports
import AgeGroupSelector from "../components/AgeGroupSelector";
import TestimonialCarousel from "../components/TestimonialCarousel";
import CountdownTimer from "../components/CountdownTimer";
import FloatingCTA from "../components/FloatingCTA";

const Home = () => {
  return (
    <>
      {/* 1. HERO SECTION - Enhanced with proper colors and animations */}
      <section className="relative overflow-hidden bg-gradient-to-br from-cream-50 via-white to-lavender-50">
        {/* Decorative Background Blobs - Updated colors */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-coral-300 opacity-20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-mint-300 opacity-20 rounded-full blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-sunshine-300 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="container mx-auto px-4 py-20 sm:py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT SIDE - Enhanced with proper responsive text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Heading with proper responsive sizing */}
            <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-charcoal-600">
              Learning Begins with
              <span className="block text-transparent bg-clip-text bg-gradient-sunset mt-2">
                Joy & Confidence
              </span>
            </h1>

            {/* Description with better spacing */}
            <p className="font-body mt-6 text-base sm:text-lg text-charcoal-400 max-w-xl leading-relaxed">
              At Vibha International, we nurture young minds through
              Montessori, Playway, and an International Syllabus —
              building strong foundations from Kindergarten to 5th Class.
            </p>

            {/* CTA Buttons with proper styling */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="btn-primary group"
                aria-label="Apply for admissions"
              >
                <span>Admissions Open</span>
                <span className="text-xl group-hover:scale-110 transition-transform">🎉</span>
              </Link>

              <Link
                to="/academics"
                className="btn-secondary group"
                aria-label="Explore our academic programs"
              >
                <span>Explore Academics</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            
            {/* Read More Link - FIXED COLOR CONTRAST */}
            <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-coral-500 hover:text-coral-600 transition-colors group"
                aria-label="Read more about Vibha International"
              >
                <span>Read More About Vibha</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Enhanced card with gradient border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative gradient ring */}
            <div className="absolute -inset-1 bg-gradient-rainbow opacity-30 rounded-3xl blur-lg"></div>
            
            <div className="relative bg-white rounded-3xl shadow-strong p-8 sm:p-10 border border-charcoal-100">
              <h3 className="font-heading font-semibold text-2xl text-skyBlue-500 mb-6">
                Holistic Learning Environment
              </h3>

              <ul className="space-y-4 font-body text-charcoal-500">
                {[
                  "🎨 Montessori & Playway Method",
                  "🌍 Integrated International Syllabus",
                  "📊 Weekly Assessments",
                  "👥 Excellent Student-Teacher Ratio",
                  "✋ Hands-on Activities",
                  "💻 Online School Option"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-cream-50 transition-colors"
                  >
                    <span className="text-lg">{item.split(' ')[0]}</span>
                    <span>{item.substring(item.indexOf(' ') + 1)}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. AGE GROUP SELECTOR - With entrance animation */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <AgeGroupSelector />
      </motion.section>

      {/* 3. PRESCHOOL VS PRIMARY SECTION - Enhanced with better colors */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-cream-50">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-charcoal-600 mb-4">
              Building Strong Foundations for Every Stage
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal-400 max-w-2xl mx-auto leading-relaxed">
              From joyful early learning experiences to structured primary education,
              we support every child's growth journey.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Early Years Card - FIXED GRADIENT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Gradient border effect - INLINE STYLE FOR WORKING GRADIENT */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity blur"
                style={{
                  background: 'linear-gradient(to right, #26C6B8, #00BFA5)'
                }}
              ></div>
              
              <div className="relative bg-white rounded-3xl shadow-lg p-8 sm:p-10 border-t-8 border-mint-500 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🌱</span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-mint-600">
                    Early Years (Preschool)
                  </h3>
                </div>
                
                <ul className="space-y-3 font-body text-charcoal-500">
                  {[
                    "Montessori Method",
                    "Playway Learning",
                    "Hands-on Activities",
                    "Holistic Development",
                    "Safe & Caring Environment"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-mint-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Primary School Card - FIXED GRADIENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative"
            >
              {/* Gradient border effect - INLINE STYLE FOR WORKING GRADIENT */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity blur"
                style={{
                  background: 'linear-gradient(to right, #42A5F5, #2196F3)'
                }}
              ></div>
              
              <div className="relative bg-white rounded-3xl shadow-lg p-8 sm:p-10 border-t-8 border-skyBlue-500 hover:shadow-2xl transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">📚</span>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-skyBlue-600">
                    Primary School (1st – 5th)
                  </h3>
                </div>
                
                <ul className="space-y-3 font-body text-charcoal-500">
                  {[
                    "Integrated International Syllabus",
                    "Weekly Assessments",
                    "Structured Academic Curriculum",
                    "Excellent Student-Teacher Ratio",
                    "Online School Option"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-skyBlue-500 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SPECIAL FEATURES SECTION - FIXED WITH INLINE GRADIENTS */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-lavender-50 via-sunshine-50 to-coral-50 overflow-hidden">
        {/* Floating Animated Background Shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-coral-300 opacity-30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-sunshine-300 opacity-30 rounded-full blur-3xl animate-float animation-delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-lavender-300 opacity-20 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-charcoal-600 mb-4">
              <span className="inline-block animate-bounce-slow">🌟</span> Our Special Features
            </h2>
            <p className="font-body text-base sm:text-lg text-charcoal-400 mb-12 sm:mb-16 max-w-2xl mx-auto">
              A joyful environment designed to nurture creativity, learning, and growth.
            </p>
          </motion.div>

          {/* Feature Cards Grid - FIXED GRADIENTS */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {/* Card 1: Creative Activities - CORAL */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* FIXED: Inline gradient instead of dynamic class */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity blur"
                style={{
                  background: 'linear-gradient(to right, #FF4081, #F50057)'
                }}
              ></div>
              
              <div className="relative bg-white h-full rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all">
                {/* Emoji Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  🎨
                </div>
                
                {/* Title - FIXED COLOR */}
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-coral-600">
                  Creative Activities
                </h3>
                
                {/* Description */}
                <p className="font-body text-charcoal-500 leading-relaxed">
                  Art, crafts, music, and storytelling to spark imagination and creativity.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Smart Learning - SUNSHINE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* FIXED: Inline gradient */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity blur"
                style={{
                  background: 'linear-gradient(to right, #FFC107, #FF9800)'
                }}
              ></div>
              
              <div className="relative bg-white h-full rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  🧩
                </div>
                
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-sunshine-500">
                  Smart Learning
                </h3>
                
                <p className="font-body text-charcoal-500 leading-relaxed">
                  Play-based learning methods that make education fun, interactive, and effective.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Safe Environment - SKYBLUE */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              {/* FIXED: Inline gradient */}
              <div 
                className="absolute -inset-1 rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity blur"
                style={{
                  background: 'linear-gradient(to right, #42A5F5, #2196F3)'
                }}
              ></div>
              
              <div className="relative bg-white h-full rounded-3xl p-8 sm:p-10 shadow-xl hover:shadow-2xl transition-all">
                <div className="text-6xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  🛡️
                </div>
                
                <h3 className="font-heading font-bold text-xl sm:text-2xl mb-4 text-skyBlue-600">
                  Safe Environment
                </h3>
                
                <p className="font-body text-charcoal-500 leading-relaxed">
                  Secure campus, caring staff, hygienic surroundings, and complete child safety.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CURRICULUM PREVIEW */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <CurriculumSection />
      </motion.section>

      {/* 6. GALLERY PREVIEW */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <GalleryGrid />
      </motion.section>

      {/* 7. TESTIMONIALS */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <TestimonialCarousel />
      </motion.section>

      {/* 8. COUNTDOWN TO ADMISSION DEADLINE */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <CountdownTimer targetDate={new Date('2025-03-31')} />
      </motion.section>

      {/* 9. ADMISSION FORM / CTA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <AdmissionForm />
      </motion.section>

      {/* 10. FLOATING CTA BUTTON */}
      <FloatingCTA />
    </>
  );
};

export default Home;