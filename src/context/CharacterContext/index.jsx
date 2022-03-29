import { createContext } from "react";
import initialCharacters from "../../data.json";

export const CharactersContext = createContext();

const CharactersProvider = ({ children }) => {
  const characters = initialCharacters;

  return (
    <CharactersContext.Provider
      value={{
        characters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersProvider;
