import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";




function Navbar() {
    const [click, setClick] = useState(false); {/* this upades the state to change 
it from whatever it was to whatever you want to change it to */}
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false); 

    const showButton = () => { {} {/* for minimizing window */}
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    window.addEventListener("resize", showButton);


    return (
        <>
            <nav className = "navbar">
                <div className = "navbar_container">
                    <Link to = "/" className = "navbar_logo"> 
                        quotr            <i class="fa-regular fa-comment"></i>  
                        {/* above places quotr in top left corner, and injects 
                        comment icon from the iconwebsite -> by calling the html in
                        index.html, fa-regular is the name of comment from its website */}
                    </Link>
                    <div className = "menu_icon" onClick = {handleClick}>
                        <i className = {click ? "fas fa-times" : "fas fa-bars"}/>{/* 
                        icon in the top right that is hamburger on default, but when clicked, 
                        it  changes to X mark */}
                    </div>

                    {/* ul is unordered BULLET list */}
                    <ul className = {click ? "nav_menu active" : "nav_menu"}> 
                    {/* above is a conditional ":" is elif/else 
                        if click value is true -> navmenuactive
                        else -> navmenu

                    */}
                        {/* li means list item */}
                        <li className = "nav_item"> {/* MENU OPTIONS U CAN CLICK */}
                            <Link to = "/register" className = "nav_links" onClick = {closeMobileMenu}>
                                Register
                            </Link>
                        </li>
                        <li className = "nav_item">
                            <Link to = "/login" className = "nav_links" onClick = {closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                        <li className = "nav_item"> {/* MENU OPTIONS U CAN CLICK */}
                            <Link to = "/submission" className = "nav_links" onClick = {closeMobileMenu}>
                                Quote Submission
                            </Link>
                        </li>
                        <li className = "nav_item"> {/* MENU OPTIONS U CAN CLICK */}
                            <Link to = "/leaderboard" className = "nav_links" onClick = {closeMobileMenu}>
                                Quote Leaderboard
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle = "btn--outline">Register</Button>}

                </div>
            </nav>
        
        </>
    );
}

export default Navbar;