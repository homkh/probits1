import type { Metadata } from "next";
import "@/styles/globals.css";

import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import topBackgroundImg from "@/../../public/assets/images/topGradient.svg";

export const metadata: Metadata = {
  title: "Probits",
  description: "Probits.com.au",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-gotham">
        <header className="relative top-0 left-0">
          <div className="absolute -inset-0">
            <Image
              src={topBackgroundImg}
              alt="backgroundImages"
              className="object-contain bg-cover bg-no-repeat"
            />
          </div>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
