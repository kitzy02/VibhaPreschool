import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ArrowRight, ArrowLeft } from "lucide-react";
import Button from "./Button";

interface FormData {
  // Step 1
  parentName: string;
  phone: string;
  email: string;
  // Step 2
  childName: string;
  childAge: string;
  grade: string;
  // Step 3
  tourDate: string;
  tourTime: string;
  message: string;
}

export default function EnhancedAdmissionForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childAge: "",
    grade: "",
    tourDate: "",
    tourTime: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const totalSteps = 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      {!isSuccess ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-xl p-8"
        >
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`flex items-center justify-center w-10 h-10 rounded-full font-bold ${
                    step <= currentStep
                      ? "bg-gradient-sunset text-white"
                      : "bg-charcoal-100 text-charcoal-400"
                  }`}
                >
                  {step}
                </div>
              ))}
            </div>
            <div className="w-full h-2 bg-charcoal-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-sunset"
                initial={{ width: "0%" }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            </div>
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {/* Step 1 */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <h3 className="text-2xl font-heading font-bold text-charcoal-600 mb-6">
                    Parent Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Parent Name *
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2 */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <h3 className="text-2xl font-heading font-bold text-charcoal-600 mb-6">
                    Child Information
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Child Name *
                      </label>
                      <input
                        type="text"
                        name="childName"
                        value={formData.childName}
                        onChange={handleChange}
                        className="input-field"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Child Age *
                      </label>
                      <input
                        type="number"
                        name="childAge"
                        value={formData.childAge}
                        onChange={handleChange}
                        className="input-field"
                        min="1"
                        max="12"
                        required
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Preferred Grade *
                      </label>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="input-field"
                        required
                      >
                        <option value="">Select Grade</option>
                        <option value="nursery">Nursery</option>
                        <option value="lkg">LKG</option>
                        <option value="ukg">UKG</option>
                        <option value="1st">1st Grade</option>
                        <option value="2nd">2nd Grade</option>
                        <option value="3rd">3rd Grade</option>
                        <option value="4th">4th Grade</option>
                        <option value="5th">5th Grade</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3 */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                >
                  <h3 className="text-2xl font-heading font-bold text-charcoal-600 mb-6">
                    Schedule a Tour
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        name="tourDate"
                        value={formData.tourDate}
                        onChange={handleChange}
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Preferred Time
                      </label>
                      <select
                        name="tourTime"
                        value={formData.tourTime}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select Time</option>
                        <option value="9am">9:00 AM</option>
                        <option value="10am">10:00 AM</option>
                        <option value="11am">11:00 AM</option>
                        <option value="2pm">2:00 PM</option>
                        <option value="3pm">3:00 PM</option>
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 text-sm font-semibold text-charcoal-600">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="input-field resize-none"
                        rows={4}
                        placeholder="Any questions or special requirements?"
                      ></textarea>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <Button
                  text="Previous"
                  variant="outline"
                  icon={<ArrowLeft />}
                  iconPosition="left"
                  onClick={handlePrev}
                  type="button"
                />
              )}

              {currentStep < totalSteps ? (
                <Button
                  text="Next"
                  variant="primary"
                  icon={<ArrowRight />}
                  iconPosition="right"
                  onClick={handleNext}
                  type="button"
                  className="ml-auto"
                />
              ) : (
                <Button
                  text="Submit Application"
                  variant="success"
                  icon={<CheckCircle />}
                  iconPosition="right"
                  loading={isSubmitting}
                  type="submit"
                  className="ml-auto"
                />
              )}
            </div>
          </form>
        </motion.div>
      ) : (
        /* Success State */
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          
          <h2 className="text-3xl font-heading font-bold text-charcoal-600 mb-4">
            Application Submitted!
          </h2>
          <p className="text-charcoal-400 mb-8">
            Thank you for your interest. We'll contact you within 24 hours.
          </p>
          
          <Button
            text="Submit Another Application"
            variant="outline"
            onClick={() => {
              setIsSuccess(false);
              setCurrentStep(1);
              setFormData({
                parentName: "",
                phone: "",
                email: "",
                childName: "",
                childAge: "",
                grade: "",
                tourDate: "",
                tourTime: "",
                message: "",
              });
            }}
          />
        </motion.div>
      )}
    </div>
  );
}