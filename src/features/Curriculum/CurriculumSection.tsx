import Card from "../../components/Card";

export default function CurriculumSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-10">
          Our Curriculum
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Card
            title="Play-Based Learning"
            description="Interactive activities that develop creativity, imagination, and teamwork."
          />
          <Card
            title="Language & Literacy"
            description="Building strong communication skills through storytelling and phonics."
          />
          <Card
            title="STEM Foundations"
            description="Hands-on experiments and discovery-based science learning."
          />
        </div>
      </div>
    </section>
  );
}
