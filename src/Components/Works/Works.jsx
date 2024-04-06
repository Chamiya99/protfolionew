import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png"
import Fiver from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'


const Works = () => {
    const transition = {duration : 3.5, type: 'spring'}
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;
  return (
    <div className="works">
      <div className="awesome">
        <span style={{color:darkmode? 'white': ''}}>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          This is Symple Para for ahuh hshuhs hshuhs hshhs <br /> discribe the
          services
          <br />
          This is Symple Para for ahuh hshuhs hshuhs hshhs
          <br />
          discribe the services
        </span>
          <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/*right  Side*/}
      <div className="w-right">
        <motion.div 
        initial = {{rotate:45}}
        whileInView={{rotate:0}}
        viewport={{margin:'-40px'}}
        transition={transition}
        className="w-minCircle">
            <div className="w-secCircle">
                <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Fiver} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Amazon} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
                <img src={Facebook} alt="" />
            </div>
        </motion.div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
