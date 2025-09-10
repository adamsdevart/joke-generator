// App.jsx

import React from "react";
import Joke from "./components/Joke";
import "./styles/App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Joke Generator Using React and Joke API</h1>
      </header>
      <main>
        <Joke />
      </main>
    </div>
  );
};

export default App;
