import { createContext, useCallback, useEffect, useState } from "react";
import { DATABASES, PROGRAMING_LANGS, MOVIES } from "../constants";

const WORD_SOURCES = {
  "programming language": PROGRAMING_LANGS,
  database: DATABASES,
  movies: MOVIES
};
const wordsources = ["programming language", "database", "movies"];

export const WordsourceContext = createContext();

const getRandomWord = (source) =>
  source[Math.floor(Math.random() * source.length)];

export const WordsourceContextProvider = ({ children }) => {
  const [wordsource, setWordsource] = useState(wordsources[0]);
  const [guessword, setGuessWord] = useState(
    getRandomWord(WORD_SOURCES[wordsources[0]])
  );

  const resetGuessword = useCallback(() => {
    setGuessWord(getRandomWord(WORD_SOURCES[wordsource]));
  }, [setGuessWord, wordsource]);

  useEffect(() => {
    resetGuessword();
  }, [wordsource, resetGuessword]);

  return (
    <WordsourceContext.Provider
      value={{
        wordsource,
        guessword,
        setWordsource,
        setGuessWord,
        wordsources,
        resetGuessword
      }}
    >
      {children}
    </WordsourceContext.Provider>
  );
};
