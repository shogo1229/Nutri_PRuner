import React from "react";
import { isMobile } from "react-device-detect";
import PCComponent from "./PC/PCApp";
import MobileComponent from "./SP/MobileApp";

function App() {
  return (
    <div className="App">
      {isMobile ? <MobileComponent /> : <PCComponent />}
    </div>
  );
}

export default App;
