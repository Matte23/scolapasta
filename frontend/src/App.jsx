import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SQLInjection from './pages/SQLInjection';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">Vulnerable App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/sqli">SQL Injection</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div style={{ padding: 20 }}>
        <Routes>
          <Route path="/sqli" element={<SQLInjection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;