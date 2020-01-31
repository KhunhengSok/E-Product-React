import React from "react";
import { Link} from "react-router-dom"
import { Container, Nav, NavItem, NavLink } from "reactstrap";

class FooterBackend extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Container fluid>
          <Nav>
            <NavItem>
              <NavLink href="#">Creative Tim</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Blog</NavLink>
            </NavItem>
          </Nav>
          <div className="copyright">
            © {new Date().getFullYear()} made with{" "}
            <i className="tim-icons icon-heart-2" /> by{" "}
            <Link
              to="#"
              rel="noopener noreferrer"
            >
              Creative Tim
            </Link>{" "}
            for a better web.
          </div>
        </Container>
      </footer>
    );
  }
}

export default FooterBackend;
