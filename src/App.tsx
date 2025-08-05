// src/App.tsx

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutUs } from "./screens/AboutScreen";
import { ServicesSection } from "./screens/ServicesScreen";
import { Contact } from "./screens/contactScreen";
import ScrollToTop from "./ScrollToTop"; // ✅ Import this

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ This ensures page scrolls to top on every route change */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<ServicesSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

