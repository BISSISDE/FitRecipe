import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function getUsers() {
  const saved = localStorage.getItem("users");
  return saved ? JSON.parse(saved) : [];
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const users = getUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password
    );
    if (found) {
      setUser({ email });
      localStorage.setItem("user", JSON.stringify({ email }));
      return { success: true };
    } else {
      return { success: false, message: "Неверный email или пароль!" };
    }
  };

  const register = (email, password) => {
    const users = getUsers();
    const exists = users.some((u) => u.email === email);
    if (exists) {
      return { success: false, message: "Этот email уже зарегистрирован!" };
    }
    const newUsers = [...users, { email, password }];
    saveUsers(newUsers);
    setUser({ email });
    localStorage.setItem("user", JSON.stringify({ email }));
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
