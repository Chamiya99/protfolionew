import React from 'react'
import './Projects.css'
import Backicon from "@iconscout/react-unicons/icons/uil-angle-left";
import img1 from '../../img/ServicesDataImg/1.webp'
import LinkedInICO from '@iconscout/react-unicons/icons/uil-linkedin';
import DownICO from '@iconscout/react-unicons/icons/uil-file-download'
import GitICO from '@iconscout/react-unicons/icons/uil-github'
import { useParams } from 'react-router-dom';
import { ProjectsData } from '../../Data/ProjectsData';


const Projects = () => {
  const {id} = useParams();
  console.log(id);
  const project = ProjectsData.find(project => project.ID === id);

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
          <span>{project.Title}</span>
        </div>
        <div className="p-desc">
          <div className="p-desc-left">
            <img src={project.image1} alt="" />
            <img src={project.image2} alt="" />
          </div>
          <div className="p-desc-right">
            <span>{project.Description}</span>
            <div className="p-desc-right-links">
              <a href={project.Report} >
                <div className="outline-btn">
                    <DownICO/>
                    <span>Project Report</span>
                </div>
              </a>
              <a href={project.LinkLinkedIn} >
                <div className="outline-btn">
                    <LinkedInICO/>
                    <span>LinkedIn</span>
                </div>
              </a>
              <a href={project.LinkGit} >
                <div className="outline-btn">
                    <GitICO/>
                    <span>GitHub</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
