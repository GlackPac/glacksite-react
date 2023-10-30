import React from 'react';
import { Routes, Route } from "react-router-dom";
import Widgets from "./pages/Widgets";
import Workshop from './pages/Workshop';
import HandsOnReact from "./pages/HandsOnReact";
import Home from "./pages/Home";
import GlackNavigation from "./components/GlackNavigation";
import GlackFooter from './components/GlackFooter';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
      <GlackNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/widgets" element={<Widgets />} />
          <Route path="/handsonreact" element={<HandsOnReact />} />
          <Route path="/workshop" element={<Workshop />} />
        </Routes>
      <GlackFooter/>
    </>
  );
}

export default App;
