import React, { useState } from 'react';
import Carousel2 from './Carousel2';
import About from '../About';
import Footer from './Footer';
import { krithi } from './Data';
import Contact from './Contact';
import "./Main.css";

function Main()
{
    return(
        <div>
            <div className="Site-content">
            <Carousel2 images={krithi} />
            </div>
            <About />
            <div className="phone" id="contact">
                <h1>Contact Us</h1>
                <Contact /></div>
            <Footer />
        </div>
    );
}

export default Main;