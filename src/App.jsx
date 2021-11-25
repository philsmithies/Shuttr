import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import SignUp from "./Pages/SignUp";
import Map from "./Pages/Map";
import Login from "./Pages/Login";
import ImageUpload from "./Pages/ImageUpload";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import Discover from "./Pages/Discover";
import Footer from "./components/Footer";
import Inspiration from "./Pages/Inspiration";
import Hashtag from "./Pages/Hashtag";

export default function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/Map" component={Map} />
            <Route path="/ImageUpload" component={ImageUpload} />
            <Route path="/Inspiration" component={Inspiration} />
            <Route path="/Profile/:userId" component={Profile} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Discover" component={Discover} />
            <Route
              path="/Architecture"
              render={() => <Hashtag searchValue={`architecture`} />}
            />
            <Route
              path="/Colourful"
              render={() => <Hashtag searchValue={`colourful`} />}
            />
            <Route
              path="/Greenery"
              render={() => <Hashtag searchValue={`greenery`} />}
            />
            <Route
              path="/Vibes"
              render={() => <Hashtag searchValue={`vibes`} />}
            />
            <Route
              path="/Tourist"
              render={() => <Hashtag searchValue={`tourist`} />}
            />
            <Route
              path="/Rooftop"
              render={() => <Hashtag searchValue={`rooftop`} />}
            />
            <Route
              path="/Sunset"
              render={() => <Hashtag searchValue={`sunset`} />}
            />
            <Route
              path="/Lights"
              render={() => <Hashtag searchValue={`lights`} />}
            />
            <Route
              path="/Location"
              render={() => <Hashtag searchValue={`location`} />}
            />
            <Route component={Error} />
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}
