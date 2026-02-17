import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllProjects from './components/AllProjects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<AllProjects />} />
    </Routes>
  );
}

export default App;
