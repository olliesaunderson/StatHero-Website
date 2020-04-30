import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class DropdownLeague extends React.Component {
  render() {
    return (
      <form>
      <Form.Group controlId="exampleForm.ControlSelect2">
        <Form.Label className="label d-flex justify-content-center">League</Form.Label>
          <Form.Control className="form-control" size="lg" as="select">
            <option>Premier League</option>
            <option>Championship</option>
            <option>League One</option>
            <option>League Two</option>
            <option>Ligue 1</option>
            <option>Ligue 2</option>
            <option>Bundesliga</option>
            <option>2. Bundesliga</option>
            <option>3. Liga</option>
            <option>La Liga</option>
            <option>Segunda División</option>
            <option>Segunda División B</option>
            <option>Serie A</option>
            <option>Serie B</option>
          </Form.Control>
        </Form.Group>
        </form>
    )
  }
}
export default DropdownLeague;
