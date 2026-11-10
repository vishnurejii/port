import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import BrandPage from './pages/BrandPage';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0C0E] text-white selection:bg-[#FF5A00] selection:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/brand" element={<BrandPage />} />
        <Route path="/brand.html" element={<BrandPage />} />
      </Routes>
    </div>
  );
};

export default App;
