import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Faqquestions extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <div className="col-md-12">
              <div className="portfolio-list">
                <ul className="nav list-unstyled" id="portfolio-flters">
                  <li className="filter" data-item="all">All</li>
                  <li className="filter" data-item="branding">Branding</li>
                  <li className="filter" data-item="game">Game Design</li>
                  <li className="filter" data-item="web">Web Design</li>
                  <li className="filter" data-item="social">social media</li>
                </ul>
              </div>
              <div className="portfolio-container">
                <div className="row">
                  <div className="col-lg-4 col-md-6 portfolio-thumbnail">
                    <a className="popup-img">
                      <p>Question</p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-thumbnail">
                    <a className="popup-img">
                      <p>Question</p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-thumbnail">
                    <a className="popup-img">
                      <p>Question</p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-thumbnail">
                    <a className="popup-img">
                      <p>Question</p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-thumbnail">
                    <a className="popup-img">
                      <p>Question</p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-thumbnail">
                    <a className="popup-img">
                      <p>Question</p>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-6 portfolio-thumbnail">
                    <a className="popup-img">
                      <p>Question</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </Container>
    )
  }
}
export default Faqquestions;
