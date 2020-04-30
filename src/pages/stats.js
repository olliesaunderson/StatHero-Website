import React from "react";
import JumboStats from "../components/JumboStats.js";
import CTABonus3 from "../components/CTABonus3.js";
import StatsTitle from "../components/StatsTitle.js";
import StatsForm from "../components/StatsForm.js";
import Fixture from "../components/Fixture.js";
import NavBar from '../components/NavBar.js';
import Footer from "../components/Footer";

class stats extends React.Component {
  constructor(props) {
      super(props);
        this.state = {
          fixture: null
      };
    }

    fixtureHandler = (fixture) => {
      this.setState({fixture: fixture})
    }

  render() {
    return (
        <div>
          <NavBar />
          <JumboStats/>
          <CTABonus3 />
          <StatsTitle />

          <StatsForm
          changeFixture={this.fixtureHandler}
          />

          <Fixture
          fixture={this.state.fixture}
          />

          <Footer />
        </div>
    )
  }
}

export default stats;
