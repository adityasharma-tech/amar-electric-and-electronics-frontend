import { Inter } from "next/font/google";
import "./globals.css";
import siteConfig from "@/config/siteConfig";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.appName,
  description: siteConfig.description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
