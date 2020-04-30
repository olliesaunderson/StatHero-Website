import React from "react";
import Jumbo from "../components/Jumbo.js";
import CTABonus from "../components/CTABonus.js";
import USPDiv from "../components/USPDiv.js";
import Cards from "../components/Cards";
import JumboImage from "../components/JumboImage";
import Footer from "../components/Footer";
import NavBar from '../components/NavBar.js';

class home extends React.Component {
  render() {
    return (
        <div>
          <NavBar />
          <Jumbo />
          <CTABonus />
          <Cards />
          <JumboImage />
          <USPDiv />
          <Footer />
        </div>
    )
  }
}

export default home;
