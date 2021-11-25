import React from "react";
import "./index.css";

export default function Footer() {
  return (
    <footer>
      <img
        class="footer_logo"
        src={process.env.PUBLIC_URL + "/images/shuttrlogo.png"}
        alt="footer logo"
      />
      <p class="copyright">&copy; shuttr 2021</p>
    </footer>
  );
}
