import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Textforms } from "./components/Textforms";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //weather dark mode is enable or not 
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
    
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} about="About TextUtils" toggleMode={toggleMode} />
      {/* <Navbar title="TextUtils" mode={mode} /> */}
      <div className="container my-3">
        <Textforms heading="Enter the text to analyze below" mode={mode}  />
      </div>
    </>
  );
}
export default App;
