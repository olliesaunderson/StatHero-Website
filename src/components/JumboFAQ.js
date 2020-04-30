import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

class JumboFAQ extends React.Component {
  render() {
    return (
      <Jumbotron fluid className="jumbo-padding">
        <div className="container-fluid">
    <div className="row">
      <div className="col-sm custom-jumbo">
        <h1>FREQUENTLY ASKED QUESTIONS</h1>
        <p>
          Still have unanswered questions? Unsure where to start? Read our most commonly asked questions and their answers below.
        </p>

      </div>
        <div className="col-sm custom-about-jumbo">
        <img
            src={require("/Users/olliesaunderson/Documents/Year 3/Degree Project/prototypesite/src/Images/faqImages/JumboFAQImage.png")}
            alt="FAQ Feat"
            width="630px"
            height="500px"
          />
        </div>
    </div>
  </div>
      </Jumbotron>
    )
  }
}
export default JumboFAQ;
