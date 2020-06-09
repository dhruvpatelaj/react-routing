import React from "react";

import "./App.css";

//* Import the Js Files
import Nav from "./Nav";
import About from "./About";
import Shop from "./Shop";
import {BrowserRouter as Router,  Switch, Route} from "react-router-dom";

//* We want specific parts of our app to render when the route changes
function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <About></About>
      <Shop></Shop>
    </div>
  );
}

export default App;
