import React from "react";

import Cardboard from "./components/Cardboard";
import Interface from "./components/Interface";
import Stats from "./components/Stats";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>High-Low</h1>
      <Stats />
      <Cardboard />
      <Interface />
    </div>
  );
}

export default App;
