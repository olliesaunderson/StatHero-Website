import React from "react";
import JumboAbout from "../components/JumboAbout.js";
import AboutInfo from "../components/AboutInfo.js";
import NavBar from '../components/NavBar.js';
import Footer from "../components/Footer";

class about extends React.Component {
  render() {
    return (
        <div>
          <NavBar />
          <JumboAbout />
          <AboutInfo />
          <Footer />
        </div>
    )
  }
}

export default about;
