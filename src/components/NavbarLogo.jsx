import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "./CartWidget";
import logo from "../assets/logoblanco.png";
import { Link } from "react-router-dom";

const Navbarlogo = () => {
  return (
    <Navbar className="navb" collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={process.env.PUBLIC_URL}>
            <img src={logo} style={{ width: "120px" }} alt="logo" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={process.env.PUBLIC_URL}>
              Inicio
            </Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={`/category/${"MLC3697"}`}>
                Audifonos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"MLC157688"}`}>
                Cargadores
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"MLC1672"}`}>
                Hard Drive y SSD
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#contact">Contacto</Nav.Link>
            <Nav.Link as={Link} to={`/cart`}>
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarlogo;
