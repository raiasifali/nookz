import { ReactNode } from "react";
import "./globals.css";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>NOOKZ.</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="Find stylish, durable contract furniture suppliers for restaurants, offices, and more. Perfect solutions to suit your space and business needs across the UK." />
        <meta name="keywords" content="Contract Furniture Suppliers" />
        <meta name="title" content="NOOKZ - High-Quality Contract Furniture Suppliers in UK" />
      </head>
      <body className="bg-gradient-to-b from-pink-200">{children}</body>
    </html>
  );
}
