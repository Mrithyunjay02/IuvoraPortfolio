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
    var isDark = savedTheme ? savedTheme === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
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
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground selection:bg-[#2f7bff] selection:text-white">
        <ThemeProvider>
          <BrandedIntro />
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
