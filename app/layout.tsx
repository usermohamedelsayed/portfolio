import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Header, Nav } from "@/components";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Mohammed Elsayed",
  description: `
  hello i am mohammed elsayed front end developer using React.js & Next.js,
  and i am always eager to evolve, improve my skills, and acquire new
  ones.
  `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <div style={{ marginTop: "80px" }}>{children}</div>
        <Nav />
      </body>
    </html>
  );
}
