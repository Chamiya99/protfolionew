import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Protfolio from "./Components/Protfolio/Protfolio";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Skill from "./Components/Skill/Skill";

function App() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background: darkmode? 'black': '',
    color : darkmode? 'white': ''}}
    >
      <Navbar/>
      <Intro/>
      <Services/>
      <Skill/>
      <Experience/>
      <Protfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
