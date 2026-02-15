import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the styles for AOS
import AdmissionForm from "../features/Admissions/AdmissionForm"
import CurriculumSection from "../features/Curriculum/CurriculumSection"
import Card from './components/Card';
import AgeGroupSelector from './components/AgeGroupSelector';
import TestimonialCarousel from './components/TestimonialCarousel';
import CountdownTimer from './components/CountdownTimer';
import FloatingCTA from './components/FloatingCTA';
import GalleryGrid from './components/GalleryGrid';
import GalleryLightbox from './components/GalleryLightbox';
import EnhancedAdmissionForm from './components/EnhancedAdmissionForm';


const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-white">
        {/* Decorative Background Blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primaryOrange opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 -right-20 w-80 h-80 bg-earlyGreen opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accentYellow opacity-20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-800">
              Learning Begins with
              <span className="block text-primaryBlue">Joy & Confidence</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              At Vibha International, we nurture young minds through
              Montessori, Playway, and an International Syllabus —
              building strong foundations from Kindergarten to 5th Class.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-primaryOrange text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:scale-105 transition-transform"
              >
                Admissions Open
              </Link>

              <Link
                to="/academics"
                className="bg-primaryBlue text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:scale-105 transition-transform"
              >
                Explore Academics
              </Link>
            </div>
            
            {/* Read More Link placed inside the Left Side motion div for proper indentation */}
            <div className="mt-6">
              <Link
                to="/about"
                className="text-primaryBlue font-semibold hover:underline inline-flex items-center"
              >
                Read More About Vibha →
              </Link>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              <h3 className="text-2xl font-semibold text-primaryBlue">
                Holistic Learning Environment
              </h3>

              <ul className="mt-6 space-y-4 text-gray-600">
                <li>• Montessori & Playway Method</li>
                <li>• Integrated International Syllabus</li>
                <li>• Weekly Assessments</li>
                <li>• Excellent Student-Teacher Ratio</li>
                <li>• Hands-on Activities</li>
                <li>• Online School Option</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. PRESCHOOL VS PRIMARY SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Building Strong Foundations for Every Stage
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From joyful early learning experiences to structured primary education,
              we support every child’s growth journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Early Years */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border-t-8 border-earlyGreen hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-earlyGreen mb-6">
                Early Years (Preschool)
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Montessori Method</li>
                <li>• Playway Learning</li>
                <li>• Hands-on Activities</li>
                <li>• Holistic Development</li>
                <li>• Safe & Caring Environment</li>
              </ul>
            </div>

            {/* Primary School */}
            <div className="bg-white rounded-3xl shadow-lg p-10 border-t-8 border-primaryBlue hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-primaryBlue mb-6">
                Primary School (1st – 5th)
              </h3>
              <ul className="space-y-4 text-gray-600">
                <li>• Integrated International Syllabus</li>
                <li>• Weekly Assessments</li>
                <li>• Structured Academic Curriculum</li>
                <li>• Excellent Student-Teacher Ratio</li>
                <li>• Online School Option</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SPECIAL FEATURES SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 overflow-hidden">
        {/* Floating Animated Background Shapes */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 opacity-30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-yellow-300 opacity-30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-blue-300 opacity-20 rounded-full blur-3xl animate-ping"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 data-aos="fade-up" className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            🌟 Our Special Features
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
            A joyful environment designed to nurture creativity, learning, and growth.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div data-aos="fade-up" data-aos-delay="300" className="group relative p-[3px] rounded-3xl bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-400">
              <div className="bg-white h-full rounded-3xl p-10 shadow-xl transition duration-500 group-hover:shadow-pink-300 group-hover:shadow-2xl group-hover:-translate-y-3">
                <div className="text-6xl mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition duration-500">🎨</div>
                <h3 className="text-2xl font-bold mb-4 text-pink-500">Creative Activities</h3>
                <p className="text-gray-600">Art, crafts, music, and storytelling to spark imagination and creativity.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div data-aos="fade-up" data-aos-delay="500" className="group relative p-[3px] rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400">
              <div className="bg-white h-full rounded-3xl p-10 shadow-xl transition duration-500 group-hover:shadow-yellow-300 group-hover:shadow-2xl group-hover:-translate-y-3">
                <div className="text-6xl mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition duration-500">🧩</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-500">Smart Learning</h3>
                <p className="text-gray-600">Play-based learning methods that make education fun, interactive, and effective.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div data-aos="fade-up" data-aos-delay="700" className="group relative p-[3px] rounded-3xl bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              <div className="bg-white h-full rounded-3xl p-10 shadow-xl transition duration-500 group-hover:shadow-blue-300 group-hover:shadow-2xl group-hover:-translate-y-3">
                <div className="text-6xl mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition duration-500">🛡️</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-500">Safe Environment</h3>
                <p className="text-gray-600">Secure campus, caring staff, hygienic surroundings, and complete child safety.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Curriculum Preview */}
      <CurriculumSection />

      {/* Gallery Preview */}
      <GalleryGrid />

      {/* CTA Admission */}
      <AdmissionForm />
      {/* Hero with Age Selector */}
      <section>
        <AgeGroupSelector />
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-4 gap-6">
        <Card variant="stat" title="Students" stat={{value: "500+", label: "Happy Students"}} />
        <Card variant="stat" title="Teachers" stat={{value: "50+", label: "Expert Educators"}} />
        <Card variant="stat" title="Years" stat={{value: "15+", label: "Of Excellence"}} />
        <Card variant="stat" title="Success" stat={{value: "98%", label: "Pass Rate"}} />
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card variant="featured" title="Montessori Method" ... />
        <Card variant="default" title="Playway Learning" ... />
        <Card variant="default" title="Individual Attention" ... />
      </section>

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* Gallery */}
      <GalleryGrid
        onImageClick={(img) => {
          setLightboxIndex(galleryImages.findIndex(i => i.id === img.id));
          setLightboxOpen(true);
        }}
      />

      {/* Lightbox */}
      <GalleryLightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Countdown */}
      <CountdownTimer targetDate={new Date('2025-03-31')} />

      {/* Admission Form */}
      <EnhancedAdmissionForm />

      {/* Floating CTA */}
      <FloatingCTA />

      {/* 1. Hero Section with Video Background */}
      <HeroSection />
      
      {/* 2. Age Group Selector */}
      <AgeGroupSelector />
      
      {/* 3. Why Choose Us - 6 Cards */}
      <section className="section-py">
        <div className="max-w-7xl mx-auto px-4">
          <h2>Why Choose Vibha?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="featured" title="Experienced Faculty" ... />
            <Card variant="default" title="Modern Facilities" ... />
            <Card variant="default" title="Holistic Development" ... />
            {/* 3 more cards */}
          </div>
        </div>
      </section>
      
      {/* 4. Stats Section with Counter Animation */}
      <section className="bg-gradient-sunset text-white">
        {/* Counter animations */}
      </section>
      
      {/* 5. Programs Overview */}
      <section>
        {/* 4 program cards */}
      </section>
      
      {/* 6. Testimonials Carousel */}
      <TestimonialCarousel />
      
      {/* 7. Gallery Preview */}
      <GalleryGrid images={sampleImages.slice(0, 6)} />
      
      {/* 8. Countdown to Admission */}
      <CountdownTimer targetDate={new Date('2025-03-31')} />
      
      {/* 9. CTA Section */}
      <section className="bg-gradient-to-br from-coral-400 to-lavender-400">
        {/* Large CTA */}
      </section>
      
      {/* 10. Floating CTA */}
      <FloatingCTA />
    </>
  );
};

export default Home;