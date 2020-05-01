import React from "react";
import { Route, HashRouter as Router } from 'react-router-dom'

import Home from "./pages/Home"
import about from "./pages/about"
import stats from "./pages/stats"
import contact from "./pages/contact"
import faq from "./pages/faq"
import login from "./pages/Login"
import signup from "./pages/SignUp"
import Test from "./pages/Test"

class App extends React.Component {
  render() {
    return (
        <Router>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={about} />
          <Route path='/stats' component={stats} />
          <Route path='/faq' component={faq} />
          <Route path='/contact' component={contact} />
          <Route path='/signup' component={signup} />
          <Route path='/login' component={login} />
        </Router>
    )
  }
}

export default App;
