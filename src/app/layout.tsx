import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "../../components/Footer";

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata = {
  title: "Portfolio Emile Z",
  description: "Thanks You",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${satoshi.className} m-0 min-h-screen flex flex-col`}
      >
        {/* Contenu des pages */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer toujours en bas */}
        <Footer />
      </body>
    </html>
  );
}