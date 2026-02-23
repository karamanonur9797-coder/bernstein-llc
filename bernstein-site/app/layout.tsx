import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const themeInitScript = `
(() => {
  try {
    const stored = localStorage.getItem("theme-preference");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  } catch (_) {}
})();
`;

export const metadata: Metadata = {
  title: {
    default: "BERNSTEIN LLC. — Made With Reason",
    template: "%s | BERNSTEIN LLC.",
  },
  description:
    "Ready-to-wear and footwear built for the way you move through the world. Craft that carries its weight.",
  keywords: [
    "BERNSTEIN LLC",
    "luxury",
    "ready-to-wear",
    "footwear",
    "loafers",
    "leather",
    "craft",
    "minimal",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "BERNSTEIN LLC.",
    title: "BERNSTEIN LLC. — Made With Reason",
    description:
      "Ready-to-wear and footwear built for the way you move through the world.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
