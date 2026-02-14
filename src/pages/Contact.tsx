import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section className="relative py-24 text-center bg-gradient-to-br from-pink-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-60 h-60 bg-primaryOrange opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-primaryBlue opacity-10 rounded-full blur-3xl"></div>

        <h1 data-aos="fade-up" className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          📞 Contact Vibha International
        </h1>

        <p data-aos="fade-up" data-aos-delay="200" className="text-lg text-gray-600 max-w-3xl mx-auto">
          Admissions are open! Get in touch with us to begin your child’s
          joyful learning journey.
        </p>
      </section>

      {/* CONTACT INFO + FORM */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* CONTACT INFO */}
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            📍 Get in Touch
          </h2>

          <div className="space-y-6 text-gray-600">

            <div>
              <h3 className="font-semibold text-primaryBlue text-lg">Address</h3>
              <p>123 Main Street, Your City, State, India</p>
            </div>

            <div>
              <h3 className="font-semibold text-primaryBlue text-lg">Phone</h3>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <h3 className="font-semibold text-primaryBlue text-lg">Email</h3>
              <p>info@vibhainternational.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-primaryBlue text-lg">School Hours</h3>
              <p>Monday – Friday: 8:30 AM – 3:00 PM</p>
            </div>

          </div>
        </div>

        {/* ADMISSION FORM */}
        <div
          data-aos="fade-left"
          className="bg-gray-50 p-10 rounded-3xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            📝 Admission Inquiry
          </h2>

          <form className="space-y-6">

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Parent Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Child Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="Enter child name"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primaryBlue focus:outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Interested Grade
              </label>
              <select
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primaryBlue focus:outline-none"
              >
                <option>Nursery</option>
                <option>LKG</option>
                <option>UKG</option>
                <option>1st Class</option>
                <option>2nd Class</option>
                <option>3rd Class</option>
                <option>4th Class</option>
                <option>5th Class</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primaryOrange text-white font-bold py-4 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Submit Inquiry
            </button>

          </form>
        </div>

      </section>

      {/* MAP SECTION */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196365253416!2d-122.41941518468142!3d37.77492977975978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5f1f1f1f%3A0x1f1f1f1f1f1f1f1f!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1610000000000"
            width="100%"
            height="400"
            className="rounded-3xl shadow-xl border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

    </div>
  );
};

export default Contact;
