import React from "react";
import Card from "react-animated-3d-card";
import "./Sliding.css";
import SlidingImg from "./assets/casemen.jpg";
import CssButton from "../../Components/CssButton";

const Sliding = () => {
  return (
    <section id="about">
      <div className="about" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="about-body index">
          <div className="about-description">
            <h1 className="gradient">SLIDING</h1>
            <p style={{ color: "#000000" }}>
              Enjoy uninterrupted view of your surroundings with stunning uPVC
              sliding windows and doors from Moira Buildings.
              <br />
            </p>
            <div className="d-flex row">
              {" "}
              <CssButton label="Windows" />
              <CssButton label="Doors" />
            </div>
          </div>
          <div className="about-img1 card-size">
            <Card
              className="test"
              style={{
                backgroundImage: `url(${SlidingImg})`,
                width: "450px",
                height: "300px",
                cursor: "pointer",
              }}
              onClick={() => console.log("Card clicked")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sliding;
