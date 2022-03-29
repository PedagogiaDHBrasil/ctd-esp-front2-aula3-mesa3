import React, { createContext, useState } from "react";

export const UserContext = createContext();

const initialUser = {
  id: 1,
  name: "Steve",
  favoriteCharacters: [],
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);

  const login = () => {
    setUser(initialUser);
  };

  const logout = () => {
    setUser(null);
  };

  const favoriteCharacterUser = (idcharacter) => {
    const isfavorite = user.favoriteCharacters.includes(idcharacter);
    const favoriteCharacters = isfavorite
      ? user.favoriteCharacters.filter(
          (idfavorite) => idfavorite !== idcharacter
        ) // Deleta
      : [...user.favoriteCharacters, idcharacter]; // Adiciona

    setUser({
      ...user,
      favoriteCharacters,
    });
  };

  return (
    <UserContext.Provider
      value={{
        user,
        login,
        logout,
        favoriteCharacterUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
