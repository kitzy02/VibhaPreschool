import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Baby, Palette, BookOpen, GraduationCap } from "lucide-react";

interface AgeGroup {
  id: string;
  name: string;
  ageRange: string;
  color: string;
  bgColor: string;
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
    icon: <Baby className="w-8 h-8" />,
    activities: ["Sensory Play", "Music & Movement", "Basic Colors"],
  },
  {
    id: "lkg",
    name: "LKG",
    ageRange: "2.5 - 3.5 years",
    color: "sunshine-500",
    bgColor: "sunshine-100",
    icon: <Palette className="w-8 h-8" />,
    activities: ["Arts & Crafts", "Story Time", "Number Basics"],
  },
  {
    id: "ukg",
    name: "UKG",
    ageRange: "3.5 - 4.5 years",
    color: "skyBlue-500",
    bgColor: "skyBlue-100",
    icon: <BookOpen className="w-8 h-8" />,
    activities: ["Phonics", "Simple Math", "Creative Writing"],
  },
  {
    id: "primary",
    name: "Grade 1-5",
    ageRange: "4.5+ years",
    color: "lavender-500",
    bgColor: "lavender-100",
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
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

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
          const isHovered = hoveredGroup === group.id;

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
              onMouseEnter={() => setHoveredGroup(group.id)}
              onMouseLeave={() => setHoveredGroup(null)}
              className={`
                relative flex flex-col items-center justify-center
                w-32 h-32 md:w-40 md:h-40 rounded-full
                transition-all duration-300
                ${
                  isSelected
                    ? `bg-${group.bgColor} ring-4 ring-${group.color} shadow-xl`
                    : `bg-white border-4 border-${group.bgColor} hover:border-${group.color}`
                }
              `}
              style={{
                backgroundColor: isSelected
                  ? `var(--color-${group.bgColor})`
                  : "white",
                borderColor: isSelected
                  ? `var(--color-${group.color})`
                  : `var(--color-${group.bgColor})`,
                boxShadow: isSelected
                  ? `0 10px 40px -10px var(--color-${group.color})`
                  : undefined,
              }}
            >
              {/* Icon */}
              <motion.div
                className={`text-${group.color} mb-2`}
                animate={isSelected ? { rotate: [0, -10, 10, -10, 0] } : {}}
                transition={{ duration: 0.5 }}
              >
                {group.icon}
              </motion.div>

              {/* Name */}
              <span
                className={`font-heading font-bold text-sm md:text-base ${
                  isSelected ? `text-${group.color}` : "text-charcoal-600"
                }`}
              >
                {group.name}
              </span>

              {/* Age Range */}
              <span className="text-xs text-charcoal-400 mt-1">
                {group.ageRange}
              </span>

              {/* Selection Indicator */}
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-sunset rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-white text-lg">✓</span>
                </motion.div>
              )}

              {/* Pulse Effect for Selected */}
              {isSelected && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    border: `2px solid var(--color-${group.color})`,
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
                background: `linear-gradient(135deg, var(--color-${selectedGroupData.bgColor}) 0%, white 100%)`,
              }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="p-4 rounded-2xl"
                  style={{
                    backgroundColor: `var(--color-${selectedGroupData.bgColor})`,
                    color: `var(--color-${selectedGroupData.color})`,
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
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: `var(--color-${selectedGroupData.color})`,
                        }}
                      ></div>
                      <span className="text-charcoal-600 font-medium">
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
                  className="btn-primary px-8 py-4"
                  style={{
                    background: `linear-gradient(135deg, var(--color-${selectedGroupData.color}) 0%, var(--color-coral-400) 100%)`,
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
      <div className="absolute top-10 left-10 w-20 h-20 bg-sunshine-200 rounded-full blur-3xl opacity-50 animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-coral-200 rounded-full blur-3xl opacity-50 animate-float animation-delay-500"></div>
    </div>
  );
}