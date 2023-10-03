import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom"
import About from "./pages/About";
import Stuff from "./pages/Stuff";
import Home from "./pages/Home";
import GlackNavigation from "./components/GlackNavigation";
import Container from 'react-bootstrap/esm/Container';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
        <GlackNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/stuff" element={<Stuff />} />
        </Routes>
        
    </>
  );
}

export default App;
