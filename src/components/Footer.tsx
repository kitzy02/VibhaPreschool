import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-yellow-100 to-purple-100 pt-12 pb-6 mt-16">
      <div className="container mx-auto px-6">
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-pink-500 mb-4">
              Vibha Preschool
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A joyful place where little minds grow, explore, and shine bright.
              We nurture creativity, confidence, and curiosity in every child.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-purple-500 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-pink-500 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-pink-500 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-gray-600 hover:text-pink-500 transition"
                >
                  Academics
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-pink-500 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
              Contact Us
            </h3>
            <p className="text-gray-600 mb-2">📍 Your City, India</p>
            <p className="text-gray-600 mb-2">📞 +91 98765 43210</p>
            <p className="text-gray-600 mb-4">✉️ info@vibhapreschool.com</p>

            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500 transition">
                <Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-500 transition">
                <Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-yellow-500 transition">
                <Mail />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-pink-200 mt-10 pt-6 text-center text-gray-600">
          © {new Date().getFullYear()} Vibha Preschool. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
