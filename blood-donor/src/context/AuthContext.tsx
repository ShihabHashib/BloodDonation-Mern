import React, { createContext, useContext, useState } from "react";
import { LoginCredentials, AuthUser } from "../types";
import { API_ENDPOINTS } from "../config/apiEndpoints";

interface AuthContextType {
  user: AuthUser | null;
  login: (credentials: LoginCredentials) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
  isLoggedIn: boolean;
  userType: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<AuthUser | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem("user");
  });
  const [userType, setUserType] = useState<string | null>(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      return userData.type || null;
    }
    return null;
  });

  const login = async (credentials: LoginCredentials) => {
    const response = await fetch(API_ENDPOINTS.DONORS.LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Login failed");
    }

    const data = await response.json();
    console.log("Login response:", data);

    const userData: AuthUser = {
      id: data.donor.id,
      fullName: data.donor.fullName,
      email: data.donor.email,
      token: data.token,
      type: data.donor.donorType || data.donor.type || "donor",
    };

    // Store user data
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setIsAuthenticated(true);
    setUserType(userData.type);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
    setUserType(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated,
    isLoggedIn: !!user,
    userType,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
