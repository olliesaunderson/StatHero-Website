import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import JumboContactImg from '../../src/Images/contactImages/JumboContactImg.png';

class JumboContact extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbo-padding">
        <div className="container-fluid">
    <div className="row">
      <div className="col-sm custom-jumbo">
        <h1>GET IN TOUCH</h1>
        <p>
        We are active across all social media and hoping to build a wordwide StatHero community. Find us on socials or contact us using the information provided below.
        </p>

      </div>
        <div className="col-sm custom-contact-jumbo">
        <img
            src={JumboContactImg}
            alt="FAQ Feat"
            width="600px"
            height="450px"
          />
        </div>
    </div>
  </div>
      </Jumbotron>
    )
  }
}
export default JumboContact;
