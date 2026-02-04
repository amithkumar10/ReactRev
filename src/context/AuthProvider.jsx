import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const storedUser = Cookies.get("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoaded(true);
    
  }, []);

const login = (userData) => {
  Cookies.set("user", JSON.stringify(userData), {
    expires: 1,      
  });
  setUser(userData);
};

const logout = () => {
  Cookies.remove("user",);
  setUser(null);
};

  return (
    <AuthContext.Provider value={{ user, login, logout, loaded }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
