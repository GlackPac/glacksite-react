import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap';
import logo from '../assets/images/raven.svg';
import "./GlackNavigation.css";
import { LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom"

function GlackNavigation() {
  return (
    <>
      <Navbar style={{borderBottom:'1px solid #5a5a5a'}}>
        <LinkContainer to="/about">
          <Navbar.Brand>
              <img
                alt="Caw!"
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              <Link to="/" style={{ textDecoration: 'none', color: '#dee2e6' }}>glacksite</Link>
            </Navbar.Brand>
        </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link as="a">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stuff">
              <Nav.Link as="a">Stuff</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>
      <div className='pb-3'></div>
    </>
  );
}

export default GlackNavigation;