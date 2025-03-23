import ChatBot from "@/src/components/ChatBot";
import CookieConsent from "@/src/components/CookieConsent";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slack: Where Work Happens",
  description:
    "Slack is where work flows. It's where the people you need, the information you share, and the tools you use come together to get things done.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CookieConsent />
        <ChatBot />
      </body>
    </html>
  );
}
