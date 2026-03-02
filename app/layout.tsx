"use client";

import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { navbarData } from "@/data/navbar";
import { footerData } from "@/data/home";
import { usePathname } from "next/navigation";
import HeaderForApply from "@/components/layout/HeaderForApply";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideNavbarFooter = pathname?.endsWith("/apply"); 
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased font-sans bg-white text-gray-900">
        {hideNavbarFooter && <HeaderForApply data={navbarData}/>}
        {!hideNavbarFooter && <Navbar data={navbarData} />}
          <main>{children}</main>
        {!hideNavbarFooter && <Footer data={footerData} />}
      </body>
    </html>
  );
}

// https://start.zeromoblt.com/