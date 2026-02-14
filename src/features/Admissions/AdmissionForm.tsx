import { useState } from "react";
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
    alert("Admission form submitted!");
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-2xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
          Admission Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="parentName"
            placeholder="Parent Name"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-400"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="childName"
            placeholder="Child Name"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-purple-400"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onChange={handleChange}
            required
          />

          <div className="text-center">
            <Button text="Submit Application" />
          </div>
        </form>
      </div>
    </section>
  );
}
