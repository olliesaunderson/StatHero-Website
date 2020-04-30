import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {
  Link
} from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="md" className="custom-nav-bg fixed-top">
        <Link className="navbar-brand" href="#home" to="/home">

            <img className="custom-nav-logo"
            src="logohero.png"
            alt="StatHero Logo"
            width="105px"
            height="50px" />

        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navbar-dark custom-button align-items-center" />

        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end navbar-align">
          <Nav className="d-flex align-items-center">
            <Link className="custom-nav-text" href="#about" to="/about">
            ABOUT
            </Link>

            <Link className="custom-nav-text" href="#stats" to="/stats">
            STATS
            </Link>

            <Link className="custom-nav-text" href="#faqs" to="/faq">
            FAQS
            </Link>

            <Link className="custom-nav-text" href="#contact" to="/contact">
            CONTACT
            </Link>

            <Link className="custom-nav-text" href="#signup" to="/signup">
              <Button className="custom-nav-button">SIGN UP</Button>
            </Link>

            <Link className="custom-nav-text" href="#login" to="/login">
            LOGIN
            </Link>

          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }
}
export default NavBar;
