import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';

import NavBar from './components/NavBar';


const App: React.FC = () => (
  <Container>
    <Row>
      <NavBar />
    </Row>

    <Row>
      <Col>
        <h1 data-testid="pageHeader">Welcome to my store!</h1>
      </Col>
    </Row>
  </Container>
);

export default App;