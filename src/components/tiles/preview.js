import React from "react";
import colors from "./colors";

const Preview = ({ thumbnail, length, title }) => {
  const containerStyle = {
    position: "relative",
  };

  const imgStyle = {
    width: "100%",
  };

  const lengthStyle = {
    position: "absolute",
    right: 10,
    bottom: 10,
    padding: 3,
    backgroundColor: colors.black,
    color: colors.primary,
  };

  return (
    <div style={containerStyle}>
      <img src={thumbnail} style={imgStyle} alt={title} />
      <span style={lengthStyle}>{length}</span>
    </div>
  );
};

export default Preview;
