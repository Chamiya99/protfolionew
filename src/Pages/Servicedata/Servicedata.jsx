import React from "react";
import "./Servicedata.css";
import Backicon from "@iconscout/react-unicons/icons/uil-angle-left";
import {ServicesData} from '../../Data/ServicesData';
import { useParams } from "react-router-dom";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Servicedata = () => {
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;

   const {id} = useParams();
   console.log(id);
   const service = ServicesData.find(service => service.id === id);

   if (!service) {
    return <div>Service not found</div>;
  }
  return (
    <div className="s-data">
      <div className="back">
        <a href="/">
          <button style={{color:darkmode? 'white':''}}>
            <Backicon />
            <span>Back</span>
          </button>
        </a>
      </div>
          <div className="services-data">
            <div className="s-title">
              <span>{service.title}</span>
              <span> Samples</span>
            </div>
            <div className="img-grid">
              <img src={service.img1} alt="" />
              <img src={service.img2} alt="" />
              <img src={service.img3} alt="" />
              <img src={service.img4} alt="" />
            </div>
          </div>  
    </div>
  );
};

export default Servicedata;
