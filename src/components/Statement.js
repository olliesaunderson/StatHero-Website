import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import InstaIcon from '../../src/Images/contactImages/InstaIcon.png';
import TwitterIcon from '../../src/Images/contactImages/TwitterIcon.png';
import FacebookIcon from '../../src/Images/contactImages/FacebookIcon.png';
import SocialImage from '../../src/Images/contactImages/SocialImage.png';

class Statement extends React.Component {
  render() {
    return (

      <div className="statement-padding text-align-center">
        <h10 is="custom">Help us become the go to site for football stats</h10>
        <p5 is="custom">Post about us on your socials to build our community and spread the word about StatHero.</p5>
      </div>
    )
  }
}
export default Statement;
