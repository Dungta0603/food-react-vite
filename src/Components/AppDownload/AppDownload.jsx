import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
const AppDownload = () => {
  return (
    <div className="app-dowload" id="app-download">
      <p>
        For beter experience Download <br />
        Tomato APP
      </p>
      <div className="app-dowload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDownload;
