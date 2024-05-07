import React from 'react'
import './Projects.css'
import Backicon from "@iconscout/react-unicons/icons/uil-angle-left";
import img1 from '../../img/ServicesDataImg/1.webp'
import LinkedInICO from '../../img/linkedin.png'
import GitICO from '../../img/github.png'


const Projects = () => {
  return (
    <div className="p-data">
      <div className="back">
        <a href="/">
          <button>
            <Backicon />
            <span>Back</span>
          </button>
        </a>
      </div>

      <div className="p-details">
        <div className="p-title">
          <span>Title</span>
        </div>
        <div className="p-desc">
          <div className="p-desc-left">
            <img src={img1} alt="" />
          </div>
          <div className="p-desc-right">
            <span>Project Description</span>
            <button>Project Report</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
