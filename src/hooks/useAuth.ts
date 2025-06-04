import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider");
  }
  return {
    isLoggedIn: context.isAuthenticated,
    logout: context.logout,
    user: context.user,
    login: context.login,
  };
};
