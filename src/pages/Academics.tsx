import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen, Globe, Palette, Calculator, Beaker, Music,
  Users, Heart, Trophy, Target, Lightbulb, Award,
  Clock, CheckCircle, Star, Calendar, Play
} from "lucide-react";

// Color mappings - ADDED: Real hex colors for inline styles
const colorMap = {
  coral: {
    bg: '#FF4081',
    bgLight: '#FFCCE0',
    bgHex: '#F50057'
  },
  sunshine: {
    bg: '#FFC107',
    bgLight: '#FFF3C4',
    bgHex: '#FF9800'
  },
  skyBlue: {
    bg: '#42A5F5',
    bgLight: '#BBDEFB',
    bgHex: '#2196F3'
  },
  lavender: {
    bg: '#AB47BC',
    bgLight: '#E1BEE7',
    bgHex: '#9C27B0'
  }
};

// Program data
const programs = [
  {
    id: "nursery",
    name: "Nursery",
    ageRange: "1.5 - 2.5 years",
    color: "coral",
    icon: <Heart className="w-6 h-6" />,
    overview: "Our Nursery program focuses on building a strong foundation through sensory play, basic colors, shapes, and social interaction. Children develop confidence and curiosity in a safe, nurturing environment.",
    objectives: [
      "Develop gross and fine motor skills",
      "Recognize basic colors and shapes",
      "Build social interaction skills",
      "Foster emotional security",
      "Encourage self-expression",
      "Establish daily routines"
    ],
    subjects: [
      { name: "Sensory Play", description: "Exploring textures, sounds, and colors", icon: <Palette /> },
      { name: "Music & Rhymes", description: "Songs, rhymes, and movement", icon: <Music /> },
      { name: "Story Time", description: "Picture books and storytelling", icon: <BookOpen /> },
      { name: "Art Activities", description: "Finger painting and crafts", icon: <Palette /> },
    ],
    schedule: [
      { time: "8:30 - 9:00", activity: "Morning Assembly", type: "assembly" },
      { time: "9:00 - 9:30", activity: "Free Play", type: "play" },
      { time: "9:30 - 10:15", activity: "Sensory Activities", type: "learning" },
      { time: "10:15 - 10:45", activity: "Snack Time", type: "break" },
      { time: "10:45 - 11:30", activity: "Story & Music", type: "learning" },
      { time: "11:30 - 12:00", activity: "Outdoor Play", type: "play" },
      { time: "12:00 - 12:30", activity: "Lunch", type: "break" },
      { time: "12:30 - 1:30", activity: "Nap Time", type: "rest" },
      { time: "1:30 - 2:30", activity: "Art & Craft", type: "activity" },
      { time: "2:30 - 3:00", activity: "Home Time", type: "closing" },
    ],
  },
  {
    id: "lkg",
    name: "LKG",
    ageRange: "2.5 - 3.5 years",
    color: "sunshine",
    icon: <Palette className="w-6 h-6" />,
    overview: "LKG introduces structured learning through play-based activities. Children begin recognizing letters, numbers, and develop language skills while maintaining a joyful learning environment.",
    objectives: [
      "Recognize letters A-Z",
      "Count numbers 1-20",
      "Develop vocabulary (200+ words)",
      "Build hand-eye coordination",
      "Enhance social skills",
      "Foster independence"
    ],
    subjects: [
      { name: "Language Arts", description: "Letter recognition, phonics basics", icon: <BookOpen /> },
      { name: "Number Sense", description: "Counting, number recognition", icon: <Calculator /> },
      { name: "Creative Arts", description: "Drawing, coloring, crafts", icon: <Palette /> },
      { name: "Physical Education", description: "Games and movement", icon: <Users /> },
    ],
    schedule: [
      { time: "8:30 - 9:00", activity: "Morning Circle", type: "assembly" },
      { time: "9:00 - 10:00", activity: "Language Activities", type: "learning" },
      { time: "10:00 - 10:30", activity: "Snack & Play", type: "break" },
      { time: "10:30 - 11:30", activity: "Number Learning", type: "learning" },
      { time: "11:30 - 12:00", activity: "Music & Movement", type: "activity" },
      { time: "12:00 - 12:30", activity: "Lunch", type: "break" },
      { time: "12:30 - 1:30", activity: "Story Time & Rest", type: "rest" },
      { time: "1:30 - 2:30", activity: "Art & Craft", type: "activity" },
      { time: "2:30 - 3:00", activity: "Outdoor Play", type: "play" },
    ],
  },
  {
    id: "ukg",
    name: "UKG",
    ageRange: "3.5 - 4.5 years",
    color: "skyBlue",
    icon: <BookOpen className="w-6 h-6" />,
    overview: "UKG prepares children for formal schooling with structured academics blended with creative activities. Focus shifts to reading readiness, basic writing, and mathematical concepts.",
    objectives: [
      "Read simple words (CVC words)",
      "Write letters and numbers",
      "Understand basic math (addition/subtraction)",
      "Develop logical thinking",
      "Build communication skills",
      "Prepare for primary school"
    ],
    subjects: [
      { name: "English", description: "Reading, writing, phonics", icon: <BookOpen /> },
      { name: "Mathematics", description: "Numbers, patterns, basic operations", icon: <Calculator /> },
      { name: "Environmental Science", description: "Nature, animals, seasons", icon: <Globe /> },
      { name: "Arts & Crafts", description: "Creative expression", icon: <Palette /> },
    ],
    schedule: [
      { time: "8:30 - 9:00", activity: "Assembly & Prayer", type: "assembly" },
      { time: "9:00 - 10:00", activity: "English Period", type: "learning" },
      { time: "10:00 - 10:30", activity: "Snack Break", type: "break" },
      { time: "10:30 - 11:30", activity: "Mathematics", type: "learning" },
      { time: "11:30 - 12:30", activity: "EVS / Activity", type: "learning" },
      { time: "12:30 - 1:00", activity: "Lunch", type: "break" },
      { time: "1:00 - 2:00", activity: "Arts / Sports", type: "activity" },
      { time: "2:00 - 2:30", activity: "Story Time", type: "activity" },
      { time: "2:30 - 3:00", activity: "Review & Home", type: "closing" },
    ],
  },
  {
    id: "primary",
    name: "Primary (1-5)",
    ageRange: "4.5+ years",
    color: "lavender",
    icon: <Trophy className="w-6 h-6" />,
    overview: "Our Primary section follows a comprehensive curriculum aligned with CBSE standards. Students develop strong academic foundations, critical thinking, and leadership skills.",
    objectives: [
      "Master grade-level curriculum",
      "Develop analytical skills",
      "Build subject expertise",
      "Foster leadership qualities",
      "Encourage project-based learning",
      "Prepare for competitive exams"
    ],
    subjects: [
      { name: "English", description: "Grammar, composition, literature", icon: <BookOpen /> },
      { name: "Mathematics", description: "Algebra, geometry, problem solving", icon: <Calculator /> },
      { name: "Science", description: "Physics, chemistry, biology basics", icon: <Beaker /> },
      { name: "Social Studies", description: "History, geography, civics", icon: <Globe /> },
      { name: "Computer Science", description: "Coding, digital literacy", icon: <Lightbulb /> },
      { name: "Languages", description: "Hindi, Sanskrit (optional)", icon: <BookOpen /> },
    ],
    schedule: [
      { time: "8:30 - 9:00", activity: "Morning Assembly", type: "assembly" },
      { time: "9:00 - 9:45", activity: "Period 1", type: "learning" },
      { time: "9:45 - 10:30", activity: "Period 2", type: "learning" },
      { time: "10:30 - 11:00", activity: "Recess", type: "break" },
      { time: "11:00 - 11:45", activity: "Period 3", type: "learning" },
      { time: "11:45 - 12:30", activity: "Period 4", type: "learning" },
      { time: "12:30 - 1:00", activity: "Lunch", type: "break" },
      { time: "1:00 - 1:45", activity: "Period 5", type: "learning" },
      { time: "1:45 - 2:30", activity: "Activity / Sports", type: "activity" },
      { time: "2:30 - 3:00", activity: "Study Hall", type: "study" },
    ],
  },
];

