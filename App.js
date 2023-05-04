import "./App.css";
import Navbar from "./Navbar";
import { useState } from "react";
function App() {
  const [c, setc] = useState("");
  function Appp() {
    setc(document.getElementById("text").value.toUpperCase());
  }
  
  return (
    <div className="App">
      <header className="STYLE">
        <h1 className="PT">
          <b>Upper Case</b>
        </h1>
        <Navbar></Navbar>
        <br></br>
        <form>
          <textarea
            placeholder="Enter your text here"
            rows={10}
            cols={17}
            id="text"
          ></textarea>
        </form>
        <button type="button" onClick={Appp} className="Ex" id="Class">
          Convert to Upper Case
        </button>
        <br></br>
        <br></br>

        <h3>
          Output:<br></br>
          {c}
        </h3>
        <h4 id="tdk"> </h4>
        <a href="/">Click here</a>
        <h4>
          <b> (You can get more information by clicking on above button)</b>
        </h4>

        <br></br>
      </header>
      <footer>
       
      </footer>
    </div>
  );
}
export default App;
