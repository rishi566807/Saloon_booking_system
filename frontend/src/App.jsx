import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import { Toaster } from 'react-hot-toast'; // 1. Added Toaster import
import Home from './Pages/Home';
import Success from './Pages/success';    // 2. Capitalized Success import
import Admin from './Pages/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/success" element={<Success />} /> {/* 3. Capitalized <Success /> component */}
        <Route path="/admin_page" element={ <Admin/> } />
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;