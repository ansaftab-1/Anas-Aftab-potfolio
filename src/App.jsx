import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <>
      <BackgroundAnimation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}

export default App;
