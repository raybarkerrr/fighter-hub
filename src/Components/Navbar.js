import { Navbar, Nav, Container } from "react-bootstrap";

export const NavbarBootstrap = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#fighters">Fighters</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavbarBootstrap