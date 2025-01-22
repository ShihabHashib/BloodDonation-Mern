import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  userType: "donor" | "patient" | null;
  user: any | null;
  login: (credentials: any) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"donor" | "patient" | null>(null);
  const [user, setUser] = useState(null);

  const login = async (credentials: any) => {
    try {
      // API call to login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();

      setUser(data.user);
      setUserType(data.userType);
      setIsLoggedIn(true);
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  };

  useEffect(() => {
    // Check for existing token on app load
    const token = localStorage.getItem("token");
    if (token) {
      // Validate token and set user state
      // You would typically make an API call here
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, userType, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
