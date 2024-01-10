"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

type authProviderProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: authProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export default AuthProvider;
