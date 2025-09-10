// useJoke.js

import { useState, useCallback } from "react";

const useJoke = () => {
  const [joke, setJoke] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJoke = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://sv443.net/jokeapi/v2/joke/Programming?type=single"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setJoke(data.joke);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching joke:", err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const clearJoke = useCallback(() => {
    setJoke("");
    setError(null);
  }, []);

  return {
    joke,
    isLoading,
    error,
    fetchJoke,
    clearJoke,
  };
};

export default useJoke;
