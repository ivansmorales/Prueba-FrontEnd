import React from "react";
import "./App.css";

import Headline from "./components/Headline";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <div className="section-1">
        <Headline />
      </div>
      <div className="section-2">
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;
