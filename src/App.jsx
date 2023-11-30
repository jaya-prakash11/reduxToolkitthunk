


import "./App.css";
import Navbar from "./components/Navbar";
import AddTask from "./components/AddTask";
import Container from 'react-bootstrap/Container';
import { Row,Col } from "react-bootstrap";
import TasksList from "./components/TaskList";

function App() {
  return (
    <Container>
      <Navbar />
      <Row className="justify-content-md-center">
        <Col  lg="6">
          <AddTask />
          <TasksList/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
