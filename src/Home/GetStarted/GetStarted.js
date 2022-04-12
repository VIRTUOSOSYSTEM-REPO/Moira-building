import React from "react";
import  "./style.css";
import candlebg from "./assets/candlebg.svg";
import dash from "./assets/dash.svg";
import eth from "./assets/eth.svg";
import logo from "./assets/logo.svg";
import miota from "./assets/miota.svg";
import monitor from "./assets/monitor.svg";

const GetStarted = () => {
  return (
    <div id="home-container">
      <div id="inner">
        <img src={logo} alt="Crypts logo" id="logo" />
        <h1>Crypto + Chat = Crypts</h1>
        <p className="subtitle">On providing quality doors, karthik Doors expanded its services to Windows. We are the only authorised profile partners for VEKA GERMANY and we are also proud to be associated as technology partner for VEKA GERMANY a global leader in the UPVC industry.</p>
        <a href="#" className="cta cta--white ">
          Get Started
        </a>
      </div>
      <div id="illustration">
        <img
          src={dash}
          alt="dash img"
          id="dash"
          className="crypto-icons"
        />
        <img
          src={miota}
          alt="iota img"
          id="iota"
          className="crypto-icons"
        />
        <img src={eth} alt="eth img" id="eth" className="crypto-icons" />
        <img src={monitor} alt="monitor img" id="monitor" />
      </div>
    </div>
  );
};

export default GetStarted;
