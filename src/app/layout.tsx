import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Currency Converter",
  description: "Convert your currencies easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
