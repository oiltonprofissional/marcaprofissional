import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marca Profissional",
  description: "Presença profissional na web.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
