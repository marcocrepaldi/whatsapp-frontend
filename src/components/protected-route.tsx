"use client";
import { ReactNode } from "react";
import { AuthProvider } from "./auth-provider";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
