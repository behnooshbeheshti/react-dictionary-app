import React from "react";
import Dictionary from "./Dictionary";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <img src={logo} className="logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer>
        Open-sourced on{" "}
        <a
          href="https://github.com/behnooshbeheshti/react-dictionary-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://elegant-engelbart-b9c316.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/behnoosh-beheshti/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Behnoosh Beheshti
        </a>
      </footer>
    </div>
  );
}

export default App;
