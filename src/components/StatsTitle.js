import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class StatsTitle extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col className="col-md-12 d-flex justify-content-center">
            <h11 is="custom">MAKE YOUR SELECTION</h11>
          </Col>
        </Row>

        <Row>
          <Col className="col-md-12 d-flex justify-content-center">
            <p1 is="custom">Select a country, league and fixture, then watch the magic unfold...</p1>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default StatsTitle;
