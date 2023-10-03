import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/raven.svg';
import { Link } from "react-router-dom"

function GlackNavigation() {
  return (
    <>
      <Navbar style={{borderBottom:'1px solid #5a5a5a'}}>
          <Navbar.Brand>
            <img
              alt="Caw!"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            glacksite
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link>
            <Link to="/stuff">Stuff</Link>
            </Nav.Link>
          </Nav>
      </Navbar>
      <div className='pb-3'></div>
    </>
  );
}

export default GlackNavigation;