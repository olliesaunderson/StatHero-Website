import React from 'react';

export default class Filters extends React.Component {

    state = {
        activeFilter: 0,
    }

    render() {
        return (
            <div className="faq-list">
                <ul className="nav list-unstyled d-flex justify-content-center" id="portfolio-flters">
                  <li className={`faqnav ${this.state.activeFilter === 1 ? 'active': ''}`}  data-item="all" onClick={(e) => this.filter(e, 1)}>All</li>
                  <li className={`faqnav ${this.state.activeFilter === 2 ? 'active': ''}`}  data-item="general" onClick={(e) => this.filter(e, 2)}>General</li>
                  <li className={`faqnav ${this.state.activeFilter === 3 ? 'active': ''}`}  data-item="stats" onClick={(e) => this.filter(e, 3)}>Stats</li>
                  <li className={`faqnav ${this.state.activeFilter === 4 ? 'active': ''}`}  data-item="account" onClick={(e) => this.filter(e, 4)}>Account</li>
                  <li className={`faqnav ${this.state.activeFilter === 5 ? 'active': ''}`}  data-item="social" onClick={(e) => this.filter(e, 5)}>Social Media</li>
                </ul>
            </div>
        );
    }
    filter = (e, filterId) => {
        this.setState({
            activeFilter: filterId,
        });
        this.props.filter(e);
    }
}
