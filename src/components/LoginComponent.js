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

class LoginComponent extends React.Component {
  render() {
    return (
      <Container fluid className="container-flex">
        <Row>
            <Col className="loginsignup-col1 signupimgcol">
              <Link className="logologin" href="#home" to="/home">
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
                <p8 is="custom" className="justify-content-flex-end">Don’t have an account? Sign up free today</p8>
                <Link className="custom-nav-text-login justify-content-flex-end" href="#signup" to="/signup">
                  <Button className="custom-nav-button-login">SIGN UP</Button>
                </Link>
              </Row>
              <Row>
                <h14 is="custom">WELCOME BACK</h14>
              </Row>
              <Row>
                <p7 is="custom">Sign in below and continue where you left off...</p7>
              </Row>
              <Row>
                <Form className="phone-signup-padding">
                  <Form.Group controlId="formGroupEmail" className="login">
                    <Form.Label className="login-label">Email</Form.Label>
                    <Form.Control className="login-form-size" size="lg" type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group controlId="formGroupPassword">
                    <Form.Label className="login-label">Password</Form.Label>
                    <Form.Control className="login-form-size" size="lg" type="password" placeholder="Password" />
                  </Form.Group>
                  <Button className="custom-nav-button-login2 custom-nav-text-login2">LOG IN</Button>
                </Form>
              </Row>
            </Col>
        </Row>
      </Container>
    )
  }
}
export default LoginComponent;
