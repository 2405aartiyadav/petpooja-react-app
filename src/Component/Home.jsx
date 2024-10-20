import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Cover from "./Cover.jsx";
import About from "./About.jsx";
function Home() {
  return (
    <div className="container section">
      <Cover/>
      <About/>
    </div>
  );
}

export default Home;
