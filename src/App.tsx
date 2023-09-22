import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Stuff from "./pages/Stuff";
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stuff" element={<Stuff />} />
      </Routes>
    </>
  );
}

export default App;
