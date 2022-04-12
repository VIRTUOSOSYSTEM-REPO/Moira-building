import React from "react";
import Marquee from "react-fast-marquee";
import images from "./images";
import "./Style.css";

const OurClients = () => {
  const skillBoxStyle = {
    backgroundColor: "#ffff",
    boxShadow: `0px 0px 30px #00000}`,
  };
  return (
    <div>
      <section id="skills">
        <div className="skills" style={{ backgroundColor: "#FFFFFF" }}>
          <div className="skillsHeader">
            <h2 style={{ color: "#000000", margin: "0px" }}>
              Our <span style={{ color: "#00000" }}>Clients</span>
            </h2>
          </div>
          <div className="skillsContainer index">
            <div className="skill--scroll">
              <Marquee
                gradient={false}
                speed={80}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
              >
                {images.map((skill, id) => (
                  <div className="skill--box" key={id} style={skillBoxStyle}>
                    <img src={skill.img} alt={"skill"} />
                    <h3 style={{ color: "#000000" }}>{/* {skill} */}</h3>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
