import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import { Geist } from "next/font/google";

const geist = Geist({ 
  subsets: ["latin"], 
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "LOAD Systems",
  description: "Software solutions for modern businesses",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
    lang="es"
    className="light"
    >
      <body className="font-sans antialiased bg-white text-black">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}