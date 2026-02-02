
import React from "react";
import welcomeBanner from "../../../assets/images/welcomebanner.svg";
export default function WelcomeImage() {
  return (
    <img
      src={welcomeBanner}
      alt="img"
      className="img-fluid"
    />
  );
}