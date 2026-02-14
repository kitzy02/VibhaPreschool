import { useEffect } from "react";
import { Link } from "react-router-dom";
import CurriculumSection from "../features/Curriculum/CurriculumSection"
import AOS from "aos";
import "aos/dist/aos.css";

const Academics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative py-24 text-center bg-gradient-to-br from-blue-50 via-white to-pink-50 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-primaryBlue opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primaryOrange opacity-10 rounded-full blur-3xl"></div>

        <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          📚 Academics at Vibha International
        </h1>

        <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 max-w-3xl mx-auto">
          A balanced curriculum combining Montessori principles, Playway methods,
          and structured primary education for strong academic foundations.
        </p>
        <div>
          <h1>Our Academics</h1>
          <CurriculumSection />
        </div>
      </section>

      {/* CURRICULUM OVERVIEW */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 mb-8">
          🌟 Our Curriculum Approach
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Our academic framework blends hands-on experiential learning with
          structured classroom instruction. We focus on cognitive development,
          communication skills, creativity, and character building.
        </p>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          {/* Preschool */}
          <div
            data-aos="fade-right"
            className="bg-white rounded-3xl shadow-xl p-10 border-t-8 border-earlyGreen"
          >
            <h3 className="text-3xl font-bold text-earlyGreen mb-6">
              🧸 Preschool Program
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Montessori Method</li>
              <li>• Playway & Activity-Based Learning</li>
              <li>• Phonics & Early Literacy</li>
              <li>• Basic Numeracy Skills</li>
              <li>• Social & Emotional Development</li>
              <li>• Creative Arts & Music</li>
            </ul>
          </div>

          {/* Primary */}
          <div
            data-aos="fade-left"
            className="bg-white rounded-3xl shadow-xl p-10 border-t-8 border-primaryBlue"
          >
            <h3 className="text-3xl font-bold text-primaryBlue mb-6">
              🎓 Primary School (1st – 5th)
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>• Integrated International Syllabus</li>
              <li>• English, Mathematics, Science</li>
              <li>• Social Studies & General Knowledge</li>
              <li>• Weekly Assessments</li>
              <li>• Project-Based Learning</li>
              <li>• Computer & Digital Skills</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ASSESSMENT SYSTEM */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 data-aos="fade-up" className="text-4xl font-bold text-gray-800 mb-8">
          📝 Assessment & Evaluation
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We conduct continuous assessments through class participation,
          weekly reviews, and activity-based evaluations. Our goal is to track
          progress while encouraging confidence rather than pressure.
        </p>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-primaryBlue to-primaryOrange text-center text-white">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">
          🎯 Ready to Enroll at Vibha?
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className="mb-8 text-lg">
          Give your child a strong academic foundation with joyful learning.
        </p>

        <Link
          to="/contact"
          data-aos="fade-up"
          data-aos-delay="400"
          className="bg-white text-primaryBlue font-bold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition"
        >
          Apply for Admission
        </Link>
      </section>

    </div>
  );
};

export default Academics;
