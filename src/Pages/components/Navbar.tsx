import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
  } from "react-router-dom";
import './Navbar.css'

function Navbar () {
    return (
        <Router>    
            <div className = "navbar_cont">
                <a className='logo'>JOSH</a>
                <NavLink to='/' activeClassName='A-home' className = 'navButton'>Home</NavLink>
                <NavLink to='/About' activeClassName='A-about' className = 'navButton'>About</NavLink>
                <NavLink to='/Interests' activeClassName='A-insterests' className = 'navButton'>Interests</NavLink>
                <NavLink to='/work' activeClassName='A-work' className = 'navButton'>work</NavLink>
            </div>
        </Router>
    )
}

export default Navbar

