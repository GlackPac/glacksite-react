import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { GiRaven } from 'react-icons/gi';
import { Link } from "react-router-dom"

function GlackNavigation() {

  return (
    <>
      <Navbar bg="dark" style={{borderBottom:'1px solid #5a5a5a'}} sticky="top">
        <Navbar.Brand>
          <GiRaven size='1.5em' color='#4a90e2'/>
          <Link to="/" style={{ textDecoration: 'none', color: '#dee2e6' }}>glacksite</Link>
        </Navbar.Brand>
          <Link className="mx-2" to="/widgets" style={{ textDecoration: 'none', color: '#dee2e6' }}>Widgets</Link>
          <Link className="mx-2" to="/handsonreact" style={{ textDecoration: 'none', color: '#dee2e6' }}>Hands On React</Link>
      </Navbar>
      <div className='pb-3'></div>
    </>
  );
}

export default GlackNavigation;