import React from "react";
import "./Servicedata.css";
import Backicon from "@iconscout/react-unicons/icons/uil-angle-left";
import img1 from "../../img/ServicesDataImg/1.webp";
import img2 from "../../img/ServicesDataImg/2.jpg";
import img3 from "../../img/ServicesDataImg/3.jpg";
import img4 from "../../img/ServicesDataImg/4.jpg";
import { ServicesData } from "../../Data/ServicesData";

const Servicedata = () => {
  return (
    <div className="s-data">
      <div className="back">
        <a href="/">
          <button>
            <Backicon />
            <span>Back</span>
          </button>
        </a>
      </div>
      <div className="services-data">
        <div className="s-title">
          <span>Design</span>
          <span> Samples</span>
        </div>
        <div className="img-grid">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Servicedata;
