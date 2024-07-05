import "./App.css";
import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,  
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => { 
      setAlert(null)
    },1500);
  }
  const toggleMode=() =>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode is enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="Text Utils" aboutText="ABOUT" mode={Mode} toggleMode={toggleMode} />
      
      <Alert alert={alert}/>
      
      <div className="container my-3">
        <Routes>
          {/* Exact is used for exact matching, or else it always does partial matching, so 
          it might not always give accurate Routes
          eg:
          /users/component1
          /user/component2 */}
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/" element={<Text heading="Enter the text to be analyzed" mode={Mode} showAlert={showAlert} />} />
        </Routes>
      </div> 
      </Router>
    </>
  );
}

export default App;
