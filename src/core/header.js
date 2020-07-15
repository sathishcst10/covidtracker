import React from 'react'
import logo from '../logo.png'


const  Header= ()=>  (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark shadow-sm">
            <a className="navbar-brand" href="\">
                <img src={logo}  alt="Covid19" className="appLogo"/>
                COVID'19 Tracker
            </a>
            {/* <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            </nav>
        </div>
    );

export default Header;