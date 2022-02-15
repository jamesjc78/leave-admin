import { Navbar, Nav, Container } from "react-bootstrap";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://www.noaya.no/assets/images/common/noaya-logo-menu.png"
            alt=""
            height="30px"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link className="navbar-custom" href="#home">
              Username
            </Nav.Link>
            <Nav.Link className="navbar-custom" href="#link">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
