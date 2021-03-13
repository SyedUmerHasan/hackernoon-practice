import React, { Component } from 'react'
import Logo from '../Assets/hn-logo.png'
import '../Stylesheets/Header.css'

export default class Header extends Component {

    
    render() {
        return (
            <div className="header">
                {/* Top Header */}
                <div className="top-header">
                    <nav className="navbar navbar-expand-sm navbar-dark">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} className="img-responsive" alt="Imafdsdfge" width="248" height="40" />
                        </a>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation"></button>
                        <div className="collapse navbar-collapse justify-content-end navbar-row" id="navbarCollapse">
                            <input className="searchBar" type="text" placeholder="Search..." />
                            <a href="/" className="button">Start Writing</a>
                            <a href="/" className="hover-button">Login</a>
                            <button type="button" className="web-color">
                                <i aria-hidden="true" className="fas fa-sun "></i>
                                <i aria-hidden="true" className="fas fa-moon active"></i>
                            </button>
                        </div>
                    </nav>
                </div>


                {/* Story Nav */}
                <div className="story-nav">
                    <ul className="nav justify-content-center">
                        <li className="nav-item"><a className="nav-link" href="/">Read</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Top Stories</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Write</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Listen</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Advertise</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">About</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Tech Companies</a></li>
                        <li className="nav-item"><a className="nav-link" href="/">Careers</a></li>
                    </ul>
                </div>

            </div>

        )
    }
}




