import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter as Router } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Container fluid>
    <Router>
      <App />
    </Router>
  </Container>
);
