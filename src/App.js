import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/pages/home";
import About from "./Components/pages/about";
import Contact from "./Components/pages/contact";
import Service from "./Components/pages/service";
import Single from "./Components/pages/Single";

// import logo from './logo.svg';
import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/services">
            <Service />
          </Route>
          <Route exect path="/features/:id">
            <Single />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
