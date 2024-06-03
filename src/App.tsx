import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import B1 from './components/B1';
import B2 from './components/B2';
import B3 from './components/B3';
import B4 from './components/B4';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
        <Route path="/product/:id" element={<B1></B1>}></Route>
        <Route path="/student/:name" element={<B2></B2>}></Route>
        <Route path="/employee" element={<B3></B3>}></Route>
        <Route path="/student" element={<B4></B4>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
