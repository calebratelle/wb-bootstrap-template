import { Container, Row, Col} from 'react-bootstrap'

export default function ColumnSizingExample() {
  return (
    <Container fluid>
      <Row>
        <Col xs='9'>Colulmn width 9</Col>
        <Col xs = '3'>Column Width 3</Col>
        <Col>pear</Col>

      </Row>
      <Row>
        <Col>Column</Col>
        <Col xs='6'>Colomn width 6</Col>
        <Col>Column</Col>

      </Row>
    </Container>
  );
}
