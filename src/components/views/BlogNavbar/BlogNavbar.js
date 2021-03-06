import { NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const BlogNavbar = (props) => {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="mt-4 mb-4 rounded"
      expand="md"
    >
      <Container>
        <Navbar.Brand href="#home">Blog.app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100 d-flex flex-row justify-content-end">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/categories">
              Categories
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
