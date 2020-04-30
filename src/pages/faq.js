import React from "react";
import JumboFAQ from "../components/JumboFAQ.js";
import Faqquestions2 from "../components/Faqquestions2.js";
import NavBar from '../components/NavBar.js';
import Footer from "../components/Footer";

class faq extends React.Component {
  render() {
    return (
        <div>
          <NavBar />
          <JumboFAQ />
          <Faqquestions2 />
          <Footer />
        </div>
    )
  }
}

export default faq;
