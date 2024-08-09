import { Container, Nav, Navbar } from 'react-bootstrap';
import {FaShoppingCart, FaHome, FaStore} from 'react-icons/fa';

const NavBar: React.FC = () => {
  return(
    <Navbar data-testid="navBar">
      <Container>
        <Nav>
          <Nav.Link data-testid="homeLink" href="#home"><FaHome /></Nav.Link>
          <Nav.Link data-testid="storeLink" href="#store"><FaStore /></Nav.Link>
          <Nav.Link data-testid="cartLink" href="#cart"><FaShoppingCart /></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;