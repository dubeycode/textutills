import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Textforms } from "./components/Textforms";

let name = "Dubey Ji";
function App() {
  return (
    <div>
      <Navbar title="TextUtils" about="About TextUtils" />
      <div className="container my-3">
        <Textforms heading="Enter the text to analyze below" />
      </div>
     
    </div>
  );
}

export default App;
