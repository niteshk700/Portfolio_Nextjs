import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatDock from "@/screen/common/floatingDock/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitesh Kumar | Full Stack Developer | React.js | Next.js | Laravel",
  description:
    "I’m Nitesh Kumar, a final-year Computer Science and Engineering student at Nitra Technical Campus. I specialize in full stack development using React.js, Next.js, Laravel, and IoT-based solutions. With hands-on experience in building scalable web applications, managing real-time dashboards, and delivering AI-integrated solutions, I thrive at the intersection of innovation and problem-solving.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <div>{children}</div>
        <footer className="fixed bottom-0 left-0 w-full bg-black text-white p-4 z-50">
          <FloatDock />
        </footer>
      </body>
    </html>
  );
}
