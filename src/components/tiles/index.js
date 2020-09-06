import React from "react";
import Preview from "./preview";
import Details from "./details";

const Tile = ({ data }) => {
  const style = {
    cursor: "pointer",
  };

  return (
    <div style={style}>
      <Preview {...data} />
      <Details {...data} />
    </div>
  );
};

const Tiles = ({ videos }) => {
  const style = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gridGap: "1rem",
  };

  const tiles = videos.map((video) => {
    return <Tile key={`videos-tiles-${video.id}`} data={video} />;
  });

  return <div style={style}>{tiles}</div>;
};

export default Tiles;
