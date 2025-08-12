import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Textforms } from "./components/Textforms";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('dark'); //weather dark mode is enable or not 
  return (
    <>
      <Navbar title="TextUtils" mode={mode} about="About TextUtils"  />
      {/* <Navbar title="TextUtils" mode={mode} /> */}
      <div className="container my-3">
        <Textforms heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
