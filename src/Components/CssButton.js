import React from "react";

const CssButton = (props) => {
  const { label, link, style } = props;
  return (
    <a href={link} className="btn b-1" style={style}>
      {label ? label : "Button"}
    </a>
  );
};

export default CssButton;
