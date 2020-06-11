import React from "react";

import "./App.css";

//* Import the Js Files
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//* We want specific parts of our app to render when the route changes
//* everything within <Router> has the ability to route

//* if something is "/" route and "/about", and if u call "/about", it calls both
//* switch fixes this issue.

function App() {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About} />
          <Route path="/shop" component={Shop} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1> Home Page</h1>
  </div>
);

export default App;
