import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class DropdownFixture extends React.Component {
  render() {
    return (
      <form>
      <Form.Group controlId="exampleForm.ControlSelect3">
        <Form.Label className="label d-flex justify-content-center">Fixture</Form.Label>
        <Form.Control className="form-control" size="lg" as="select">
          <option>Team 1 vs Team 2</option>
          <option>Team 3 vs Team 4</option>
          <option>Team 5 vs Team 6</option>
          <option>Team 7 vs Team 8</option>
          <option>Team 9 vs Team 10</option>
          <option>Team 11 vs Team 12</option>
          <option>Team 13 vs Team 14</option>
          <option>Team 15 vs Team 16</option>
          <option>Team 17 vs Team 18</option>
          <option>Team 19 vs Team 20</option>
        </Form.Control>
      </Form.Group>
      </form>
    )
  }
}
export default DropdownFixture;
