import { Navbar, Nav, Container } from "react-bootstrap";

export const NavbarBootstrap = () => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Fight Hub</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#fighters">Fighters</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default NavbarBootstrap