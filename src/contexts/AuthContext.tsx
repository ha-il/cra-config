import React, { ReactNode, createContext, useContext, useMemo } from 'react';
import AuthServiceImplement from 'services/AuthSerivce';

type AuthMethods = {
  signin: (email: string, password: string) => void;
  signup: (email: string, password: string) => void;
  logout: () => void;
};

type AuthContextType = AuthMethods | null;

const AuthContext = createContext<AuthContextType>(null);

export const useAuth = (): AuthMethods => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
  authService: AuthServiceImplement;
};

function AuthProvider({ children, authService }: AuthProviderProps) {
  const signin = authService.signin.bind(authService);
  const signup = authService.signup.bind(authService);
  const logout = authService.logout.bind(authService);

  const contextValue = useMemo(
    () => ({ signin, signup, logout }),
    [signin, signup, logout],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}
export default AuthProvider;
