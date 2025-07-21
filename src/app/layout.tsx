import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DarkModeProvider from "@/context/DarkModeContext";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Pratyush Singha - Full Stack Developer",
  description:
    "Passionate full stack developer with strong technical skills and a hunger to learn. Skilled in working with modern frameworks such as React and Next js, Seeking opportunities to work with a dynamic team where I can contribute my skills and grow as a developer. Let's connect and discuss how I can help bring your projects to life.",
  keywords:
    "Pratyush Singha, pratyushsingha, pratyushsingha projects, pratyushsinga , Full Stack Developer, Web Developer, Portfolio, JavaScript, TypeScript, React, Node.js, software engineer",
  authors: [{ name: "Pratyush Singha" }],
  openGraph: {
    title: "Pratyush Singha - Full Stack Developer",
    description:
      "Explore the portfolio of Pratyush Singha, showcasing innovative web applications and development skills.",
    url: "https://pratyushsinga.me",
    siteName: "Pratyush Singha Portfolio",
    images: [
      {
        url: "/icon.jpeg",
        width: 800,
        height: 600,
        alt: "Pratyush Singha Portfolio",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.jpeg" type="image/png" sizes="32x32" />
      </head>
      <DarkModeProvider>
        <body className={`bg-white dark:bg-black`}>
          <Toaster position="bottom-right" />
          <Theme className="dark:!bg-black">
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </Theme>
          <Script
            defer
            data-domain="pratyushsinghaaa.vercel.app"
            src="https://insightbolt-gray.vercel.app/tracking-script.js"
          />
          <script defer data-domains="localhost:3001" src="http://localhost:3000/script.js"></script>
          <script defer src="https://cloud.umami.is/script.js" data-website-id="63d61909-f1ad-41ed-b2bf-ac2132c961b7"></script>
          <script async src="https://pub-64d7c9742ee54006ae9f38e02aa8539e.r2.dev/19b7c1d8-6f76-42ba-846a-e16cf3360ab9/script.min.js" data-pid="19b7c1d8-6f76-42ba-846a-e16cf3360ab9"></script>
        </body>
      </DarkModeProvider>
    </html>
  );
}
