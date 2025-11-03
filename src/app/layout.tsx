import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { Metadata } from "next";
import { Providers } from "./providers";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Starwars Planet 🪐",
  description: "Starwars planet list",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full grid place-items-center py-10 h-52">
          <Image
            src="/Star_Wars_Logo.svg"
            alt="Starwars logo"
            width={200}
            height={100}
            className="mix-blend-difference"
          />
        </header>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
