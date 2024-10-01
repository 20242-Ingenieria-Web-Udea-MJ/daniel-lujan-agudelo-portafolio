import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Daniel Lujan Agudelo - Portfolio",
  description: "Systems Engineer and Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width" />
        <title>Daniel Lujan Agudelo - Portfolio</title>
      </head>
      <body className="text-white bg-background min-h-[100vh] bg-no-repeat bg-center font-primary">
        <Header />
        <main className="flex flex-col 2xl:pt-10 w-[1200px] px-10 max-md:px-6 max-w-full m-auto pt-20 relative">
          {children}
        </main>
      </body>
    </html>
  );
}
