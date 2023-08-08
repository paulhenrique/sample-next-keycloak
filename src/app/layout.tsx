import { AuthProvider } from "@/config/auth";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Exemplo auth keycloak",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AuthProvider>
          <h1>Example Login App</h1>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
