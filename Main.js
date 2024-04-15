import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Carousel from "./components/Carousel2";
import SignIn from "./Sign";
import AboutUs from './About'; // Adjust import paths as necessary
import { krithi } from "./components/Data";

function MainContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="./Sign.js" element={<SignIn />} />
        <Route path="./About.js" element={<AboutUs />} />
      </Routes>
      {/* Conditionally render content based on the route */}
      {location.pathname !== './Sign.js' && (
        <div className="Site-content">
          <Carousel images={krithi} />
          <AboutUs />
          {/* Any other content to conditionally display */}
        </div>
      )}
    </>
  );
}

export default MainContent;
