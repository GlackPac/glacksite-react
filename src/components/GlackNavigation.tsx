import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { GiRaven } from 'react-icons/gi';
import { LinkContainer} from 'react-router-bootstrap';
import { Link } from "react-router-dom"

function GlackNavigation() {
  return (
    <>
      <Navbar style={{borderBottom:'1px solid #5a5a5a'}}>
          <Navbar.Brand>
              <GiRaven size='1.5em' color='#4a90e2'/>
              <Link to="/" style={{ textDecoration: 'none', color: '#dee2e6' }}>
                glacksite
              </Link>
            </Navbar.Brand>
          <Nav className="me-auto">
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/stuff">
              <Nav.Link>Stuff</Nav.Link>
            </LinkContainer>
          </Nav>
      </Navbar>
      <div className='pb-3'></div>
    </>
  );
}

export default GlackNavigation;