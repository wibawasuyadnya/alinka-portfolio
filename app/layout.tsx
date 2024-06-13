import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientThemeWrapper from "@/context/ClientThemeWrapper";
import { Providers } from "@/redux/provider";
import ScrollTopButton from "@/components/Layout-components/ScrollTop";

const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={public_sans.className}>
        <Providers>
          <ThemeProvider>
            <ClientThemeWrapper>
              {children}
              <ScrollTopButton />
            </ClientThemeWrapper>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
