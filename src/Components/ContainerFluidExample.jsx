import { Container, Row, Col} from 'react-bootstrap'

export default function ContainerFluidExample() {
  return (
    <Container fluid>
      <Row>
        <Col>apple</Col>
        <Col>pear</Col>
        <Col>pear</Col>

      </Row>
      <Row>
        <Col>vegetable</Col>
        <Col>puppy</Col>

      </Row>
    </Container>
  );
}
