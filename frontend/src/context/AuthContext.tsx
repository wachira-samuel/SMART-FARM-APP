import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  register: (email: string, password: string, confirmPassword: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);

  const register = async (email: string, password: string, confirmPassword: string) => {
    
    console.log("Registering:", email);
  };

  const login = async (email: string, password: string) => {
    
    console.log("Logging in:", email);
  };

  const logout = () => {
    
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
