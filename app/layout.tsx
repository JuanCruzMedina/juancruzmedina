import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import React from "react";
import { Link } from "@heroui/link";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { textLink } from "@/components/primitives";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Juan Cruz Medina - Software Engineer</title>
        <meta
          content="juancruzmedina, juan cruz medina website"
          name="keywords"
        />
        <meta
          content="Software Engineer based in Argentina, an undergraduate student at UTN-FRC."
          name="description"
        />

        <meta content="website" property="og:type" />
        <meta content="https://juanmedina.com.ar" property="og:url" />
        <meta
          content="Juan Cruz Medina - Software Engineer"
          property="og:title"
        />
        <meta
          content="Software Engineer based in Argentina, an undergraduate student at UTN-FRC."
          property="og:description"
        />

        {/*TODO: add imagizer image*/}

        <meta content="summary_large_image" property="twitter:card" />
        <meta content="https://juanmedina.com.ar/" property="twitter:url" />
        <meta
          content="Juan Cruz Medina - Software Engineer"
          property="twitter:title"
        />
        <meta
          content="Software Engineer based in Argentina, an undergraduate student at UTN-FRC."
          property="twitter:description"
        />
        {/*  TODO: add imagizer for twitter image*/}
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background flex flex-col font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="flex-1 container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-3">
              <span className="text-default-600">
                Designed and developed by Juan Cruz Medina.
              </span>
              <span className="text-default-600">
                Built with{" "}
                <Link
                  isExternal
                  className={textLink()}
                  href="https://heroui.dev"
                >
                  HeroUI
                </Link>{" "}
                &{" "}
                <Link
                  isExternal
                  className={textLink()}
                  href="https://nextjs.org"
                >
                  Next.js
                </Link>
              </span>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
