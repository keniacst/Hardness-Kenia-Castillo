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
      <Container className="containerr">
        <Navbar.Brand>
          <Link to={process.env.PUBLIC_URL}>
            <img src={logo} style={{ width: "10rem" }} alt="logo" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to={process.env.PUBLIC_URL}
              style={{ textAlign: "center" }}
            >
              Inicio
            </Nav.Link>
            <NavDropdown
              title="Categorias"
              id="collasible-nav-dropdown"
              style={{ textAlign: "center" }}
            >
              <NavDropdown.Item as={Link} to={`/category/${"Chokers"}`}>
                Chokers
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"Cadenas"}`}>
                Cadenas
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={`/category/${"Aros"}`}>
                Aros
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
            </NavDropdown>
          </Nav>
          <Nav>
            {/* <Nav.Link href="#contact">Contacto</Nav.Link> */}
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
