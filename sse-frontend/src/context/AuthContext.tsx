import { createContext, useContext } from "react";

export const INITIAL_USER = {
  name: "tyler sharkey",
  email: "test@gmail.com",
  username: "tsharkey"
};

const INITIAL_STATE = {
  user: INITIAL_USER,
};

const AuthContext = createContext(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return <AuthContext.Provider value={INITIAL_STATE}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);