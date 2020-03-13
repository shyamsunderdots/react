import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink} from "react-router-dom";
class Header extends Component {
    state = {}
    render() {
        return ( <React.Fragment > 
            <header id="header" class="alt">
                <div class="logo"><a href="index.html">Hielo <span>by TEMPLATED</span></a></div>
                <a href="#menu">Menu</a>
            </header>
        
           
            <nav id="menu">
                <ul class="links">
                    <li><NavLink to="/">Home</NavLink> </li>
                    <li><NavLink to="/generic">Generic</NavLink></li>
                    <li><NavLink to="/elements">Elements</NavLink></li>
                </ul>
            </nav> </React.Fragment>);
        }
    }

    export default Header;