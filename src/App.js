import React from "react";
import "./App.css";

import Headline from "./components/Headline";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="section-1">
        <Headline />
      </div>
      <Footer />
    </div>
  );
}

export default App;
