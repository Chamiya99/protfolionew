import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy5 from '../../img/boy5.png'
import thubsup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassimoj from '../../img/glassesimoji.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import {motion} from 'framer-motion'

function Intro() {

    const transition = {duration : 2, type: 'spring'}

    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span style={{color:darkmode? 'white': ''}}>Hi! I Am</span>
            <span>Chamika Heshan</span>
            <span>Frontend Devoloper | Android Devoloper | Video Editor </span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href="https://github.com/Chamiya99">
            <img src={Github} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/chamika-heshan-4b8b95280">
            <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/c_h_a_m_i_y_a_99/">
            <img src={Instagram} alt="" />
            </a>
        </div>
        
        </div>

        <div className="i-right">

            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy5} alt=""/>

            <motion.img
            initial={{left: '-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassimoj} alt="" />

            <motion.div style={{top: '-4%', left: '68%'}}
            initial={{top: '-4%',left:'74%'}}
            whileInView={{left:'68%'}}
            transition={transition}
            className='floating-div'
            >
                <FloatingDiv image={Crown} txt1 = 'Web | App' txt2 = 'Developer'/>

            </motion.div>

            <motion.div style={{top: '18rem', left: '0rem'}}
            initial={{top: '18rem',left:'9rem'}}
            whileInView={{left:'0rem'}}
            transition={transition}
            className='floating-div'
            >
            <FloatingDiv image={thubsup} txt1 = 'Creative' txt2 = 'Designer'/>
            </motion.div>
            {/* Blur Divs*/}
            <div className='blur' style={{background: "rgb(238 210 255)"}}></div>
            <div className='blur' style={{background: "#C1F5FF", top: '17rem', width: '21rem', height: '11rem', left:'-9rem'}}></div>       
        </div>
    </div>
  )
}

export default Intro
