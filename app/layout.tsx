import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import BrandedIntro from "@/components/BrandedIntro";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Iuvora — Selected Works & Portfolio",
  description:
    "Explore featured case studies, web development platforms, and mobile prototypes built by Iuvora. Standalone showcase archive.",
  keywords: [
    "Iuvora",
    "Portfolio",
    "Selected Works",
    "Web Development",
    "App Development",
    "Daynit Enterprises",
    "Shams Al Kanari",
    "MH Developers",
    "FitForce",
    "Matru-Sneh"
  ],
  authors: [{ name: "Iuvora", url: "https://iuvora.com" }],
  openGraph: {
    title: "Iuvora — Selected Works & Portfolio",
    description:
      "A curated archive of web applications, luxury brand platforms, and mobile prototypes built by Iuvora.",
    url: "https://iuvora.com",
    siteName: "Iuvora Portfolio",
    locale: "en_US",
    type: "website",
  },
};

const themeInitScript = `
(function() {
  try {
    var savedTheme = localStorage.getItem('iuvora_theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      document.documentElement.classList.add(savedTheme);
      document.documentElement.classList.remove(savedTheme === 'dark' ? 'light' : 'dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans selection:bg-[#2f7bff] selection:text-white">
        <ThemeProvider>
          <BrandedIntro />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
