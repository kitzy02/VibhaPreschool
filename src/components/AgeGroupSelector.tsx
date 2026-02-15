import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Baby, Palette, BookOpen, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Added import
interface AgeGroup {
  id: string;
  name: string;
  ageRange: string;
  color: string;
  bgColor: string;
  solidColor: string; 
  solidBgColor: string; 
  icon: React.ReactNode;
  activities: string[];
}

interface AgeGroupSelectorProps {
  onSelect?: (groupId: string) => void;
  selectedGroup?: string;
  className?: string;
}

const ageGroups: AgeGroup[] = [
  {
    id: "nursery",
    name: "Nursery",
    ageRange: "1.5 - 2.5 years",
    color: "coral-500",
    bgColor: "coral-100",
    solidColor: "#F50057", 
    solidBgColor: "#FFCCE0", 
    icon: <Baby className="w-8 h-8" />,
    activities: ["Sensory Play", "Music & Movement", "Basic Colors"],
  },
  {
    id: "lkg",
    name: "LKG",
    ageRange: "2.5 - 3.5 years",
    color: "sunshine-500",
    bgColor: "sunshine-100",
    solidColor: "#FF9800", 
    solidBgColor: "#FFF3C4", 
    icon: <Palette className="w-8 h-8" />,
    activities: ["Arts & Crafts", "Story Time", "Number Basics"],
  },
  {
    id: "ukg",
    name: "UKG",
    ageRange: "3.5 - 4.5 years",
    color: "skyBlue-500",
    bgColor: "skyBlue-100",
    solidColor: "#2196F3", 
    solidBgColor: "#BBDEFB", 
    icon: <BookOpen className="w-8 h-8" />,
    activities: ["Phonics", "Simple Math", "Creative Writing"],
  },
  {
    id: "primary",
    name: "Grade 1-5",
    ageRange: "4.5+ years",
    color: "lavender-500",
    bgColor: "lavender-100",
    solidColor: "#9C27B0", 
    solidBgColor: "#E1BEE7", 
    icon: <GraduationCap className="w-8 h-8" />,
    activities: ["Full Curriculum", "Projects", "Sports & Arts"],
  },
];

export default function AgeGroupSelector({
  onSelect,
  selectedGroup = "nursery",
  className = "",
}: AgeGroupSelectorProps) {
  const [selected, setSelected] = useState(selectedGroup);
  const navigate = useNavigate(); // Added initialization

  const handleSelect = (groupId: string) => {
    setSelected(groupId);
    if (onSelect) {
      onSelect(groupId);
    }
  };

  const selectedGroupData = ageGroups.find((group) => group.id === selected);

  return (
    <div className={`py-12 ${className}`}>
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-600 mb-4">
          Choose Your Child's Age Group
        </h2>
        <p className="text-charcoal-400 text-lg max-w-2xl mx-auto">
          Select an age group to see our tailored curriculum and activities
        </p>
      </motion.div>

      {/* Age Group Bubbles */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12">
        {ageGroups.map((group, index) => {
          const isSelected = selected === group.id;

          return (
            <motion.button
              key={group.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.1,
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleSelect(group.id)}
              className="relative flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full transition-all duration-300"
              style={{
                backgroundColor: isSelected ? group.solidBgColor : "white",
                border: `4px solid ${isSelected ? group.solidColor : group.solidBgColor}`,
                boxShadow: isSelected
                  ? `0 10px 40px -10px ${group.solidColor}`
                  : undefined,
              }}
            >
              {/* Icon */}
              <motion.div
                style={{ color: group.solidColor }}
                animate={isSelected ? { rotate: [0, -10, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
                className="mb-2"
              >
                {group.icon}
              </motion.div>

              {/* Name */}
              <span
                className="font-heading font-bold text-sm md:text-base"
                style={{
                  color: isSelected ? group.solidColor : "#2C3E50", 
                }}
              >
                {group.name}
              </span>

              {/* Age Range */}
              <span
                className="text-xs mt-1"
                style={{ color: "#455A64" }} 
              >
                {group.ageRange}
              </span>

              {/* Selection Indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                  style={{
                    background: "linear-gradient(135deg, #FF6B9D 0%, #FF9A3C 100%)",
                  }}
                >
                  <span className="text-white text-lg font-bold">✓</span>
                </motion.div>
              )}

              {/* Pulse Effect for Selected */}
              {isSelected && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `2px solid ${group.solidColor}`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                ></motion.div>
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Selected Group Details */}
      <AnimatePresence mode="wait">
        {selectedGroupData && (
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="rounded-3xl p-8 md:p-10 shadow-xl"
              style={{
                background: `linear-gradient(135deg, ${selectedGroupData.solidBgColor} 0%, white 100%)`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-2xl"
                  style={{
                    backgroundColor: selectedGroupData.solidBgColor,
                    color: selectedGroupData.solidColor,
                  }}
                >
                  {selectedGroupData.icon}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal-600">
                    {selectedGroupData.name}
                  </h3>
                  <p className="text-charcoal-400">
                    Ages {selectedGroupData.ageRange}
                  </p>
                </div>
              </div>

              {/* Activities */}
              <div>
                <h4 className="text-lg font-semibold text-charcoal-600 mb-4">
                  Key Activities & Learning Areas
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {selectedGroupData.activities.map((activity, index) => (
                    <motion.div
                      key={activity}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-soft"
                    >
                      <div
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{
                          backgroundColor: selectedGroupData.solidColor,
                        }}
                      ></div>
                      <span className="text-charcoal-600 font-medium text-sm md:text-base">
                        {activity}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={() => navigate("/academics", { 
                    state: { programId: selectedGroupData.id } 
                  })}
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95"
                  style={{
                    background: `linear-gradient(135deg, ${selectedGroupData.solidColor} 0%, #FF4081 100%)`,
                  }}
                >
                  <span>Learn More About {selectedGroupData.name}</span>
                  <span className="text-xl">→</span>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-sunshine-200 rounded-full blur-3xl opacity-50 animate-float pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-coral-200 rounded-full blur-3xl opacity-50 animate-float animation-delay-500 pointer-events-none"></div>
    </div>
  );
}