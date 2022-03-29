import "./App.css";
import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/Navbar";
import SignUp from "./Pages/SignUp";
import Map from "./Pages/Map";
import Login from "./Pages/Login";
import ImageUpload from "./Pages/ImageUpload";
import Profile from "./Pages/Profile";
import Discover from "./Pages/Discover";
import Inspiration from "./Pages/Inspiration";
import Hashtag from "./Pages/Hashtag";
import { UserContext } from "./Contexts/UserContext";

export default function App() {
  const data = useContext(UserContext);
  console.log("data is", data);
  return (
    <div>
      <div className="App">
        <BrowserRouter basename="/">
          <NavBar />
          <Switch>
            <Route path="/" exact component={Discover} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/map" component={Map} />
            <Route path="/upload" component={ImageUpload} />
            <Route path="/inspiration" component={Inspiration} />
            <Route path="/profile/:userId" component={Profile} />
            <Route path="/profile" component={Profile} />
            <Route
              path="/pages/Architecture"
              render={() => <Hashtag searchValue={`architecture`} />}
            />
            <Route
              path="/pages/Colourful"
              render={() => <Hashtag searchValue={`colourful`} />}
            />
            <Route
              path="/pages/Greenery"
              render={() => <Hashtag searchValue={`greenery`} />}
            />
            <Route
              path="/Vibes"
              render={() => <Hashtag searchValue={`vibes`} />}
            />
            <Route
              path="/pages/Tourist"
              render={() => <Hashtag searchValue={`tourist`} />}
            />
            <Route
              path="/pages/Rooftop"
              render={() => <Hashtag searchValue={`rooftop`} />}
            />
            <Route
              path="/pages/Sunset"
              render={() => <Hashtag searchValue={`sunset`} />}
            />
            <Route
              path="/pages/Lights"
              render={() => <Hashtag searchValue={`lights`} />}
            />
            <Route
              path="/pages/Location"
              render={() => <Hashtag searchValue={`location`} />}
            />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}
