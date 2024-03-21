import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sittipol",
  description: "Sittipol Resume Development",
  icons: {
    icon: "/images/Roshidere.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Sittipol Website" />
      <meta property="og:type" content="content" />
      <meta
        property="og:description"
        content="Hello, I'm Aum. I have a total of 1.8 years of experience
                in programming. I am able to create projects and close them. I
                have been working with cms and salepage systems for 1 year. The
                system was developed with the laravel framework."
      />
      <meta property="og:image" content="/image/Roshidere.png" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
