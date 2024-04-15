import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Carousel from "./Carousel2";
import Signup from "../Sign";
import Signin from "../SignLog";
import AboutUs from '../About';
import Forgot from "../Forgotpassword";
import Main from './Main';
import Contact from './Contact';
function MainContent() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
export default MainContent;
