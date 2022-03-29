import React, { useContext } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Axios from "axios";
import { UserContext } from "../../Contexts/UserContext";

export default function NavBar() {
  const data = useContext(UserContext);
  const logout = () => {
    Axios.get("/api/logout", {
      withCredentials: true,
    }).then((res) => {
      window.localStorage.removeItem("shuttr-user");
      if (res.data === "success") {
        return (window.location.href = "/");
      }
    });
  };
  return (
    <nav>
      {!data ? (
        <Link to="/">
          <img
            className="navbar_logo"
            src={process.env.PUBLIC_URL + "/images/shuttrlogo.png"}
            alt="header logo"
          />
        </Link>
      ) : null}

      {data ? (
        <Link to="/profile" className="index-button">
          <li>Profile</li>
        </Link>
      ) : null}

      {!data ? (
        <Link to="/map" className="index-button">
          <li>Map</li>
        </Link>
      ) : null}

      {!data ? (
        <Link to="/discover" className="index-button">
          <li className="discover">Discover</li>
        </Link>
      ) : null}

      <Link to="/inspiration" className="index-button">
        <li>Inspiration</li>
      </Link>

      {data ? (
        <Link to="/imageUpload" className="index-button">
          <li>Upload</li>
        </Link>
      ) : null}

      {data ? (
        <Link to="/" onClick={logout} className="index-button">
          <li className="login">Logout</li>
        </Link>
      ) : null}

      {data ? null : (
        <Link to="/login" className="login-button">
          <li className="login">Log In</li>
        </Link>
      )}
    </nav>
  );
}
