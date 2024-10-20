import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Component/Home";
import Slider from "./Component/Slider/Slider";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  return (
    <div className="container-fluid h-100" >
      <Toaster position="top-right" />
      {/* <Slider /> */}
      <Navbar />
      <div className="outlet">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
