import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: 'aliceblue' }}> 
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            🏠 Home
          </Nav.Link>
          <Nav.Link as={Link} to="/contacto">
            💬 Contacto
          </Nav.Link>
        </Nav>
        <Navbar.Brand className="navbar-brand" style={{ fontWeight: 'bold' }}> 
          Happy Cake 🎂
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Navigation;
