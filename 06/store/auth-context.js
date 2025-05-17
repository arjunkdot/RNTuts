import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [token, setToken] = useState();

  function authenticate(token) {
    setToken(token);
    AsyncStorage.setItem("token", token);
  }

  function logout() {
    setToken(null);
    AsyncStorage.removeItem("token");
  }

  const value = {
    token,
    isAuthenticated: !!token,
    authenticate,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
