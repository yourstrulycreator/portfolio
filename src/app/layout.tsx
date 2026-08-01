import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Michael Nwankwo — Senior Software Engineer & Team Lead",
  description:
    "Engineering leader who ships scalable mobile and web products across Flutter, React/Next, Python, and Laravel. Open to full-time and contract roles.",
  openGraph: {
    title: "Michael Nwankwo — Senior Software Engineer & Team Lead",
    description:
      "Hire a cracked engineer who leads delivery and ships real systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
