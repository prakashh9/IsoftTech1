// src/App.tsx
//import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { AboutUs } from "./screens/AboutScreen";
import { ServicesSection } from "./screens/ServicesScreen";
import { Contact } from "./screens/contactScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/Services" element={<ServicesSection />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
    </Router>
  );
}
  
export default App;
