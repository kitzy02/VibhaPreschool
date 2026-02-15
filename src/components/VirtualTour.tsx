import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Users, BookOpen, Palette, Heart } from "lucide-react";

const tourStops = [
  { id: 1, name: "School Entrance", icon: <Home />, image: "/tour/entrance.jpg" },
  { id: 2, name: "Reception", icon: <Users />, image: "/tour/reception.jpg" },
  { id: 3, name: "Nursery Classroom", icon: <Heart />, image: "/tour/nursery.jpg" },
  { id: 4, name: "LKG Classroom", icon: <Palette />, image: "/tour/lkg.jpg" },
  { id: 5, name: "Library", icon: <BookOpen />, image: "/tour/library.jpg" },
  // Add more stops
];

export default function VirtualTour() {
  const [currentStop, setCurrentStop] = useState(0);

  return (
    <div className="min-h-screen bg-charcoal-900">
      {/* Main Viewer */}
      <div className="relative h-screen">
        <img
          src={tourStops[currentStop].image}
          alt={tourStops[currentStop].name}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Info */}
        <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-6 py-4 text-white">
          <h2 className="text-2xl font-heading font-bold">{tourStops[currentStop].name}</h2>
          <p className="text-sm">{currentStop + 1} of {tourStops.length}</p>
        </div>
      </div>

      {/* Navigation Sidebar */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-4 max-h-[80vh] overflow-y-auto">
        <h3 className="font-heading font-bold text-lg mb-4">Tour Stops</h3>
        <div className="space-y-2">
          {tourStops.map((stop, index) => (
            <button
              key={stop.id}
              onClick={() => setCurrentStop(index)}
              className={`
                w-full text-left p-3 rounded-xl transition-all
                ${currentStop === index 
                  ? 'bg-gradient-sunset text-white' 
                  : 'hover:bg-cream-50'
                }
              `}
            >
              <div className="flex items-center gap-3">
                {stop.icon}
                <span className="font-semibold text-sm">{stop.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}