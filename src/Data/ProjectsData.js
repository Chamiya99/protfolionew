import ESProject from '../img/ProjectDataImg/ESProject.png'
import AndApp from '../img/ProjectDataImg/AndApp.png'
import RestReport from './Rest_App.pptx'
import weatherReport from './WeatherStation_ProjectReport.pdf'



export const ProjectsData = [

    {
        ID : 'WeatherStation',
        Title: 'Simple Weather Station',
        image1 : ESProject,
        Description: 'This system leverages the Internet of Things (IoT) to revolutionize weather monitoring. By seamlessly integrating sensors, data analytics, and real-time communication, this solution provides a comprehensive and accurate overview of environmental conditions. Stay ahead of the weather with a smart, interconnected solution that transforms how we understand and respond to atmospheric changes. ',
        LinkGit:'https://github.com/Chamiya99/WeatherApp.git',
        Video:'https://youtu.be/fZVLdSawCU0',
        Report : weatherReport,
    },
    {
        ID : 'Restaurant',
        Title: 'LEMON Restaurant Mobile App',
        image1 : AndApp,
        Description: 'LEMON is simple android app which shows foods and beverages in restaurent.Also It can show the restaurent location. ',
        LinkGit:'https://github.com/Chamiya99/RestaurentApp.git',
        Report : RestReport,
    },
]
