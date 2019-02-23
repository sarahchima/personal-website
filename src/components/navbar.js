import React from 'react'
import { Link } from 'gatsby'

import Logo from '../images/logo.svg'
import './navbar.css'



export default class Navbar extends React.Component {

    state = {
        showMobileMenu: true
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize);
        this.resize();
    }

    resize = () => {
        let hideNavScreenSize = (window.innerWidth <= 767);
        if (hideNavScreenSize) {
            this.setState({
                showMobileMenu: false
            });
        } else {
            this.setState({
                showMobileMenu: true
            })
        }
    }

    handleToggleMenu = () => {
        const mobileMenu = this.state.showMobileMenu;
        this.setState({
            showMobileMenu: !mobileMenu
        })
    }

    render() {
        return(
            <nav className="navbar">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                {this.state.showMobileMenu &&
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" activeClassName="active">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/blog" className="nav-link" activeClassName="active">articles</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link" activeClassName="active">projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
                        </li>
                    </ul>
                }
                <button className="navbar-toggle" onClick={this.handleToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>
            )
        }
}