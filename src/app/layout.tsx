import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "@/components/topbar/topbar";
import Sidebar from "@/components/sidebar/sidebar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Skill-test",
  description: "Frontend dashboard challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased text-[14px] text-[#101012]`}
      >
        <Topbar />
        <div className="flex w-[100%]">
          <Sidebar />
          <div className="w-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
