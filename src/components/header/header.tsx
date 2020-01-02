import "./header.scss";
import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



export class Header extends React.Component{
    

    render() {
        return (
            <div className="header-wrapper flex fdr elv-standard">
                <div className="logo-wrapper">
                    <a href="/" title="Go to Homepage" className="logo-link">
                        <img src="https://cilgingezgin.com/images/logo_round.png" alt="logo" />
                    </a>
                </div>
                <nav className="navbar flex-grow flex aic jcfe">
                    <ul>
                        <li><a role="button" >About</a></li>
                        <li><a role="button" >Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

