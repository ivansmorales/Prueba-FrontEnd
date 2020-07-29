import React from "react";

import Headline from "./Headline";
import Footer from "./Footer";
import About from "./About";
import WorkWithUs from "./WorkWithUs";
import WhyAtomic from "./WhyAtomic";

function Home() {
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
      <div className="section-4">
        <WhyAtomic />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
