import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  Link
} from 'react-router-dom';

class AboutInfo extends React.Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className="d-flex align-items-center">
            <Col className="col-12 col-md-6 aboutimgpadding1 about1 d-flex justify-content-center">
              <img
                src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/aboutImages/About1.png")}
                alt="About 1"
                width="400"
                height="350"
              />
            </Col>

            <Col className="col-12 col-md-6 aboutpadding">
              <h5 is="custom">WHO WE ARE</h5>
              <p1 is="custom">We are StatHero, a unique football based stats service with the goal of helping football enthusiasts across the globe.</p1>
            </Col>
          </Row>

          <Row className="greybg d-flex align-items-center">
            <Col className="col-12 col-md-6 aboutpadding">
              <h5 is="custom">WHAT WE OFFER</h5>
              <p1 is="custom">We offer a free stats based service with information on leagues all over the world. From red cards to clean sheets, our easy to use service has it all.</p1>
            </Col>

            <Col className="col-12 col-md-6 aboutimgpadding2 about2 d-flex justify-content-center">
              <img
                src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/aboutImages/About2.png")}
                alt="About 2"
                width="350"
                height="400"
              />
            </Col>
          </Row>

          <Row className="d-flex align-items-center">
            <Col className="col-10 col-md-5 d-flex justify-content-center about3 aboutimgpadding3">
              <img
                src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/aboutImages/About3.png")}
                alt="About 3"
                width="400"
                height="350"
              />
            </Col>

            <Col className="col-14 col-md-7 aboutpadding">
              <h5 is="custom">How You Can Use It</h5>
              <p1 is="custom">Simply select your country, league and fixture to view all of the key stats for that game and use them to your advantage. Visit our stats page using the button below to get started!</p1>
              <Link to="/stats">
                <Button className="custom-about-button d-flex justify-content-center" size="md">
                  Go To The Stats
                </Button>
              </Link>
            </Col>
          </Row>

        </Container>
      </div>
    )
  }
}
export default AboutInfo;
