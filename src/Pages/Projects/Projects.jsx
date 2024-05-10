import React from 'react'
import './Projects.css'
import Backicon from "@iconscout/react-unicons/icons/uil-angle-left";
import DownICO from '@iconscout/react-unicons/icons/uil-file-download'
import GitICO from '@iconscout/react-unicons/icons/uil-github'
import YTICO from '@iconscout/react-unicons/icons/uil-youtube'
import { useParams } from 'react-router-dom';
import { ProjectsData } from '../../Data/ProjectsData';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Projects = () => {

  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode; 

  const {id} = useParams();
  console.log(id);
  const project = ProjectsData.find(project => project.ID === id);

  if (!project) {
    return <div>Service not found</div>;
  }

  
  return (
    <div className="p-data">
      <div className="back">
        <a href="/">
          <button style={{color:darkmode? 'white':''}}>
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
            
          </div>
          <div className="p-desc-right">
            <span>{project.Description}</span>
            <div className="p-desc-right-links">
              {project.Report && (
                <a href={project.Report}>
                  <div className="outline-btn">
                    <DownICO />
                    <span>Project Report</span>
                  </div>
                </a>
              )}
              {project.LinkGit && (
                <a href={project.LinkGit}>
                  <div className="outline-btn">
                    <GitICO />
                    <span>Git Repositorie</span>
                  </div>
                </a>
              )}
              {project.Video && (
                <a href={project.Video}>
                  <div className="outline-btn">
                    <YTICO/>
                    <span>Demo Video</span>
                  </div>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
