import "./App.css"
import { themeContext } from "./Context";
import { useContext } from "react";
import Landing from "./Pages/Landing/Landing";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Projects from "./Pages/Projects/Projects";
import Servicedata from "./Pages/Servicedata/Servicedata";

function App() {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkMode;
  return (
    <div className="App"
    style={{background: darkmode? 'black': '',
    color : darkmode? 'white': ''}}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/Service" element={<Servicedata/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
