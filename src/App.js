import "./App.css";
import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Text from "./components/Text";
function App() {
  const [Mode, setMode] = useState('dark');
  
  const toggleMode=() =>{
    if(Mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor='grey';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white';

    }
  }
  return (
    <>
      <Navbar title="Text Utils" aboutText="ABOUT" mode={Mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <Text heading="Enter the text to be analyzed" mode={Mode}/>
      </div>
{/* <div className="container"><About/></div> */}
      
    </>
  );
}

export default App;
