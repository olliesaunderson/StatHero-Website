import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends React.Component {
  render() {
    return (
<div className="footer-padding">
  <Container className="custom-footer">
    <Row>
      <Col className="col-12 col-md-6 phone-align">
        <img
          src="logohero.png"
          alt="StatHero Logo"
          width="105px"
          height="50px"
        />
      </Col>

      <Col className="col-12 col-md-6 icons2 phone-padding2">
        <a href="https://twitter.com/StatHeroUK" className="align-self-center">
          <img className="icons" src="TwitterIcon.png" alt="Twitter Icon" width="40px"
          height="30px" />
        </a>
        <a href="https://www.instagram.com/statherouk/" className="align-self-center">
          <img className="icons" src="InstaIcon.png" alt="Insta Icon" width="30px"
          height="30px" />
        </a>
        <a href="https://www.facebook.com/StatHerouk-101235374931645/" className="align-self-center">
          <img className="icons" src="FacebookIcon.png" alt="Facebook Icon" width="30px"
          height="30px" />
        </a>
      </Col>
    </Row>
  </Container>
  </div>
    )
  }
}

export default Footer;
