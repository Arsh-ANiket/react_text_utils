import "./App.css";
import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
import Alert from "./components/Alert";



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
      <Navbar title="Text Utils" aboutText="ABOUT" mode={Mode} toggleMode={toggleMode} />

      <Alert alert={alert}/>

      <div className="container my-3">
        <Text heading="Enter the text to be analyzed" mode={Mode} showAlert={showAlert} />
      </div>

    </>
  );
}

export default App;
