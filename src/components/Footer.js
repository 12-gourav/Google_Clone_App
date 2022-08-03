import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";
import About from "./About";


const Footer = () => {
    return(
        <>

<footer>
    <div className="container">
        <div className="first">
            <p>India</p>
        </div>
        <div className="second">
            <div>
        <NavLink exact to="/about" activeClassName="b" className="a">About</NavLink>
        <NavLink exact to="/about"activeClassName="b">About</NavLink>
        <NavLink exact to="/about" activeClassName="b" >About</NavLink>
        </div>
        <NavLink exact to="/privacy" activeClassName="b">Privacy</NavLink>
        
        </div>
    </div>
</footer>


      <center> Developed by CoolDeveloper</center> 
        
        </>
    )
}

export default Footer;