import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return(
        <>
            <div className="header_container">
                <div className="logo">
                    <h2>Logo</h2>
                </div>
                <div className="link">
                    <ul>
                        <li><Link to="/" className="Link">Home</Link></li>
                        <li><Link to="/aboutus" className="Link">AboutUs</Link></li>
                        <li><Link to="contactus" className="Link">ContactUs</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header;