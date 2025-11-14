import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import AuthService from "../services/AuthService";
import type { User } from "../types/auth";
import UserService from "@/services/UserService";

interface AuthState {
  user: User | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  checkSession: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
  });

  const checkSession = async () => {
    const currentUser = await UserService.getCurrentUser();
    setState({
      user: currentUser,
    });
  };

  const login = async (email: string, password: string) => {
    try {
      await AuthService.login(email, password);
      await checkSession();
    } catch (error) {
      AuthService.logout();
      await logout();
      throw error;
    }
  };

  const logout = async () => {
    AuthService.logout();
    setState({ user: null });
  };

  useEffect(() => {
    checkSession();
  }, []);

  const contextValue: AuthContextType = {
    ...state,
    login,
    logout,
    checkSession,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
