import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-br from-pink-50 via-yellow-50 to-blue-50">

      {/* Hero Section */}
      <section className="py-24 text-center relative overflow-hidden">
        <div className="absolute top-10 left-10 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

        <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
          About Vibha International
        </h1>

        <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 max-w-2xl mx-auto">
          A place where little minds grow, explore, and shine brightly.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <img
          data-aos="fade-right"
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="Kids learning"
          className="rounded-3xl shadow-2xl"
        />

        <div data-aos="fade-left">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Our Story
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Vibha International was founded with the vision of providing a nurturing,
            joyful, and academically strong environment for young learners.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We believe every child is unique and deserves encouragement,
            creativity, and confidence from their earliest years.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white text-center px-6">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-12 text-gray-800">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div data-aos="fade-up" className="bg-pink-50 p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-pink-500 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To create a safe, joyful, and inspiring environment where
              children develop curiosity, creativity, and confidence.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="bg-blue-50 p-10 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold text-blue-500 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To shape strong academic foundations while nurturing character,
              confidence, and lifelong love for learning.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primaryOrange to-primaryBlue text-center text-white">
        <h2 data-aos="fade-up" className="text-4xl font-bold mb-6">
          Start Your Child’s Journey With Vibha
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className="mb-8 text-lg">
          Admissions are now open. Give your child the best beginning.
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

export default About;
