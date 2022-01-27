import { NavLink } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const BlogNavbar = (props) => {
  return (
    <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
      <Container>
        <Navbar.Brand href="#home">Blog.app</Navbar.Brand>
        <Nav>
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BlogNavbar;
