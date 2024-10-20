import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import whatsapp from "../assets/whatsapp.png";
import twitter from "../assets/twitter.png";

function Footer() {
  return (
    <div className="container-fluid  fixed-bottom" id="footer">
      <div className="row p-2 align-items-center" id="footerContent">
        <div className="col-4" id="footerLogo">
          <img src={facebook} alt="facebook logo" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
          <img src={whatsapp} alt="" />
          <img src={youtube} alt="" />
        </div>
        <div className="col-8" id="footerDes">
          <p>© 2024 Petpooja ,Yum food || All Rights Reserved.</p>
          <p>Privacy PolicyTerms</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
