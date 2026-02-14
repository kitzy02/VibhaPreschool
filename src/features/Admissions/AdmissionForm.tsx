// src/features/Admissions/AdmissionForm.tsx
import { useState } from "react";
// Ensure this path is correct based on your folder structure
import Button from "../../components/Button";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Admission form submitted!");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-600">Parent Name</label>
            <input
              type="text"
              name="parentName"
              placeholder="Enter parent name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-600">Child Name</label>
            <input
              type="text"
              name="childName"
              placeholder="Enter child name"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-semibold text-gray-600">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-center mt-8">
            <Button text="Submit Application" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
}