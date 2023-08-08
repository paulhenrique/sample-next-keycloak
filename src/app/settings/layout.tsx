import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Settings",
  description: "Autenticação",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>Inside settings</p>
      {children}
    </>
  );
}
