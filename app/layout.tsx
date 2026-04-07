import localFont from "next/font/local";
import "./globals.css";
// import { Navbar } from "./components/Navbar";

const sfPro = localFont({
  src: [
    {
      path: "./fonts/SFPRODISPLAYREGULAR.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/SFPRODISPLAYMEDIUM.woff2",
      weight: "500",
      style: "normal",
    },
    { path: "./fonts/SFPRODISPLAYBOLD.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sf-pro",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${sfPro.variable}`}>
      <body className="font-sans antialiased bg-neutral-950 text-white selection:bg-primary-500/30">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
