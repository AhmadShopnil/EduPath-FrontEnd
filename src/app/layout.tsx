import Navbar from "@/components/Header/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LearnAI - AI-Powered Personalized Learning Path Platform",
  description:
    "Create custom learning modules, track your progress, and achieve your goals with AI-driven recommendations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
