import React from 'react';
import Form from 'react-bootstrap/Form';

class Dropdown extends React.Component {
  render() {
    const options = this.props.optionList.map((item) => <option key={item.value} value={item.value}>{item.label}</option>);

    return (

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label key="flabel" className="label d-flex justify-content-center">{this.props.label}</Form.Label>
          <Form.Control key="fcontrol" className="form-control" size="lg" as="select" onChange= {this.props.changed}>
            <option>Select a {this.props.label}</option>
            {options}
          </Form.Control>
        </Form.Group>

    )
  }
}
export default Dropdown;
