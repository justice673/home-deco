import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HomeDeco - Interior Design Solutions",
  description: "Modern interior design solutions for your home and office",
  icons: {
    icon: "/images/home.png",
    shortcut: "/images/home.png",
    apple: "/images/home.png",
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
        <link rel="icon" href="/images/home.png" type="image/png" />
        <link rel="shortcut icon" href="/images/home.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/home.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Lato:wght@100;300;400;700;900&display=swap"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
