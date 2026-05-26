import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken === null) {
      return true;
    }

    return savedToken === "true";
  });

  const logout = () => {
    localStorage.setItem("token", "false");
    setToken(false);
  };

  const login = () => {
    localStorage.setItem("token", "true");
    setToken(true);
  };

  return (
    <UserContext.Provider value={{ token, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};