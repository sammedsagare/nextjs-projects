import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height ,  initial-scale=1"
        />
      </head>
      <body className={inter.className}>
        <div>
          <Header />
          <main className="pt-navigation-height">{children}</main>
          <footer>
            <Container>footer</Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
