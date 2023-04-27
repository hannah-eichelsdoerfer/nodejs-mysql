import React from "react";
import "./App.css";
import MovieList from "./components/Movies";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MovieList />
      </header>
    </div>
  );
}

export default App;
