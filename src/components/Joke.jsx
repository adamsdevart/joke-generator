// Joke.jsx

import React from "react";
import Button from "./Button";
import useJoke from "../hooks/useJoke";
import "../styles/Joke.css";

const Joke = () => {
  const { joke, isLoading, error, fetchJoke } = useJoke();

  return (
    <div className="joke">
      <Button onGenerateJoke={fetchJoke} isLoading={isLoading} />
      {error && <p className="error">Error: {error}</p>}
      {isLoading && <p className="loading">Loading joke...</p>}
      {joke && !isLoading && <p className="joke-text">{joke}</p>}
    </div>
  );
};

export default Joke;
