import HomeComponent from "./HomeComponent";
import Navbar from "./Navbar";
import React from "react";
import Skills from "./Skills";

function Homepage() {
  return (
    <React.StrictMode>
      <div className="lg:h-screen">
        <Navbar />
        <HomeComponent />
      </div>
      <Skills />
    </React.StrictMode>
  );
}

export default Homepage;
