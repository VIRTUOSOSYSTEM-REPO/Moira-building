import React from "react";
import casementImg from "./assets/casemen.jpg";
import "./Casement.css";
import Card from "react-animated-3d-card";
import CssButton from "../../Components/CssButton";
const Casement = () => {
  return (
    <section id="about">
      <div className="about" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="about-body index">
          <div className="about-img1 index">
            <Card
              className="test"
              style={{
                backgroundImage: `url(${casementImg})`,
                width: "450px",
                height: "300px",
                cursor: "pointer",
              }}
              onClick={() => console.log("Card clicked")}
            />
          </div>
          <div className="about-description">
            <h1 >CASEMENT</h1>
            <p style={{ color: "#000000" }}>
              Get picture-perfect windows that flood your home with beauty of
              the outside world with uPVC casement windows and doors from Moira
              Buildings.
              <br />
            </p>
            <div className="d-flex row">
              {" "}
              <CssButton label="Windows" />
              <CssButton label="Doors" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Casement;
