import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import LoadingSpinner from "./components/LoadingSpinner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Lazy load all pages for code splitting
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Academics = lazy(() => import("./pages/Academics"));
const Contact = lazy(() => import("./pages/Contact"));
const AdmissionForm = lazy(() => import("./features/Admissions/AdmissionForm"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      {/* Navbar is now INSIDE ErrorBoundary, will get Router context from main.tsx */}
      <Navbar />
      
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Admission Form - Dedicated Route */}
          <Route path="/admissions" element={<AdmissionForm />} />
          <Route path="/admission" element={<AdmissionForm />} />
          
          {/* 404 Not Found - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </ErrorBoundary>
  );
}

export default App;