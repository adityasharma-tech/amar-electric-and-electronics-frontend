import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import siteConfig from "@/config/siteConfig";
import Footer from "@/components/global/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteConfig.appName,
  description: siteConfig.description
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "overflow-x-hidden")}>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
