import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StudyBuddy - Your All-in-One Academic Companion",
  description:
    "Manage your academic life with StudyBuddy - featuring library reminders, attendance tracking, assignments, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Head>
            <title>StudyBuddy</title>
            <meta property="og:title" content="StudyBuddy" />
            <meta
              property="og:description"
              content="Your all-in-one academic companion that makes student life easier and more rewarding."
            />
            <meta property="og:image" content="/og.jpg" />
            <meta
              property="og:url"
              content="https://studybuddy-prebuild.vercel.app"
            />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>
          <Navbar />
          <main className="min-h-screen bg-background">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
