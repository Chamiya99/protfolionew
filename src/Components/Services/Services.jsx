import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import CV from './Chamika_Heshan_Resume.pdf'
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

const Services = () => {
    const transition = {duration : 2, type: 'spring'}
    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/*Left side 51.34*/}
        <div className="awesome">
        <span style={{color:darkmode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span>You can see my services.Also refer my Resume down below.<br/> discribe the services</span>
        <a href={CV} download>
        <button className="button s-button">Download CV</button>  
        </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
        {/*right side*/}
        <div className="cards">
              <motion.div 
              whileInView={{left:'44rem'}}
              initial={{left:'55rem'}}
              transition={transition}
              style={{left :'44rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma ,Sketch ,Photoshop, Lightroom, Adobe xd "}
                id = {'SId1'}
                />
              </motion.div>
              <motion.div
              whileInView={{top :"12rem" , left: "26rem"}}
              initial={{left:'15rem'}}
              transition={transition}
              style={{top :"12rem" , left: "26rem"}}>
                <Card
                emoji = {Glasses}
                heading = {'Devoloper'}
                detail = {"Html, CSS, JavaScript, React , Android Studio"}
                id = {'SId2'}
                />
              </motion.div>
              <motion.div 
              whileInView={{top :"19rem" , left: "42rem"}}
              initial={{left:'53rem'}}
              transition={transition}
              style={{top :"19rem" , left: "42rem"}}>
                <Card
                emoji = {Humble}
                heading = {'Videography'}
                detail = {"Adobe Premiere Pro ,Adobe After Effect"}
                id = {'SId3'}
                />
              </motion.div>
              <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services
