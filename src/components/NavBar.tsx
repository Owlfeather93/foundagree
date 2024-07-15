import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { GrDocumentLocked } from "react-icons/gr";
import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <Navbar expand="lg" bg="light" className="h-32">
      <Container>
        <Navbar.Brand className="font-bold navbar-logo flex-center" href="/">
          <GrDocumentLocked size={25} className="mr-4" />
          Found<span className="navbar-logo-secondary">Agree</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
