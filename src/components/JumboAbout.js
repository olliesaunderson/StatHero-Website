import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {
  Link
} from 'react-router-dom';

class JumboAbout extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbo-padding">
        <div className="container-fluid">
    <div className="row">
      <div className="col-sm custom-jumbo">
        <h1>ABOUT US</h1>
        <p>
          Want to know more? You have come to the right place, just scroll down... Already know enough? Click the button below to get started!
        </p>
        <p>
          <Link to="/stats">
            <Button className="custom-jumbo-button" size="md">
              Go To The Stats!
            </Button>
          </Link>
        </p>
      </div>
        <div className="col-sm custom-about-jumbo">
        <img
            src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/aboutImages/AboutJumboImg.png")}
            alt="About Feat Image"
            width="600px"
            height="500px"
          />
        </div>
    </div>
  </div>
      </Jumbotron>
    )
  }
}
export default JumboAbout;
