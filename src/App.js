import React from "react";
import home from "./pages/home"
import about from "./pages/about"
import stats from "./pages/stats"
import contact from "./pages/contact"
import faq from "./pages/faq"
import login from "./pages/Login"
import signup from "./pages/SignUp"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/home' component={home} />
          <Route exact path='/about' component={about} />
          <Route exact path='/stats' component={stats} />
          <Route exact path='/faq' component={faq} />
          <Route exact path='/contact' component={contact} />
          <Route exact path='/signup' component={signup} />
          <Route exact path='/login' component={login} />
        </div>
      </Router>
    )
  }
}

export default App;
