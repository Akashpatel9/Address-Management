import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const authCookie = Cookies.get('auth');
    if (authCookie) {
      setUser(JSON.parse(authCookie));
    }
  }, []);

  const saveUser = (user) => {
    if (!user) {
      console.error('Failed to save user: User data is undefined');
      return;
    }
    setUser(user);
    Cookies.set('auth', JSON.stringify(user), { expires: 7 });
  };

  const deleteUser = () => {
    setUser(null);
    Cookies.remove('auth');
  };

  const value = { user, saveUser, deleteUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
