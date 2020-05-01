import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

class Fixture extends React.Component {
  render() {
    let fixtureDetail = null;

    if (this.props.fixture !== null) {
     fixtureDetail = (

    <Container fluid>
     <Row>
       <Col className="col-md-12 d-flex justify-content-center">
         <h12 is="custom">{this.props.fixture.homeTeam} vs {this.props.fixture.awayTeam} </h12>
       </Col>
     </Row>
     <Row>
       <Col className="col-md-12 d-flex justify-content-center">
         <p6 is="custom">HOME vs AWAY</p6>
       </Col>
     </Row>

       <Row className="d-flex justify-content-center table-margin">



           <Col xs={2} className="table-padding">
           <h13 is="custom" className="justify-content-center">GOALS</h13>
             <Table responsive >
               <tbody>
               <tr>
                 <th></th>
                 <th>HOME</th>
                 <th>AWAY</th>
               </tr>
               <tr>
                 <th>{'>'}0.5</th>
                 <td>{this.props.fixture.stats.over05.home}</td>
                 <td>{this.props.fixture.stats.over05.away}</td>
               </tr>
               <tr>
                 <th>{'>'}1.5</th>
                 <td>{this.props.fixture.stats.over15.home}</td>
                 <td>{this.props.fixture.stats.over15.away}</td>
               </tr>
               <tr>
                 <th>{'>'}2.5</th>
                 <td>{this.props.fixture.stats.over25.home}</td>
                 <td>{this.props.fixture.stats.over25.away}</td>
               </tr>
               <tr>
                 <th>BTTS</th>
                 <td>{this.props.fixture.stats.btts.home}</td>
                 <td>{this.props.fixture.stats.btts.away}</td>
               </tr>
               <tr>
                 <th>{'<'}0.5</th>
                 <td>{this.props.fixture.stats.under05.home}</td>
                 <td>{this.props.fixture.stats.under05.away}</td>
               </tr>
               </tbody>
             </Table>
           </Col>

           <Col xs={2} className="table-padding">
           <h13 is="custom" className="justify-content-center">CORNERS</h13>
           <Table responsive>
             <tbody>
             <tr>
               <th></th>
               <th>HOME</th>
               <th>AWAY</th>
             </tr>
             <tr>
               <th>{'>'}8</th>
               <td>{this.props.fixture.stats.over8.home}</td>
               <td>{this.props.fixture.stats.over8.away}</td>
             </tr>
             <tr>
               <th>{'>'}9</th>
               <td>{this.props.fixture.stats.over9.home}</td>
               <td>{this.props.fixture.stats.over9.away}</td>
             </tr>
             <tr>
               <th>{'>'}10</th>
               <td>{this.props.fixture.stats.over10.home}</td>
               <td>{this.props.fixture.stats.over10.away}</td>
             </tr>
             <tr>
               <th>FT</th>
               <td>{this.props.fixture.stats.ft.home}</td>
               <td>{this.props.fixture.stats.ft.away}</td>
             </tr>
             <tr>
               <th>{'<'}5</th>
               <td>{this.props.fixture.stats.under5.home}</td>
               <td>{this.props.fixture.stats.under5.away}</td>
             </tr>
             </tbody>
           </Table>
           </Col>

           <Col xs={2} className="table-padding">
           <h13 is="custom" className="justify-content-center">OTHER</h13>
           <Table responsive>
             <tbody>
             <tr>
               <th></th>
               <th>HOME</th>
               <th>AWAY</th>
             </tr>
             <tr>
               <th>TEAM CARDS</th>
               <td>{this.props.fixture.stats.tcards.home}</td>
               <td>{this.props.fixture.stats.tcards.away}</td>
             </tr>
             <tr>
               <th>GAME CARDS</th>
               <td>{this.props.fixture.stats.gcards.home}</td>
               <td>{this.props.fixture.stats.gcards.away}</td>
             </tr>
             <tr>
               <th>WINNING AT HT</th>
               <td>{this.props.fixture.stats.winht.home}</td>
               <td>{this.props.fixture.stats.winht.away}</td>
             </tr>
             <tr>
               <th>WINNING AT FT</th>
               <td>{this.props.fixture.stats.winft.home}</td>
               <td>{this.props.fixture.stats.winft.away}</td>
             </tr>
             <tr>
               <th>RED CARD</th>
               <td>{this.props.fixture.stats.rcard.home}</td>
               <td>{this.props.fixture.stats.rcard.away}</td>
             </tr>
             </tbody>
           </Table>
           </Col>




       </Row>

     </Container>)
}

return fixtureDetail

  }
}
export default Fixture;
