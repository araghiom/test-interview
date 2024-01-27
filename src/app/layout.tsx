"use client";

import { CssBaseline } from "@mui/material";
import "../assets/styles/main.css";

import CPThemeProvider from "@/context/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CPThemeProvider>
          <CssBaseline />
          {children}
        </CPThemeProvider>
      </body>
    </html>
  );
}
