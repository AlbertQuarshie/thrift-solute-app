import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState(() => {
    return localStorage.getItem("user") || null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", userData);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
