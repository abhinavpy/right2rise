import React, { createContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Ensure correct import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (authToken) {
      try {
        const decoded = jwtDecode(authToken);
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
        setUser(null);
        // Optionally, implement logout on invalid token
      }
    } else {
      setUser(null);
    }
  }, [authToken]);

  const login = (token) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthToken(null);
    setUser(null);
    localStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ user, authToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
