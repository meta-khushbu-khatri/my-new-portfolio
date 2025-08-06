import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from "framer-motion";

import Navbar from './Component/Navbar';
import Portfolio from './Pages/Portfolio';

const App = () => {
  return (
    <BrowserRouter>
      <MotionConfig> {/* Moved MotionConfig to wrap Routes for global context */}
        <Routes>
          <Route path="/*" element={<Portfolio />} />
          <Route path="/about" element={<Portfolio />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contacts" element={<Portfolio />} />
        </Routes>
      </MotionConfig>
    </BrowserRouter>
  );
};

export default App;