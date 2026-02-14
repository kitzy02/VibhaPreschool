import heroKids from "../../assets/hero-kids.jpg";
import classroom from "../../assets/classroom.jpg";

export default function GalleryGrid() {
  const images = [heroKids, classroom, heroKids, classroom, heroKids, classroom];

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-600 mb-10">
          Our Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
