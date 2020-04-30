import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'

class Cards extends React.Component {
  render() {
    return (
      <CardDeck className="cardContent">
  <Card className="cardContent">
    <Card.Img  src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/homeImages/USPHome.png")} alt="uspimg" />
    <Card.Body>
      <Card.Text className="customCard">
      Over 100 Countries
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="cardContent">
    <Card.Img variant="top" src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/homeImages/USPGetAhead.png")} alt="uspimg" />
    <Card.Body>
      <Card.Text className="customCard">
        Stay Ahead
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="cardContent">
    <Card.Img variant="top" src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/homeImages/USPCommunity.png")} alt="uspimg" />
    <Card.Body>
      <Card.Text className="customCard">
       Community Groups
      </Card.Text>
    </Card.Body>

  </Card>
  <Card className="cardContent">
    <Card.Img variant="top" src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/homeImages/USPMultiUse.png")} alt="uspimg" />
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
