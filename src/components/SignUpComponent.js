import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import SignUpImg from '../../src/Images/signupImages/SignUpImg.png';
import {
  Link
} from 'react-router-dom';

class SignUpComponent extends React.Component {
  render() {
    return (
      <Container fluid className="container-flex">
        <Row>
            <Col className="loginsignup-col1 signupimgcol">
              <Link className="logologin" href="#home" to="/">
                  <img
                  src="logohero.png"
                  alt="StatHero Logo"
                  width="105px"
                  height="50px" />
              </Link>
              <img
              src={SignUpImg}
              alt="SignUp"
              className="signupimg"/>
            </Col>

            <Col className="loginsignup-col2">
              <Row className="login-row-2">
                <p8 is="custom" className="justify-content-flex-end">Already have an account? Log in here</p8>
                <Link className="custom-nav-text-login justify-content-flex-end" href="#login" to="/login">
                  <Button className="custom-nav-button-login">LOG IN</Button>
                </Link>
              </Row>
              <Row>
                <h14 is="custom">WELCOME TO STAT HERO</h14>
              </Row>
              <Row>
                <p7 is="custom">Sign up below and join our community...</p7>
              </Row>
              <Row>
                <Form className="phone-signup-padding">
                  <Form.Group controlId="formGroupEmail" className="login">
                    <Form.Label className="login-label">Name</Form.Label>
                    <Form.Control className="login-form-size" size="lg" type="email" placeholder="Enter name" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword" className="login">
                    <Form.Label className="login-label">Email</Form.Label>
                    <Form.Control className="login-form-size" size="lg"  placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group>
                  <Form.Row>
                    <Col>
                      <Form.Label className="login-label">Password</Form.Label>
                      <Form.Control className="login-form-size2 password-padding" type="password" size="lg" placeholder="Password" />
                    </Col>
                    <Col>
                      <Form.Label className="login-label">Confirm Password</Form.Label>
                      <Form.Control className="login-form-size2" size="lg" type="password" placeholder="Confirm Password" />
                    </Col>
                  </Form.Row>
                  </Form.Group>
                  <Button className="custom-nav-button-login3 custom-nav-text-login3">SIGN UP</Button>
                </Form>
              </Row>
            </Col>
        </Row>
      </Container>
    )
  }
}
export default SignUpComponent;
