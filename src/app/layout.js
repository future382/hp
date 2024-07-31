import { Inter } from "next/font/google";
import "./globals.css";
import HeaderNav from "@/components/HeaderNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Biltune Home",
  description: "Front-end Developer / Open Sourceror / Blogger / Android Player",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white dark:bg-gray-950 dark:text-white">
        <HeaderNav />
        <div id="root">
          {children}
        </div>
      </body>
    </html>
  );
}
