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
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="circle">5+</div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
    </div>
  )
}

export default Experience
