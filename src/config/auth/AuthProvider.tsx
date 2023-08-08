"use client";
import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { keycloak } from "@/config/auth";

export interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  return (
    <ReactKeycloakProvider
      initOptions={{
        onLoad: "login-required",
      }}
      authClient={keycloak}
    >
      {children}
    </ReactKeycloakProvider>
  );
};

export default AuthProvider;
