import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
import USP1 from '../../src/Images/homeImages/USPHome.png';
import USP2 from '../../src/Images/homeImages/USPGetAhead.png';
import USP3 from '../../src/Images/homeImages/USPCommunity.png';
import USP4 from '../../src/Images/homeImages/USPMultiUse.png';

class Cards extends React.Component {
  render() {
    return (
      <CardDeck className="cardContent">
  <Card className="cardContent">
    <Card.Img  src={USP1} alt="uspimg" />
    <Card.Body>
      <Card.Text className="customCard">
      Over 100 Countries
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="cardContent">
    <Card.Img variant="top" src={USP2} alt="uspimg" />
    <Card.Body>
      <Card.Text className="customCard">
        Stay Ahead
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="cardContent">
    <Card.Img variant="top" src={USP3} alt="uspimg" />
    <Card.Body>
      <Card.Text className="customCard">
       Community Groups
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="cardContent">
    <Card.Img variant="top" src={USP4} alt="uspimg" />
    <Card.Body>
      <Card.Text className="customCard">
  Multi-Use Service
      </Card.Text>
    </Card.Body>

  </Card>
</CardDeck>
    )
  }
}

export default Cards;
