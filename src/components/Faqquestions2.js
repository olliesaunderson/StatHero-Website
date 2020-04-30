import React from 'react';
import items from '../components/items.js';
import Filters from '../components/filters.js';

export default class Faqquestions2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items : items,
      display: items,
    };

    this.filter = this.filter.bind(this);
    this.renderItems = this.renderItems.bind(this);
  }

  filter(event) {
    let filteredItems = [];

    this.state.items.forEach(function(item) {
      if (item.tags.includes(event.target.dataset.item)) {
        filteredItems.push(item);
      }
    });

    this.setState({display: filteredItems});
  }

  renderItems(items) {
    let html = [];

    items.forEach(function(item) {
      html.push(
        <div key={item.id} className="col-lg-6 col-md-6 faq-padding">
          <h7 is="custom">{item.question}</h7>
          <br></br>
          <br></br>
          <p2 is="custom">{item.answer}</p2>
        </div>
      );
    });

    return html;
  }

  render() {
    return(
        <div id="faq" className="justify-content-center paddsection">
          <div className="container">
            <div className="section-title justify-content-center">
              <h6>FAQs</h6>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12 justify-content-center">

                <Filters filter={this.filter}/>

                <div className="portfolio-container d-flex justify-content-center">
                  <div className="row">
                    {this.renderItems(this.state.display)}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
    );
  }
}