// Teaching methods
const teachingMethods = [
  {
    name: "Montessori Method",
    description: "Child-led learning with specially designed materials that encourage independence and exploration.",
    gradient: "linear-gradient(135deg, #FF4081 0%, #F06292 100%)",
    icon: <Target className="w-8 h-8" />,
    benefits: [
      "Self-directed learning",
      "Hands-on activities",
      "Multi-age classrooms",
      "Individual pace"
    ]
  },
  {
    name: "Play-Way Technique",
    description: "Learning through play with activities that make education fun and engaging for young minds.",
    gradient: "linear-gradient(135deg, #FFC107 0%, #FF9800 100%)",
    icon: <Heart className="w-8 h-8" />,
    benefits: [
      "Learning through play",
      "Activity-based lessons",
      "Experiential learning",
      "Joyful environment"
    ]
  },
  {
    name: "STEAM Education",
    description: "Integrated approach combining Science, Technology, Engineering, Arts, and Mathematics.",
    gradient: "linear-gradient(135deg, #42A5F5 0%, #26C6B8 100%)",
    icon: <Lightbulb className="w-8 h-8" />,
    benefits: [
      "Critical thinking",
      "Problem-solving skills",
      "Creative innovation",
      "Technology integration"
    ]
  },
  {
    name: "Project-Based Learning",
    description: "Students work on real-world projects that develop collaboration and presentation skills.",
    gradient: "linear-gradient(135deg, #AB47BC 0%, #FF4081 100%)",
    icon: <Users className="w-8 h-8" />,
    benefits: [
      "Real-world problems",
      "Collaborative work",
      "Presentation skills",
      "Research abilities"
    ]
  },
];

