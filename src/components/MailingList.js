import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class MailingList extends React.Component {
  render() {
    return (
      <div className="mailing-padding text-align-center">
        <h9 is="custom">SUBSCRIBE TO OUR MAILING LIST</h9>
        <p3 is="custom">Sign up to our mailing list below and receive special offers and tips as well as receiving the latest news and updates for everything StatHero!</p3>
        <Form className="form1">
          <Form.Row controlid="formBasicEmail">
              <Form.Control size="lg" className="form-style"type="text" placeholder="Enter Email"/>
              <Button variant="primary" className="form-button" type="submit">
                Submit
              </Button>
          </Form.Row>
        </Form>
      </div>
    )
  }
}
export default MailingList;
