import React from "react";
import JumboContact from "../components/JumboContact.js";
import CTABonus2 from "../components/CTABonus2.js";
import MailingList from "../components/MailingList.js";
import Social from "../components/Social.js";
import Statement from "../components/Statement.js";
import NavBar from '../components/NavBar.js';
import Footer from "../components/Footer";

class contact extends React.Component {
  render() {
    return (
        <div>
        <NavBar />
        <JumboContact />
        <CTABonus2 />
        <MailingList />
        <Social />
        <Statement />
        <Footer />
        </div>
    )
  }
}

export default contact;
