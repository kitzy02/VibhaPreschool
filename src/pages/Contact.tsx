import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";

export default function EnhancedContact() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // SECTION 1: Contact Method Cards (4 cards)
  const contactMethods = [
    {
      icon: <Phone />,
      title: "Call Us",
      primary: "+91 98765 43210",
      secondary: "+91 98765 43211",
      action: "tel:+919876543210",
      color: "green"
    },
    {
      icon: <MessageCircle />,
      title: "WhatsApp",
      primary: "Chat with us",
      secondary: "Quick response",
      action: "https://wa.me/919876543210",
      color: "green"
    },
    {
      icon: <Mail />,
      title: "Email",
      primary: "info@vibha.com",
      secondary: "admissions@vibha.com",
      action: "mailto:info@vibha.com",
      color: "blue"
    },
    {
      icon: <MapPin />,
      title: "Visit Us",
      primary: "123 Main St, City",
      secondary: "Mon-Sat: 8:30 AM - 3:00 PM",
      action: "#map",
      color: "coral"
    }
  ];

  // SECTION 2: Enhanced Contact Form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // API call here
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-lavender-50 to-cream-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold text-charcoal-600 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-charcoal-400 max-w-2xl mx-auto">
            We'd love to hear from you. Reach out using any method below.
          </p>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="max-w-7xl mx-auto px-4 -mt-10 mb-16">
        <div className="grid md:grid-cols-4 gap-6">
          {contactMethods.map((method, i) => (
            <motion.a
              key={i}
              href={method.action}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              <div className={`inline-flex p-4 bg-${method.color}-100 rounded-xl mb-4`}>
                <div className={`text-${method.color}-600`}>{method.icon}</div>
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal-600 mb-2">
                {method.title}
              </h3>
              <p className="text-charcoal-600 font-semibold mb-1">{method.primary}</p>
              <p className="text-sm text-charcoal-400">{method.secondary}</p>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Form and Map Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-heading font-bold text-charcoal-600 mb-6">
              Send a Message
            </h2>
            
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block mb-2 font-semibold text-charcoal-600">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold text-charcoal-600">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      className="input-field"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold text-charcoal-600">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="input-field"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-charcoal-600">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    className="input-field"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold text-charcoal-600">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="input-field resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-charcoal-600 mb-2">
                  Message Sent!
                </h3>
                <p className="text-charcoal-400 mb-6">
                  We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                  }}
                  className="btn-outline"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Map and Info */}
          <div>
            {/* Google Map Embed */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-6">
              <div className="h-64 bg-charcoal-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.363635856523!2d78.47452631487734!3d17.437930388055425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzE2LjYiTiA3OMKwMjgnMzUuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h3 className="text-xl font-heading font-bold text-charcoal-600 mb-4">
                Office Hours
              </h3>
              <div className="space-y-3">
                {[
                  { day: "Monday - Friday", time: "8:30 AM - 3:00 PM" },
                  { day: "Saturday", time: "9:00 AM - 1:00 PM" },
                  { day: "Sunday", time: "Closed" },
                ].map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center p-3 bg-cream-50 rounded-xl">
                    <span className="font-semibold text-charcoal-600">{schedule.day}</span>
                    <span className="text-charcoal-400">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-heading font-bold text-charcoal-600 mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "What are the admission requirements?",
              a: "We accept children based on age criteria and a simple interaction. Documents needed: birth certificate, photos, address proof, and previous school records (if any)."
            },
            {
              q: "What is the fee structure?",
              a: "Fees vary by program. Nursery: ₹40,000/year, LKG/UKG: ₹50,000/year, Primary: ₹60,000/year. This includes tuition, activities, and lunch."
            },
            {
              q: "Do you provide transportation?",
              a: "Yes, we offer safe school bus services covering major areas of the city. Transportation is optional and charged separately."
            },
            {
              q: "What is your safety protocol?",
              a: "We have 24/7 CCTV surveillance, trained security staff, fire safety systems, first aid facilities, and strict visitor management."
            },
          ].map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-lg">
              <h4 className="font-heading font-bold text-lg text-charcoal-600 mb-2">
                {faq.q}
              </h4>
              <p className="text-charcoal-400 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}