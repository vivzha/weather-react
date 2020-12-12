import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather defaultCity="New York" />
        <footer>
          This project is created by Vivian Zhang and is{" "}
          <a
            href="https://github.com/vivzha/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
