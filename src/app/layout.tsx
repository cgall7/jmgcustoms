import type { Metadata } from "next";
import { Inter, Vollkorn, Cinzel } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const vollkorn = Vollkorn({ variable: "--font-vollkorn", subsets: ["latin"] });
const cinzel = Cinzel({ variable: "--font-cinzel", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JMG Customs | Handcrafted Woodworks",
  description:
    "JMG Customs builds custom kitchens, tables, and furniture — handcrafted, solid wood, built to last.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${vollkorn.variable} ${cinzel.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
