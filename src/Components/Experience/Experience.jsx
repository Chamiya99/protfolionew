import React from 'react'
import './Experience.css'
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Experience = () => {
   
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="circle">2+</div>
            <span style={{color:darkmode? 'white': ''}}>years</span>
            <span style={{color:darkmode? 'white': ''}}>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span style={{color:darkmode? 'white': ''}}>Completed</span>
            <span style={{color:darkmode? 'white': ''}}>Projects</span>
        </div>
    </div>
  )
}

export default Experience