// Schedule type color mapping
const scheduleColors = {
  learning: '#42A5F5',
  break: '#FFC107',
  play: '#26C6B8',
  activity: '#FF4081',
  rest: '#AB47BC',
  assembly: '#95A5A6',
  closing: '#607D8B',
  study: '#2196F3'
};

export default function EnhancedAcademics() {
  const [selectedProgram, setSelectedProgram] = useState("nursery");

  const currentProgram = programs.find(p => p.id === selectedProgram) || programs[0];

  return (
    <div className="min-h-screen bg-cream-50">
      
      {/* HERO SECTION */}
      <section className="relative py-24 bg-gradient-to-br from-lavender-50 via-cream-50 to-skyBlue-50 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-coral-200 rounded-full blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-mint-200 rounded-full blur-3xl opacity-20 animate-float animation-delay-500"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-charcoal-600 mb-6">
              Academic Excellence
            </h1>
            <p className="text-xl md:text-2xl text-charcoal-400 max-w-3xl mx-auto leading-relaxed">
              A comprehensive curriculum designed to nurture curious minds and build strong foundations
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { value: "8+", label: "Core Subjects", icon: <BookOpen /> },
              { value: "1:10", label: "Teacher-Student Ratio", icon: <Users /> },
              { value: "98%", label: "Success Rate", icon: <Trophy /> },
              { value: "15+", label: "Years Experience", icon: <Award /> },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div 
                  className="inline-flex p-3 rounded-xl text-white mb-3"
                  style={{ background: 'linear-gradient(135deg, #FF6B9D 0%, #FF9A3C 100%)' }}
                >
                  {stat.icon}
                </div>
                <div className="text-3xl font-heading font-bold text-charcoal-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-charcoal-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAM TABS */}
      <section className="section-py max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold text-charcoal-600 mb-4">
            Our Programs
          </h2>
          <p className="text-charcoal-400 text-lg">
            Choose your child's age group to explore the curriculum
          </p>
        </motion.div>

        {/* Program Selector Tabs - FIXED WITH INLINE STYLES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {programs.map((program) => {
            const isSelected = selectedProgram === program.id;
            const colors = colorMap[program.color as keyof typeof colorMap];
            
            return (
              <button
                key={program.id}
                onClick={() => setSelectedProgram(program.id)}
                className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                style={{
                  backgroundColor: isSelected ? colors.bg : 'white',
                  color: isSelected ? 'white' : '#2C3E50',
                  transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: isSelected 
                    ? `0 10px 30px -10px ${colors.bg}` 
                    : '0 2px 8px rgba(0,0,0,0.1)'
                }}
              >
                <span className="flex items-center gap-2">
                  {program.icon}
                  {program.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* Program Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProgram}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Overview Card */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
              <div className="flex items-start gap-6 mb-6">
                <div 
                  className="p-4 rounded-2xl"
                  style={{ 
                    backgroundColor: colorMap[currentProgram.color as keyof typeof colorMap].bgLight,
                    color: colorMap[currentProgram.color as keyof typeof colorMap].bgHex
                  }}
                >
                  {currentProgram.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-heading font-bold text-charcoal-600 mb-2">
                    {currentProgram.name} Program
                  </h3>
                  <p className="text-charcoal-400 text-lg">
                    Ages {currentProgram.ageRange}
                  </p>
                </div>
              </div>
              
              <p className="text-charcoal-500 text-lg leading-relaxed mb-8">
                {currentProgram.overview}
              </p>

              {/* Learning Objectives */}
              <div>
                <h4 className="text-xl font-heading font-bold text-charcoal-600 mb-4">
                  Learning Objectives
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentProgram.objectives.map((objective, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-cream-50 rounded-xl"
                    >
                      <CheckCircle 
                        className="w-5 h-5 flex-shrink-0 mt-1" 
                        style={{ color: colorMap[currentProgram.color as keyof typeof colorMap].bgHex }}
                      />
                      <span className="text-charcoal-600">{objective}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Subjects Grid */}
            <div className="mb-8">
              <h4 className="text-2xl font-heading font-bold text-charcoal-600 mb-6">
                Subject Areas
              </h4>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentProgram.subjects.map((subject, index) => (
                  <motion.div
                    key={subject.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div 
                      className="inline-flex p-3 rounded-xl mb-4"
                      style={{ 
                        backgroundColor: colorMap[currentProgram.color as keyof typeof colorMap].bgLight,
                        color: colorMap[currentProgram.color as keyof typeof colorMap].bgHex
                      }}
                    >
                      {subject.icon}
                    </div>
                    <h5 className="font-heading font-bold text-lg text-charcoal-600 mb-2">
                      {subject.name}
                    </h5>
                    <p className="text-sm text-charcoal-500">
                      {subject.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Daily Schedule Timeline */}
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
              <h4 className="text-2xl font-heading font-bold text-charcoal-600 mb-8">
                Daily Schedule
              </h4>
              <div className="space-y-4">
                {currentProgram.schedule.map((slot, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-cream-50 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-[140px]">
                      <Clock className="w-5 h-5 text-charcoal-400" />
                      <span className="font-semibold text-charcoal-600">{slot.time}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <span 
                          className="w-3 h-3 rounded-full flex-shrink-0"
                          style={{
                            backgroundColor: scheduleColors[slot.type as keyof typeof scheduleColors] || '#95A5A6'
                          }}
                        ></span>
                        <span className="text-charcoal-600">{slot.activity}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t flex flex-wrap gap-4">
                {[
                  { type: 'learning', color: '#42A5F5', label: 'Learning' },
                  { type: 'break', color: '#FFC107', label: 'Break' },
                  { type: 'play', color: '#26C6B8', label: 'Play' },
                  { type: 'activity', color: '#FF4081', label: 'Activity' },
                  { type: 'rest', color: '#AB47BC', label: 'Rest' },
                ].map((item) => (
                  <div key={item.type} className="flex items-center gap-2">
                    <span 
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></span>
                    <span className="text-sm text-charcoal-400">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* TEACHING METHODOLOGY */}
      <section className="section-py bg-gradient-to-br from-charcoal-600 to-charcoal-700 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-white mb-4">
              Our Teaching Methodology
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Innovative approaches that make learning effective and enjoyable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingMethods.map((method, index) => (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full">
                  {/* Glow effect */}
                  <div 
                    className="absolute inset-0 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"
                    style={{ background: method.gradient }}
                  ></div>
                  
                  {/* Card content */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl h-full">
                    <div 
                      className="inline-flex p-4 rounded-2xl text-white mb-6"
                      style={{ background: method.gradient }}
                    >
                      {method.icon}
                    </div>
                    
                    <h3 className="text-2xl font-heading font-bold text-charcoal-600 mb-4">
                      {method.name}
                    </h3>
                    
                    <p className="text-charcoal-500 leading-relaxed mb-6">
                      {method.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-charcoal-600 mb-3">Key Benefits:</h4>
                      {method.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-sunshine-400 fill-current flex-shrink-0" />
                          <span className="text-sm text-charcoal-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section-py max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-coral-50 via-lavender-50 to-sunshine-50 rounded-3xl p-12 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal-600 mb-6">
            Ready to Enroll Your Child?
          </h2>
          <p className="text-xl text-charcoal-400 mb-8">
            Experience our world-class curriculum firsthand. Schedule a campus tour today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              <Calendar className="w-5 h-5" />
              <span>Schedule a Tour</span>
            </button>
            <button className="btn-outline">
              <Play className="w-5 h-5" />
              <span>Watch Virtual Tour</span>
            </button>
          </div>
        </motion.div>
      </section>

    </div>
  );
}