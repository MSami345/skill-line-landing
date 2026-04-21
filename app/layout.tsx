import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Skilline - Studying Online is now much easier",
  description:
    "Skilline is an interesting platform that will teach you in more an interactive way",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}