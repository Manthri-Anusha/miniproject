import "./NavbarStyle.css";
import React, { Component } from 'react'; // Ensure React is imported
import Image from "./shareme.png"
import chats from "./chat.jpg"
class Navbar extends Component {
    state = { clicked: false };

    // Define handleClick method correctly outside of the render method
    handleClick = () => {
        this.setState({ clicked:!this.state.clicked });
    }

    render() {
        return (
            <>
                <nav>
                    <a href="index.html">
                        <img class="logo" src={Image} alt="Logo"></img>
                    </a>
                    <div>
                        <ul id="navbar"className={this.state.clicked? "#navbar active" : "#navbar"}>
                            <li><a className="active" href="index.html">Home</a></li>
                            <li><a href="index.html">Login</a></li>
                            <li><a href="index.html">Signup</a></li>
                            <li><a href="index.html">Settings</a></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
                <div className="container">
      <div className="image">
        <img src={chats} height="450px"width="100%" alt="Landing Page" />
      </div>
      <div className="content">
        <h2>Welcome</h2>
        <span className="vyshu">"Connect, collaborate, and communicate with ease on our platform. Whether you're working on a project, sharing ideas, or simply staying in touch, our tools make it simple. Connect with colleagues and friends, collaborate on documents or projects in real-time, and communicate effectively through messaging.</span>
      </div>
    </div>
    <footer className="footer">
        © 2024 sharing platform. All rights reserved.
      </footer>
            </>
        );
    }
}

export default Navbar;
