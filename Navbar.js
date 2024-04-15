import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // Only needed for actual navigation
import Image from "./l2.png";
import "./Navbar.css";

class Navbar extends Component {
    state = { clicked: false };

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked });
    }

    scrollToAbout = (e) => {
        e.preventDefault();
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    scrollToContact = (e) => {
        e.preventDefault();
        console.log("Scrolling to contact"); // Check if this logs when clicking the link
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('Contact section not found'); // Check if this logs
        }
    }
    
    render() {
        return (
            <nav>
                <Link to="/">
                    <img className="logo" src={Image} alt="Logo" />
                </Link>
                <div id="navbar">
                    <ul className="navbar-center">
                        <li><Link className="active" to="/"><i className="fas fa-home"></i> <span>Home</span></Link></li>
                        <li><a href="#about" onClick={this.scrollToAbout}><i className="fas fa-user"></i> <span>About</span></a></li>
                        <li><a href="#contact" onClick={this.scrollToContact}><i className="fas fa-envelope"></i><span>Contact Us</span></a></li>
                    </ul>
                    <ul className="navbar-right">
                        <li><Link to="/Signup"><i className="fas fa-user-plus"></i> <span>Signup</span></Link></li>
                        <li><Link to="/Signin"><i className="fas fa-sign-in-alt"></i> <span>Signin</span></Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
