import React from "react";
import "./App.css";
import APOD from './components/APOD';
import Heading from './components/Heading';


function App() {
  
  return (
    <div className="App">
      <p>
        <h1>NASA APOD</h1>
      </p>
      <APOD />
    </div>
  );
}

export default App;
