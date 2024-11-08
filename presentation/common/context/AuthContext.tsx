import { User } from "@/domain/entities/User";
import React, { useEffect } from "react";
import { useUserData } from "../hooks/useUserData";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
};

const AuthContext = React.createContext<AuthContextType | null>(null);

export default function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData: user, isLoading } = useUserData();

  return (
    <AuthContext.Provider value={{ user, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  const context = React.useContext(AuthContext);
  if (context == null) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context;
}
