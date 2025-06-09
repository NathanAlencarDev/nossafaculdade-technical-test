// src/app/layout.tsx
import { Layout } from "@/components/Layout";
import "./globals.css";

export const metadata = {
  title: "Minha Universidade",
  description: "Site institucional da UNIFAMEC",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body>
        <body>{children}</body>
      </body>
    </html>
  );
}
