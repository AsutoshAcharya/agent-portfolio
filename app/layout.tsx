import type React from "react";
import type { Metadata } from "next";
import { bebasNeue, inter, jetbrainsMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asutosh Acharya - Software Engineer",
  description:
    "Personal portfolio with a Valorant-inspired UI featuring my projects, skills, and love for tech and gaming.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className={inter.className}>{children}</body>
    </html>
  );
}
