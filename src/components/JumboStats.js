import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {
  Link
} from 'react-router-dom';
import StatsJumbo from '../../src/Images/statsImages/StatsJumbo.png';


class JumboStats extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbo-padding">
        <div className="container-fluid">
    <div className="row">
      <div className="col-sm custom-jumbo">
        <h1>THE HOLY GRAIL</h1>
        <p>
          The Stats. Access to hundreds of leagues and thousands of teams across the globe. Goals scored, corners taken, cards given... it is all available to you, right here.
        </p>
      </div>
        <div className="col-sm custom-jumbo5">
        <img
            src={StatsJumbo}
            alt="Jumbo Feat Image"
            width="600px"
            height="400px"
          />
        </div>
    </div>
  </div>
      </Jumbotron>
    )
  }
}
export default JumboStats;
