import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {

    const sessionLinks = () => (
        <div className="loginSignupContainer">
        <nav className="loginSignup">

            <h1>Blogger</h1>
            <br />
            <h2 className="homequote">Come for what you love.</h2>
            <h3 className="homequote">Stay for what you discover.</h3>
            <br />
            <Link to="/signup" className="signupbutton">Get Started</Link>
            <br/>
            <Link to="/login">Log In</Link>

        </nav>
        </div>

    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
