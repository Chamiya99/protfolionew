import React from "react";
import "./Skill.css";
import { useRef } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';
import HTML5Ico from "@iconscout/react-unicons/icons/uil-html5";
import CSSIco from "@iconscout/react-unicons/icons/uil-css3-simple"
import JSIco from "@iconscout/react-unicons/icons/uil-java-script"
import ReactIco from "@iconscout/react-unicons/icons/uil-react"
import AndroidIco from "@iconscout/react-unicons/icons/uil-android"
import ServerIco from "@iconscout/react-unicons/icons/uil-server"
import DominIco from "@iconscout/react-unicons/icons/uil-server-network"
import DBIco from "@iconscout/react-unicons/icons/uil-database"
import NetIco from "@iconscout/react-unicons/icons/uil-file-network"
import MSIco from "@iconscout/react-unicons/icons/uil-microsoft"

const Skill = () => {

    const theme = useContext(themeContext);
    const darkmode = theme.state.darkMode;

  return (
    <div className="sk-container" id="sk-skills">
      <div className="sub-title">
      
         <span style={{color:darkmode? 'white': ''}}>My </span><span> Skills</span> 
      
       
      </div>
      <div className="sub-container-main">

            <div className="sub-container-left" id="skills">
                <h1 className="heading">Programming</h1>
                <div className="technical-bars">
                    <div className="bar">
                        <HTML5Ico color={'#c95d2e'}/>
                        <div className="info">
                            <span>HTML</span>
                        </div>
                        <div className="progress-line html">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <CSSIco color={'#147bbc'}/>
                        <div className="info">
                            <span>CSS</span>
                        </div>
                        <div className="progress-line css">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <JSIco color={'#b0bc1e'}/>
                        <div className="info">
                            <span>JS</span>
                        </div>
                        <div className="progress-line js">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <ReactIco color={'#69bcbc'}/>
                        <div className="info">
                            <span>React</span>
                        </div>
                        <div className="progress-line react">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <AndroidIco color={'#c32ec9'}/>
                        <div className="info">
                            <span>Android App</span>
                        </div>
                        <div className="progress-line android">
                        <span></span>
                        </div>
                    </div>

                </div>
             </div>

             <div className="sub-container-right" id="skills">
                <h1 className="heading">Other skills</h1>
                <div className="technical-bars">
                    <div className="bar">
                        <ServerIco color={'#c95d2e'}/>
                        <div className="info">
                            <span>MS Server 2016 2019</span>
                        </div>
                        <div className="progress-line html">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <DominIco color={'#147bbc'}/>
                        <div className="info">
                            <span>AD DC DNS DHCP</span>
                        </div>
                        <div className="progress-line css">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <DBIco color={'#b0bc1e'}/>
                        <div className="info">
                            <span>Database</span>
                        </div>
                        <div className="progress-line js">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <NetIco color={'#69bcbc'}/>
                        <div className="info">
                            <span>Networking</span>
                        </div>
                        <div className="progress-line react">
                        <span></span>
                        </div>
                    </div>

                    <div className="bar">
                        <MSIco color={'#c32ec9'}/>
                        <div className="info">
                            <span>MS Office Package</span>
                        </div>
                        <div className="progress-line android">
                        <span></span>
                        </div>
                    </div>

                </div>
             </div>
      </div>
    </div>
  );
};

export default Skill;
