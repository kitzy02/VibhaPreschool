import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Grid3x3, Filter } from "lucide-react";

export type GalleryCategory =
  | "all"
  | "art"
  | "play"
  | "events"
  | "learning"
  | "outdoor"
  | "classroom";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  date?: string;
}

interface GalleryGridProps {
  images?: GalleryImage[];
  onImageClick?: (image: GalleryImage) => void;
  showFilters?: boolean;
  columns?: number;
  className?: string;
}

// Sample images (replace with real data)
const sampleImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1587616211892-e0c56f0e1767",
    alt: "Children painting",
    category: "art",
    title: "Art & Creativity",
    date: "2024-02-15",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    alt: "Outdoor play",
    category: "play",
    title: "Playground Fun",
    date: "2024-02-14",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    alt: "Classroom learning",
    category: "learning",
    title: "Interactive Learning",
    date: "2024-02-13",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
    alt: "Annual day event",
    category: "events",
    title: "Annual Day Celebration",
    date: "2024-02-10",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1544776193-352d25ca82cd",
    alt: "Outdoor activities",
    category: "outdoor",
    title: "Garden Exploration",
    date: "2024-02-08",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    alt: "Classroom activities",
    category: "classroom",
    title: "Circle Time",
    date: "2024-02-05",
  },
];

const categories: { id: GalleryCategory; label: string; icon: string }[] = [
  { id: "all", label: "All Photos", icon: "🖼️" },
  { id: "art", label: "Art & Crafts", icon: "🎨" },
  { id: "play", label: "Playtime", icon: "🎪" },
  { id: "events", label: "Events", icon: "🎉" },
  { id: "learning", label: "Learning", icon: "📚" },
  { id: "outdoor", label: "Outdoor", icon: "🌳" },
  { id: "classroom", label: "Classroom", icon: "🏫" },
];

export default function GalleryGrid({
  images = sampleImages,
  onImageClick,
  showFilters = true,
  columns = 3,
  className = "",
}: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("all");
  const [isGridView, setIsGridView] = useState(true);

  // Filter images by category
  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  // Grid column classes
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  return (
    <div className={`py-16 ${className}`}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-lavender-100 rounded-2xl">
            <Grid3x3 className="w-8 h-8 text-lavender-500" />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-600 mb-4">
          Our Gallery
        </h2>
        <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
          Moments of joy, learning, and growth captured through the lens
        </p>
      </motion.div>

      {/* Filters */}
      {showFilters && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          {/* Mobile Filter Dropdown */}
          <div className="md:hidden mb-4 px-4">
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as GalleryCategory)}
                className="w-full px-4 py-3 rounded-xl border-2 border-charcoal-200 bg-white appearance-none text-charcoal-600 font-semibold focus:border-lavender-400 focus:ring-4 focus:ring-lavender-200 transition-all"
              >
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.icon} {cat.label}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-charcoal-400 pointer-events-none" />
            </div>
          </div>

          {/* Desktop Filter Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-3 px-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  px-6 py-3 rounded-full font-semibold transition-all duration-300
                  ${
                    selectedCategory === category.id
                      ? "bg-gradient-sunset text-white shadow-lg"
                      : "bg-white text-charcoal-600 border-2 border-charcoal-200 hover:border-lavender-400"
                  }
                `}
              >
                <span className="mr-2">{category.icon}</span>
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      )}

      {/* Image Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-6 text-sm text-charcoal-400 font-medium"
      >
        Showing {filteredImages.length} {filteredImages.length === 1 ? "photo" : "photos"}
      </motion.div>

      {/* Gallery Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`grid grid-cols-1 ${gridCols[columns as keyof typeof gridCols]} gap-6 px-4 max-w-7xl mx-auto`}
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onClick={() => onImageClick && onImageClick(image)}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
            >
              {/* Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-charcoal-600 shadow-md">
                    {categories.find((cat) => cat.id === image.category)?.icon}
                    <span className="capitalize">{image.category}</span>
                  </span>
                </div>

                {/* Info Overlay (visible on hover) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-heading font-bold text-xl mb-2">
                    {image.title}
                  </h3>
                  {image.date && (
                    <p className="text-white/80 text-sm">
                      {new Date(image.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </p>
                  )}
                </div>

                {/* View Icon */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="w-24 h-24 mx-auto mb-6 bg-charcoal-100 rounded-full flex items-center justify-center">
            <Grid3x3 className="w-12 h-12 text-charcoal-400" />
          </div>
          <h3 className="text-2xl font-heading font-bold text-charcoal-600 mb-2">
            No photos found
          </h3>
          <p className="text-charcoal-400 mb-6">
            Try selecting a different category
          </p>
          <button
            onClick={() => setSelectedCategory("all")}
            className="btn-primary"
          >
            Show All Photos
          </button>
        </motion.div>
      )}
    </div>
  );
}