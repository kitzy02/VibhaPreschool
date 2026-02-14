import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Academics from "./pages/Academics"
import Contact from "./pages/Contact"
import AdmissionForm from "./features/Admissions/AdmissionForm"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<AdmissionForm />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
