import React from "react";
import "./Foodter.css";
import { assets } from "../../assets/assets";
const Foodter = () => {
  return (
    <div className="foodter">
      <div className="foodter-content">
        <div className="foodter-content-left">
          <img src={assets.logo} alt="" />
          <p>
            lorogem Ipsum is simply dum text of cpsadcposod,c mcspdmcsdncs
            dcsdmcksmdlca sdcsmdlckmsldc sdcmslkdmcskadcnas cnasklmldkcmasd
            csamdlckms
          </p>
          <div className="foodter-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="foodter-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivary</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="foodter-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>0987565576</li>
            <li>taducdung062002@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="foodter-copyright"> copyright2025@ </p>
    </div>
  );
};

export default Foodter;
