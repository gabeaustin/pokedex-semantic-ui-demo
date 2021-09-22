import React from "react";
import PokedexHeader from "./components/PokedexHeader";
import "./App.css";

function App() {
  return (
    <div className="App">
      <PokedexHeader author={"@austin.gabe"} name={"Gabe"} />
    </div>
  );
}

export default App;
