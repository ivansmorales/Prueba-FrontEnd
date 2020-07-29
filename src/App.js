import React from "react";
import "./App.css";

import Headline from "./components/Headline";
import Footer from "./components/Footer";
import About from "./components/About";
import WorkWithUs from "./components/WorkWithUs";

function App() {
  return (
    <div>
      <div className="section-1">
        <Headline />
      </div>
      <div className="section-2">
        <About />
      </div>
      <div className="section-3">
        <WorkWithUs />
      </div>
    </div>
  );
}

export default App;
