import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <Routes>
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
}

export default App;
