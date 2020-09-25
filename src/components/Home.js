import React from "react";
import logo from "./../assets/Eto-bottom-tp.png";
import "./../styles/App.css";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Home Page </p>
      </header>
    </div>
  );
}

export default Home;
