import React from "react";
import "./Skill.css";
import HTML5Ico from "@iconscout/react-unicons/icons/uil-html5";
import CSSIco from "@iconscout/react-unicons/icons/uil-css3-simple"
import JSIco from "@iconscout/react-unicons/icons/uil-java-script"
import ReactIco from "@iconscout/react-unicons/icons/uil-react"
import AndroidIco from "@iconscout/react-unicons/icons/uil-android"



const Skill = () => {
  return (
    <div className="sk-container" id="sk-skills">
      <div className="sub-title">
       <span>My </span> <span> Skills</span>
      </div>
      <div className="sub-container" id="skills">
        <h1 className="heading">Technical skills</h1>
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
    </div>
  );
};

export default Skill;
