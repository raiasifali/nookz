import { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-pink-200">{children}</body>
    </html>
  );
}
