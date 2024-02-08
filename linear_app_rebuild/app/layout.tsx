import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Container } from "@/components/Container";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Linear - A better way to build products",
  description:
    "Linear streamlines issues, sprints, and product roadmaps. It's the new standard for modern software development.",
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
          <main className="bg-page-gradient pt-navigation-height">
            {children}
          </main>
          <footer>
            <Container>
              <Footer />
            </Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
