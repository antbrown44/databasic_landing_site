import React from "react";
import ReactDOM from "react-dom";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import Optin from "./components/Optin/Optin";

import "./styles.css";

const styles ={
   color: '#fdfefe',
   fontSize: '20px'
 }

const styles2={
   color: '#d6eaf8'
}

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Databasic Info. Sys. <small style={styles2}><i>(Highly available and fault tolerant solutions)</i></small></h2>
        <h3>
          “Something Big is Coming Your Way Soon”, “Be The First To Know”,
          <br />
          "Drop By Again Soon”.
        </h3>
        <Timer /><br /><br /><br /><br />
	  <p>For urgent or general queries, please contact your support or sales contact at databasic systems...</p>
	  <p><a href="#" style={styles}>support@databasic.co.uk</a></p>
        <Preloader />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
