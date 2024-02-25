import React from "react";
import "./index.css";
import Header from "./components/Reusables/Header";
import Homepage from "./components/pages/Homepage";

function App() {
  return (
    <div>
      <Header />
      <p className="heading">
        Let's calculate <b>distance</b> from Google maps
      </p>
      <Homepage />
    </div>
  );
}

export default App;
