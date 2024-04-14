import React from "react";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel2";
import { krithi } from "./components/Data";
import Footer from "./components/Footer";
import MainContent from './components/router'; // Make sure this import is correct
import AboutUs from './About';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="Site">
      <Router>
        <Navbar />
        <MainContent /> {/* This now includes your Routes and conditional rendering */}
          </Router>
    </div>
  );
}

export default App;
