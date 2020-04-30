import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import InstaIcon from '../../src/Images/contactImages/InstaIcon.png';
import TwitterIcon from '../../src/Images/contactImages/TwitterIcon.png';
import FacebookIcon from '../../src/Images/contactImages/FacebookIcon.png';
import SocialImage from '../../src/Images/contactImages/SocialImage.png';

class Social extends React.Component {
  render() {
    return (
      <Container fluid className="social-container">
        <Row className="d-flex">
          <Col xs={8} md={5} className="social-display justify-content-center">
            <img
              src={SocialImage}
              alt="Contact Social Image"
              width="450px"
              height="400px"
            />
          </Col>

          <Col xs={10} md={7} className="social-display2 d-flex">
            <h8 is="custom" className="social-content-padding justify-content-center">SOCIAL MEDIA</h8>

            <p4 is="custom" className="social-content-padding2">Follow us across social media for the latest updates and tips on how to get the best out of our service! We post the key stats for each gameweek in an easy to understand format so you take advantage.</p4>
            <div className="social-content-padding3">
              <a href="https://twitter.com/BetHeroUK">
                <img className="icons31" src={TwitterIcon} alt="Twitter Icon" width="70px"
                height="60px" />
              </a>
              <a href="https://twitter.com/BetHeroUK">
                <img className="icons3" src={InstaIcon} alt="Insta Icon" width="60px"
                height="60px" />
              </a>
              <a href="https://twitter.com/BetHeroUK">
                <img className="icons3" src={FacebookIcon} alt="Facebook Icon" width="60px"
                height="60px" />
              </a>
              </div>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default Social;
