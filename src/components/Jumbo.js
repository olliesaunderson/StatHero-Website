import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import JumboFeat from '../../src/Images/homeImages/JumboFeat.png';
import {
  Link
} from 'react-router-dom';

class Jumbo extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbo-padding">
        <div className="container-fluid">
    <div className="row">
      <div className="col-sm custom-jumbo">
        <h1>A GAME CHANGER</h1>
        <p>
          Welcome to the home of StatHero, where football is revolutionised for
          the 21st century.
        </p>
        <p>
          <Link to="/about">
            <Button className="custom-jumbo-button" size="md">
              Discover More
            </Button>
          </Link>
        </p>
      </div>
        <div className="col-sm custom-jumbo2">
        <img
            src={JumboFeat}
            alt="Jumbo Feat"
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
export default Jumbo;
