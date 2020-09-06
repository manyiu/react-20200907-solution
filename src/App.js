import React from "react";
import faker from "./utils/faker";
import Tiles from "./components/tiles";

const videos = faker(50);

const containerStyle = {
  padding: "1rem",
};

function App() {
  return (
    <div style={containerStyle}>
      <Tiles videos={videos} />
    </div>
  );
}

export default App;
