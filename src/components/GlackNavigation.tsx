import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { GiRaven } from 'react-icons/gi';
import { Link } from "react-router-dom"

function GlackNavigation() {

  return (
    <>
      <Navbar style={{borderBottom:'1px solid #5a5a5a'}}>
        <Navbar.Brand>
          <GiRaven size='1.5em' color='#4a90e2'/>
          <Link to="/" style={{ textDecoration: 'none', color: '#dee2e6' }}>glacksite</Link>
        </Navbar.Brand>
          <Link className="mx-2" to="/about" style={{ textDecoration: 'none', color: '#dee2e6' }}>About</Link>
          <Link className="mx-2" to="/stuff" style={{ textDecoration: 'none', color: '#dee2e6' }}>Stuff</Link>
      </Navbar>
      <div className='pb-3'></div>
    </>
  );
}

export default GlackNavigation;