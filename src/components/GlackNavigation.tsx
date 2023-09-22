import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/raven.png';
import { Link } from "react-router-dom"

function GlackNavigation() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
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
      </Container>
    </Navbar>
  );
}

export default GlackNavigation;